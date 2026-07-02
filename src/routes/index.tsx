import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='text-sm'>
      <div className='bg-button-foreground mx-[2ch] h-auto'>
        <div className='inline-flex items-center justify-center'>
          <span className='px-[1ch] bg-button-background span-link'>[1]CV</span>
        </div>
      </div>
      <div className='px-[2ch]'>
        <div className='py-mono'>
          <p>Rahul Palamarthi</p>
        </div>
        <div className='py-mono'>
          <p>Rahul Palamarthi</p>
        </div>
      </div>
    </div>
  );
}
