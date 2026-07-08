import type { UseScrambleProps } from 'use-scramble';

export const SCRAMBLE_CONFIG = (text: string) => {
  const config: UseScrambleProps = {
    text,
    speed: 0.6, // Explicitly set the base speed (default is 1)
    tick: 1, // Reduce this so it advances quickly along the string
    step: 1, // Ensures it introduces 1 new character position per redraw
    scramble: 10, // Increase this so characters shuffle longer before resolving
    overdrive: false,
  };
  return config;
};
