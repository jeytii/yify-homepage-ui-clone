import React, { useEffect, useRef } from 'react';
import Select from '@/components/_utilities/Select';

interface Props {
    event(): void;
}

export default function Filter({ event }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  function outsideClick(e: MouseEvent) {
    if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
      event();
    }
  }

  useEffect(() => {
    window.addEventListener('click', outsideClick);

    return () => {
      window.removeEventListener('click', outsideClick);
    };
  }, []);

  return (
    <div ref={rootRef} className='absolute top-full left-0 w-full bg-[#111] py-8 border-y border-white-transparent'>
      <div className='max-w-[90%] m-auto'>
        <form action='' className='flex'>
          <input
            className='flex-1 bg-black-pale text-pale p-[0.45rem] border-0 rounded-l-[0.2rem]'
            type='text'
            name='search'
            id='search--mobile'
            placeholder='Search for movies...'
          />
          <input
            className='bg-accent-primary text-pale border-0 rounded-r-[0.2rem] p-[0.45rem]'
            type='submit'
            value='Search'
          />
        </form>
      </div>

      <div className='max-w-[90%] grid grid-cols-[1fr] gap-y-4 gap-x-8 mt-6 mx-auto xs:grid-cols-[1fr_1fr]'>
        <Select
          titleClass='text-gray font-bold text-center'
          titleLabel='Quality:'
          className='w-full bg-[#2e2e2e] text-pale border-0 p-[0.45rem] mt-[0.2rem]'
          id='quality'
          name='quality'
          defaultValue='All'
        >
          <option value='All'>All</option>
          <option value='720p'>720p</option>
          <option value='1080p'>1080p</option>
          <option value='3D'>3D</option>
        </Select>

        <Select
          titleClass='text-gray font-bold text-center'
          titleLabel='Rating:'
          className='w-full bg-[#2e2e2e] text-pale border-0 p-[0.45rem] mt-[0.2rem]'
          id='rating'
          name='rating'
        >
          <option value=''>--</option>
          <option value='9+'>9+</option>
          <option value='8+'>8+</option>
          <option value='7+'>7+</option>
          <option value='6+'>6+</option>
          <option value='5+'>5+</option>
          <option value='4+'>4+</option>
          <option value='3+'>3+</option>
          <option value='2+'>2+</option>
          <option value='1+'>1+</option>
        </Select>

        <Select
          titleClass='text-gray font-bold text-center'
          titleLabel='Genre:'
          className='w-full bg-[#2e2e2e] text-pale border-0 p-[0.45rem] mt-[0.2rem]'
          id='genre'
          name='genre'
        >
          <option value=''>--</option>
          <option value='Action'>Action</option>
          <option value='Adventure'>Adventure</option>
          <option value='Animated'>Animated</option>
          <option value='Biography'>Biography</option>
          <option value='Comedy'>Comedy</option>
          <option value='Crime'>Crime</option>
          <option value='Documentary'>Documentary</option>
        </Select>

        <Select
          titleClass='text-gray font-bold text-center'
          titleLabel='Language:'
          className='w-full bg-[#2e2e2e] text-pale border-0 p-[0.45rem] mt-[0.2rem]'
          id='language'
          name='language'
          defaultValue='English'
        >
          <option value=''>--</option>
          <option value='English'>English</option>
        </Select>

        <Select
          titleClass='text-gray font-bold text-center'
          titleLabel='Year:'
          className='w-full bg-[#2e2e2e] text-pale border-0 p-[0.45rem] mt-[0.2rem]'
          id='year'
          name='year'
        >
          <option value=''>--</option>
          <option value='2021'>2021</option>
        </Select>

        <Select
          titleClass='text-gray font-bold text-center'
          titleLabel='Order By:'
          className='w-full bg-[#2e2e2e] text-pale border-0 p-[0.45rem] mt-[0.2rem]'
          id='order-by'
          name='order-by'
          defaultValue='Latest'
        >
          <option value='Latest'>Latest</option>
          <option value='Oldest'>Oldest</option>
          <option value='Seeds'>Seeds</option>
          <option value='Peers'>Peers</option>
          <option value='Year'>Year</option>
          <option value='Rating'>Rating</option>
          <option value='Likes'>Likes</option>
          <option value='Alphabetical'>Alphabetical</option>
          <option value='Downloads'>Downloads</option>
        </Select>
      </div>
    </div>
  );
}
