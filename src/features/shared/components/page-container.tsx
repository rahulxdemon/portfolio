export function PageContainer({ children }: React.PropsWithChildren) {
  return (
    <div className='max-w-158 mx-6 sm:mx-27.5'>
      <div className='py-20'>
        <div className='animate-fade-in-up [animation-delay:200ms] opacity-0'>{children}</div>
      </div>
    </div>
  );
}
