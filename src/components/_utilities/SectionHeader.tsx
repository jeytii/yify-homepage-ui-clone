import React from 'react';

interface Props {
  title: string;
  linkText: string;
}

export default function SectionHeader({ title, linkText }: Props) {
  return (
    <div className='max-w-[90%] pb-6 m-auto sm:flex sm:items-center sm:justify-between xxl:pb-[1.5vw]'>
      <h4 className='text-white text-[1.1rem] font-bold xxl:text-[1.2vw]'>{title}</h4>
      <a className='inline-block text-[0.9rem] mt-2 sm:block sm:text-[15px] sm:font-bold sm:mt-auto xxl:text-[1.1vw]' href='/'>
        {linkText}
      </a>
    </div>
  );
}
