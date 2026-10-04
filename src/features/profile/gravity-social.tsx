import { motion } from 'motion/react';
import Gravity, { MatterBody } from '@/features/shared/components/gravity';
import { EMAIL_SOCIAL, GITHUB_SOCIAL, LINKEDIN_SOCIAL, TWITTER_SOCIAL } from '@/features/social/data';

const socialLinks = [
  { name: 'X (Twitter)', href: TWITTER_SOCIAL.href, x: '30%', y: '30%' },
  { name: 'Email', href: EMAIL_SOCIAL.href, x: '40%', y: '20%', angle: 10 },
  { name: 'GitHub', href: GITHUB_SOCIAL.href, x: '75%', y: '10%', angle: -4 },
  { name: 'LinkedIn', href: LINKEDIN_SOCIAL.href, x: '30%', y: '10%' },
];

const stars = ['S', 'a', 'y', 'H', 'i'];

export function GravitySocial() {
  return (
    <div className='pb-20'>
      <div className='w-full h-80 flex flex-col relative bg-white'>
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
              <a href={link.href} target='_blank' rel='noopener' className='text-inherit no-underline'>
                <motion.div
                  className='text-md md:text-xl bg-white text-pink-600 border border-pink-600 rounded-full hover:cursor-pointer hover:bg-pink-600 hover:text-white md:px-8 md:py-4 py-3 px-6'
                  whileTap={{ scale: 0.9 }}
                >
                  {link.name}
                </motion.div>
              </a>
            </MatterBody>
          ))}

          {stars.map((star, i) => (
            <MatterBody
              key={i}
              matterBodyOptions={{ friction: 0.9, restitution: 0.2 }}
              x={`${Math.random() * 60 + 20}%`}
              y={`${Math.random() * 20 + 40}%`}
              angle={Math.random() * 360}
            >
              <div
                className={
                  'aspect-square w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-pink-600 font-medium text-white rounded-xl text-center flex items-center justify-center'
                }
              >
                {star}
              </div>
            </MatterBody>
          ))}
        </Gravity>
      </div>
    </div>
  );
}
