import { WORK_EXPERIENCE } from '@/features/shared/data/cv';

export function BaseWork() {
  return (
    <div className='space-y-8 py-8'>
      <div className='text-sm font-semibold'>
        <p>Work</p>
      </div>
      <div className='text-neutral-600 font-medium group/wrapper'>
        {WORK_EXPERIENCE.map((work, i) => (
          <div
            key={i}
            className='group/parent hover:px-2 hover:opacity-100 hover:text-text transition-[padding,opacity] pb-2.5 group-hover/wrapper:opacity-70 flex items-center justify-between gap-4 duration-300'
          >
            <h2 className='text-sm pb-1'>{work.company}</h2>
            <div className='text-xs font-medium text-neutral-400 group-hover/parent:text-neutral-600 transition-colors duration-300'>{work.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
