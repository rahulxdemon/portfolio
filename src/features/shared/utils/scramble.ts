/**
 * createScramble - plain TS text scramble controller for a DOM element.
 *
 * Usage:
 *   import { createScramble } from './createScramble';
 *
 *   const el = document.querySelector<HTMLElement>('#title')!;
 *   const scramble = createScramble(el, {
 *     text: 'Hello world',
 *     speed: 1,
 *     playOnMount: true,
 *   });
 *
 *   scramble.setText('New text');
 *   scramble.replay();
 *   scramble.updateOptions({ speed: 0.5 });
 *   scramble.destroy();
 */

type RangeOrCharCodes = [number, number] & Array<number>;

export type ScrambleOptions = {
  /**
   * When playOnMount is true, the animation will not play the first time a text input is provided.
   * @default true
   */
  playOnMount?: boolean;
  /** Text to scramble to. */
  text?: string;
  /**
   * 0-1 range that determines the scramble speed. A speed of 1 will redraw 60 times a second.
   * A speed of 0 will pause the animation.
   * @default 1
   */
  speed?: number;
  /**
   * The controller will move forward along the text input and scramble more characters,
   * at a pace of `tick` frames. Combined with `speed`, controls the animation rate.
   * @default 1
   */
  tick?: number;
  /**
   * Step forward on every tick.
   * @default 1
   */
  step?: number;
  /** Chance of scrambling a character, 0 to 1. */
  chance?: number;
  /**
   * Randomize `seed` characters at random text positions.
   * @default 1
   */
  seed?: number;
  /**
   * How many times to scramble each character.
   * @default 1
   */
  scramble?: number;
  /** Characters to avoid scrambling. */
  ignore?: string[];
  /**
   * Unicode character range for the scrambler.
   * A 2-tuple picks a random char code in that range; more than two values
   * picks randomly among the given values only.
   * @default [65, 125]
   */
  range?: RangeOrCharCodes;
  /** Set overdrive mode, optionally with the unicode char code to flash. */
  overdrive?: boolean | number;
  /**
   * Always start text animation from an empty string.
   * @default true
   */
  overflow?: boolean;
  /** Callback when animation starts drawing. */
  onAnimationStart?: () => void;
  /** Callback for when the animation finished. */
  onAnimationEnd?: () => void;
  /** Callback fired with the current rendered string on every redraw. */
  onAnimationFrame?: (result: string) => void;
};

export type ScrambleController = {
  /** The DOM node being animated. */
  node: HTMLElement;
  /** Alias for play(), matches the original hook's returned name. */
  replay: () => void;
  /** Update the text being scrambled to. */
  setText: (newText: string) => void;
  /** Update any options live (speed, chance, range, etc.). */
  updateOptions: (newOptions: Partial<ScrambleOptions>) => void;
  /** Stop the animation and release the animation frame. */
  destroy: () => void;
};

type ControlValue = string | number | null | undefined;

const DEFAULTS: Required<Omit<ScrambleOptions, 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationFrame'>> = {
  playOnMount: true,
  text: '',
  speed: 1,
  tick: 1,
  step: 1,
  chance: 1,
  seed: 1,
  scramble: 1,
  ignore: [' '],
  range: [65, 125] as RangeOrCharCodes,
  overdrive: true,
  overflow: true,
};

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomChar(range: RangeOrCharCodes): string {
  let rand = 0;
  if (range.length === 2) {
    rand = getRandomInt(range[0], range[1]);
  } else {
    rand = range[getRandomInt(0, range.length - 1)];
  }
  return String.fromCharCode(rand);
}

export function createScramble(node: HTMLElement, options: ScrambleOptions = {}): ScrambleController {
  if (!node) {
    throw new Error('createScramble: a DOM node is required');
  }

  // merged, mutable option state (equivalent to the hook's destructured props)
  let opts: Required<ScrambleOptions> = {
    ...DEFAULTS,
    onAnimationStart: undefined as unknown as () => void,
    onAnimationEnd: undefined as unknown as () => void,
    onAnimationFrame: undefined as unknown as (result: string) => void,
    ...options,
  } as Required<ScrambleOptions>;

  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  if (prefersReducedMotion) {
    opts.step = opts.text.length;
    opts.chance = 0;
    opts.overdrive = false;
  }

  // --- state (equivalent to the hook's useRef values) ---
  let rafId = 0;
  let elapsed = 0;
  let fpsInterval = 1000 / (60 * opts.speed);
  let stepCount = 0;
  let scrambleIndex = 0;
  let control: ControlValue[] = [];
  let overdriveIndex = 0;

  const setIfNotIgnored = (value: ControlValue, replace: ControlValue): ControlValue => (opts.ignore.includes(`${value}`) ? value : replace);

  function seedForward(): void {
    if (scrambleIndex === opts.text.length) return;

    for (let i = 0; i < opts.seed; i++) {
      const index = getRandomInt(scrambleIndex, control.length);
      if (typeof control[index] !== 'number' && typeof control[index] !== 'undefined') {
        control[index] = setIfNotIgnored(control[index], getRandomInt(0, 10) >= (1 - opts.chance) * 10 ? opts.scramble || opts.seed : 0);
      }
    }
  }

  function stepForward(): void {
    for (let i = 0; i < opts.step; i++) {
      if (scrambleIndex < opts.text.length) {
        const currentIndex = scrambleIndex;
        const shouldScramble = getRandomInt(0, 10) >= (1 - opts.chance) * 10;

        control[currentIndex] = setIfNotIgnored(
          opts.text[scrambleIndex],
          shouldScramble ? opts.scramble + getRandomInt(0, Math.ceil(opts.scramble / 2)) : 0,
        );
        scrambleIndex++;
      }
    }
  }

  function resizeControl(): void {
    if (opts.text.length < control.length) {
      control.pop();
      control.splice(opts.text.length, opts.step);
    }
    for (let i = 0; i < opts.step; i++) {
      if (control.length < opts.text.length) {
        control.push(setIfNotIgnored(opts.text[control.length + 1], null));
      }
    }
  }

  function onOverdrive(): void {
    if (!opts.overdrive) return;

    for (let i = 0; i < opts.step; i++) {
      const max = Math.max(control.length, opts.text.length);
      if (overdriveIndex < max) {
        control[overdriveIndex] = setIfNotIgnored(
          opts.text[overdriveIndex],
          String.fromCharCode(typeof opts.overdrive === 'boolean' ? 95 : opts.overdrive),
        );
        overdriveIndex++;
      }
    }
  }

  function onTick(): void {
    stepForward();
    resizeControl();
    seedForward();
  }

  function animate(time: number): void {
    if (!opts.speed) return;

    rafId = requestAnimationFrame(animate);

    onOverdrive();

    const timeElapsed = time - elapsed;
    if (timeElapsed > fpsInterval) {
      elapsed = time;

      if (stepCount % opts.tick === 0) {
        onTick();
      }

      draw();
    }
  }

  function draw(): void {
    if (!node) return;

    let result = '';

    for (let i = 0; i < control.length; i++) {
      const controlValue = control[i];

      switch (true) {
        case typeof controlValue === 'number' && controlValue > 0:
          result += getRandomChar(opts.range);
          if (i <= scrambleIndex) {
            control[i] = (control[i] as number) - 1;
          }
          break;

        case typeof controlValue === 'string' && (i >= opts.text.length || i >= scrambleIndex):
          result += controlValue;
          break;

        case controlValue === opts.text[i] && i < scrambleIndex:
          result += opts.text[i];
          break;

        case controlValue === 0 && i < opts.text.length:
          result += opts.text[i];
          control[i] = opts.text[i];
          break;

        default:
          result += '';
      }
    }

    node.innerHTML = result;

    // biome-ignore lint/complexity/useOptionalChain: better understanding
    opts.onAnimationFrame && opts.onAnimationFrame(result);

    if (result === opts.text) {
      control.splice(opts.text.length, control.length);

      // biome-ignore lint/complexity/useOptionalChain: better understanding
      opts.onAnimationEnd && opts.onAnimationEnd();
      cancelAnimationFrame(rafId);
    }

    stepCount++;
  }

  function reset(): void {
    stepCount = 0;
    scrambleIndex = 0;
    overdriveIndex = 0;
    if (!opts.overflow) {
      control = new Array(opts.text?.length);
    }
  }

  function restartLoop(): void {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(animate);
  }

  function play(): void {
    cancelAnimationFrame(rafId);
    reset();

    // biome-ignore lint/complexity/useOptionalChain: better understanding
    opts.onAnimationStart && opts.onAnimationStart();
    rafId = requestAnimationFrame(animate);
  }

  function setText(newText: string): void {
    opts.text = newText;
    reset();
    restartLoop();
  }

  function updateOptions(newOptions: Partial<ScrambleOptions>): void {
    opts = { ...opts, ...newOptions } as Required<ScrambleOptions>;
    fpsInterval = 1000 / (60 * opts.speed);
    restartLoop();
  }

  function destroy(): void {
    cancelAnimationFrame(rafId);
  }

  // --- initialization (mirrors the hook's mount effects) ---
  if (!opts.playOnMount) {
    control = opts.text.split('');
    stepCount = opts.text.length;
    scrambleIndex = opts.text.length;
    overdriveIndex = opts.text.length;
    draw();
    cancelAnimationFrame(rafId);
  } else {
    rafId = requestAnimationFrame(animate);
  }

  return {
    node,
    replay: play,
    setText,
    updateOptions,
    destroy,
  };
}
