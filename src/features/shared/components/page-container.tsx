export function PageContainer({ children }: React.PropsWithChildren) {
  return (
    <div className='max-w-158 mx-auto'>
      <div className='pt-20 pb-30'>
        <div className='animate-fade-in-up [animation-delay:100ms] opacity-0 blur-md'>{children}</div>
      </div>
    </div>
  );
}
