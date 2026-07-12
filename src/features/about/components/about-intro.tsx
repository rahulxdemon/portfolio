import { useScramble } from 'use-scramble';
import { SCRAMBLE_CONFIG } from '@/features/shared/data/scramble-config';

export function AboutIntro() {
  return (
    <div>
      <Name />
      {/*<Location />*/}
    </div>
  );
}

function Name() {
  return (
    <div className='text-lg font-semibold'>
      <p>Rahul Palamarthi</p>
    </div>
  );
}

export function Location() {
  const { ref, replay } = useScramble(SCRAMBLE_CONFIG('Based in: Hyderabad, India'));

  return (
    <div className='text-text/60'>
      <p ref={ref} className='inline' onMouseOver={replay} onFocus={replay} />
    </div>
  );
}
