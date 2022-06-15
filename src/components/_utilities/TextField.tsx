import React, { ReactNode, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
}

export default function TextField({ icon, ...props }: Props) {
  return (
    <div className='flex items-center border border-gray-lightest rounded-[0.2rem] px-4 mt-6 xxl:px-[1vw] xxl:mt-[1.5vw]'>
      <span className='mr-4 xxl:mr-[1vw]'>{icon}</span>
      <input
        className='flex-1 text-black-pale border-0 text-[0.95rem] py-4 placeholder:text-gray-lightest xxl:text-[0.95vw] xxl:py-[1vw]'
        {...props}
      />
    </div>
  );
}
