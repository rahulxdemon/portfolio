import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className='px-[2ch]'>
      <div className='py-mono'>
        <p>Rahul Palamarthi</p>
      </div>
    </div>
  );
}
