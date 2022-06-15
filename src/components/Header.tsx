import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { StoreContext } from '@/components/App';
import Logo from '@/components/_utilities/icons/Logo';
import Search from '@/components/_utilities/icons/Search';
import MobileHeader from './mobile-header';

export default function Header() {
  const store = useContext(StoreContext);
  const narrowScreen = useMediaQuery({ maxWidth: 977 });

  function showModalForm(type: 'login' | 'register') {
    store?.dispatch({ value: type });
  }

  if (narrowScreen) {
    return <MobileHeader />;
  }

  return (
    <header className='sticky top-0 left-0 right-0 bg-black border-b border-white-transparent z-10'>
      <div className='max-w-[90%] flex items-center justify-between m-auto'>
        <a href='/'>
          <Logo className='w-[40px] h-[40px] xxl:w-[3vw] xxl:h-[3vw]' />
        </a>

        <div className='flex items-center'>
          <div className='flex border-2 border-black-lighter rounded-[5rem] mr-4 xxl:mr-[1vw]'>
            <input
              className='flex-1 bg-transparent text-gray font-bold border-0 py-2 px-4 placeholder:text-gray-lighter xxl:text-[1.1vw] xxl:py-[0.5vw] xxl:px-[1vw]'
              type='text'
              name='movie-title'
              id='search'
              placeholder='Quick search'
            />

            <button type='button' className='flex items-center justify-center bg-transparent border-0 py-2 pr-4 cursor-pointer xxl:py-[0.5vw] xxl:pr-[1vw]'>
              <Search className='w-4 h-4 xxl:w-[1vw] xxl:h-[1vw]' fill='#B2B2B2' />
            </button>
          </div>

          <nav className='flex'>
            <a href='/' className='text-gray font-bold py-6 px-4 hover:text-gray-lightest xxl:text-[1.1vw] xxl:py-[1.5vw] xxl:px-[1vw]'>
              Home
            </a>
            <a href='/' className='text-gray font-bold py-6 px-4 hover:text-gray-lightest xxl:text-[1.1vw] xxl:py-[1.5vw] xxl:px-[1vw]'>
              Browse Movies
            </a>
            <button
              type='button'
              className='bg-transparent border-0 text-white font-bold py-6 px-4 cursor-pointer xxl:text-[1.1vw] xxl:py-[1.5vw] xxl:px-[1vw]'
              onClick={showModalForm.bind(null, 'login')}
            >
              Login
            </button>
            <button
              type='button'
              className='bg-transparent border-0 text-white font-bold py-6 px-4 cursor-pointer xxl:text-[1.1vw] xxl:py-[1.5vw] xxl:px-[1vw]'
              onClick={showModalForm.bind(null, 'register')}
            >
              Register
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
