import Gravity, { MatterBody } from '@/features/social/gravity';

const socialLinks = [
  { name: 'LinkedIn', x: '30%', y: '10%' },
  { name: 'X (Twitter)', x: '30%', y: '30%' },
  { name: 'GitHub', x: '75%', y: '10%', angle: -4 },
  { name: 'Email', x: '80%', y: '20%', angle: 5 },
];

const stars = ['✱', '✽', '✦', '✸', '✹', '✺'];

export function Preview() {
  return (
    <div className='w-full h-100 flex flex-col relative bg-white'>
      <Gravity gravity={{ x: 0, y: 1 }} className='w-full h-full'>
        {socialLinks.map((link) => (
          <MatterBody
            key={link.name}
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x={link.x}
            y={link.y}
            angle={link.angle || 0}
            isDraggable={false}
          >
            <div className='text-xl sm:text-2xl md:text-3xl bg-white text-[#0015ff] border border-[#0015ff] rounded-full hover:cursor-pointer hover:bg-[#0015ff] hover:text-white md:px-8 md:py-4 py-3 px-6'>
              {link.name}
            </div>
          </MatterBody>
        ))}

        {stars.map((star, i) => (
          <MatterBody
            key={i}
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x={`${Math.random() * 60 + 20}%`}
            y={`${Math.random() * 20 + 40}%`}
            angle={Math.random() * 360}
          >
            <div className={'aspect-square w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#0015ff] text-white rounded-lg text-center'} />
          </MatterBody>
        ))}
      </Gravity>
    </div>
  );
}
