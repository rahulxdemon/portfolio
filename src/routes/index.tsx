import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='px-[2ch]'>
      <div className='py-mono space-y-mono'>
        <div>
          <p>Rahul Palamarthi</p>
          <p></p>
        </div>
        <div className='font-serif'>
          <p>Hey, I'm Rahul</p>
        </div>
      </div>
    </div>
  );
}
