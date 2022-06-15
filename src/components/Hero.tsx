import React from 'react';
import Card from '@/components/_utilities/Card';
import Star from '@/components/_utilities/icons/Star';
import { popularMovies } from '@/data/movies';

export default function Hero() {
  return (
    <section className='bg-[url("https://res.cloudinary.com/dt9ntq5vr/image/upload/w_1146,h_573,e_blur:615/v1592876947/yts-clone/posters/Screen-Shot-2019-12-19-at-12.24.00-PM_xqbknp.jpg")] bg-no-repeat bg-cover relative z-[1] after:content-[""] after:absolute after:inset-0 after:bg-gradient-to-b from-[rgba(29,29,29,0.65)] to-[rgba(29,29,29,1)] after:-z-[1]'>
      <div className='hidden text-center pt-8 pb-4 xl:block xxl:pt-[2vw] xxl:pb-[1vw]'>
        <h1 className='text-[3.4vw] text-white font-bold lg:text-[3vw]' style={{ textShadow: '1px 2px 5px #111' }}>
          Download YIFY movies: HD smallest size
        </h1>
        <p className='w-[58%] text-[1.7vw] text-white mt-6 mx-auto xxl:text-[1.25vw] xxl:mt-[1.5vw]'>
          Welcome to the official
          {' '}
          <b className='text-[1.7vw] xxl:text-[1.25vw]'>YIFY</b>
          {' '}
          website. Here you
          will be able to browse and download YIFY movies in
          excellent 720p, 1080p and 3D quality, all at the
          smallest file size. Only here: YIFY Movie Torrents.
        </p>
      </div>

      <div>
        <h2 className='max-w-[90%] flex items-center justify-center border-b border-white-transparent py-4 m-auto xxl:py-[1vw]'>
          <Star className='w-5 h-5 xl:w-[1.5vw] xl:h-[1.5vw]' fill='#75C74E' />
          <span className='text-[1.5rem] text-white font-bold ml-4 xl:text-[1.6vw] xxl:ml-[1vw]'>
            Popular Downloads
          </span>
        </h2>

        <div className='max-w-[90%] grid grid-cols-1 gap-8 justify-between py-8 mx-auto sm:grid-cols-[repeat(2,45%)] xl:grid-cols-[repeat(4,21%)] xxl:py-[2vw]'>
          {popularMovies.map(({ key, ...movie }) => (
            <Card key={key} type='released' {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
