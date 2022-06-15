import React, { Children, useContext } from 'react';
import { StoreContext } from '@/components/App';
import { desktopFooterLinks, mobileFooterLinks } from '@/data/links';

export default function Footer() {
  const store = useContext(StoreContext);

  function showFormModal() {
    store?.dispatch({ value: 'login' });
  }

  return (
    <footer className='bg-black text-center'>
      <div className='hidden p-6 lg:block xxl:p-[1.5vw]'>
        <span className='inline-block text-gray xxl:text-[1.1vw]'>YIFY @ 2011-2021</span>
        <ul className='mt-4 xxl:mt-[1vw]'>
          {Children.map(desktopFooterLinks, (item) => (
            <li className='inline-block mx-4'>
              <a href='/' className='font-bold xxl:text-[1.1vw]'>
                {item}
              </a>
            </li>
          ))}

          <li className='inline-block mx-4'>
            <button
              type='button'
              className='bg-tranparent text-gray font-bold border-0 cursor-pointer hover:text-gray-lightest xxl:text-[1.1vw]'
              onClick={showFormModal}
            >
              Login
            </button>
          </li>
        </ul>
      </div>

      <div className='flex items-center flex-wrap p-6 lg:hidden'>
        {mobileFooterLinks.map((item) => (
          <div key={item.key} className='w-[33.3%] my-6 lg:w-auto lg:my-auto'>
            <a className='group block' href='/'>
              <item.icon className='w-[1.2rem] inline-block fill-gray group-hover:fill-gray-lightest md:w-[3vw]' />
              <br />
              <span className='text-[0.8rem] md:text-[2.2vw] lg:text-[15px]'>
                {item.name}
              </span>
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}
