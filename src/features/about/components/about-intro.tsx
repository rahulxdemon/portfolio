import { useScramble } from 'use-scramble';
import { SCRAMBLE_CONFIG } from '@/features/shared/data/scramble-config';

export function AboutIntro() {
  return (
    <div>
      <Name />
      <Location />
    </div>
  );
}

function Name() {
  const { ref, replay } = useScramble(SCRAMBLE_CONFIG('Rahul Palamarthi'));

  return (
    <div className='pb-mono text-lg'>
      <p ref={ref} onMouseOver={replay} onFocus={replay} />
    </div>
  );
}

function Location() {
  const { ref, replay } = useScramble(SCRAMBLE_CONFIG('Based in: Hyderabad, India'));

  return (
    <div className='text-text/60'>
      <p ref={ref} onMouseOver={replay} onFocus={replay} />
    </div>
  );
}
