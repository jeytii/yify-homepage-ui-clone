import React, { useContext, useState } from 'react';
import Search from '@/components/_utilities/icons/Search';
import Browse from '@/components/_utilities/icons/Browse';
import User from '@/components/_utilities/icons/User';
import Logo from '@/components/_utilities/icons/Logo';
import Filter from './Filter';
import { StoreContext } from '@/components/App';

export default function MobileHeader() {
  const [showFilter, toggleFilter] = useState<boolean>(false);
  const store = useContext(StoreContext);

  const toggleDropdown = () => {
    toggleFilter((current) => !current);
  };

  const hideDropdown = () => {
    toggleFilter(false);
  };

  const showModalForm = () => {
    store?.dispatch({ value: 'login' });
  };

  return (
    <header className='sticky top-0 right-0 left-0 bg-black border-b border-bg-white-transparent z-10'>
      <div className='max-w-[90%] flex items-center m-auto'>
        <a href='/'>
          <Logo width='30' height='30' />
        </a>

        <nav className='flex items-center ml-auto'>
          <button
            type='button'
            className='bg-transparent border-0 p-4 cursor-pointer hover:bg-[#393939]'
            title='Search'
            onClick={toggleDropdown}
          >
            <Search />
          </button>

          <a href='/' className='p-4 hover:bg-[#393939]' title='Browse'>
            <Browse />
          </a>

          <button
            type='button'
            className='bg-transparent border-0 p-4 cursor-pointer hover:bg-[#393939]'
            title='Sign in'
            onClick={showModalForm}
          >
            <User />
          </button>
        </nav>
      </div>

      {showFilter && <Filter event={hideDropdown} />}
    </header>
  );
}
