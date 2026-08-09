interface PageIntroProps {
  content: string;
}

export function PageIntro({ content }: PageIntroProps) {
  return (
    <div className='text-base font-semibold'>
      <p>{content}</p>
    </div>
  );
}
