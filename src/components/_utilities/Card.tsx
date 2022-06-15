import React from 'react';
import clsx from 'clsx';
import Star from '@/components/_utilities/icons/Star';

interface Props {
  type: 'released' | 'upcoming';
  imageUrl: string;
  rating?: number;
  genre?: [string, string];
  title: string;
  year: number;
  quality?: '720p' | '1080p' | '4K';
}

const ribbonColor = (quality: '720p' | '1080p' | '4K') => ({
  'bg-ribbon-720': quality === '720p',
  'bg-ribbon-1080': quality === '1080p',
  'bg-ribbon-4k': quality === '4K',
});

function Card({
  type, imageUrl, rating, genre, title, year, quality,
}: Props) {
  return (
    <div className='font-bold'>
      <div className='group relative border-[6px] border-white rounded-[0.3rem] overflow-hidden cursor-pointer hover:border-accent-primary'>
        {type === 'released' && !!quality && (
          <span className={clsx([
            'absolute top-[3vw] -left-[6vw] w-[29vw] text-[4vw] font-bold text-white text-center py-[0.2rem] z-[1] rotate-[-40deg]',
            'sm:top-[1.7vw] sm:-left-[4.5vw] sm:w-[18vw] sm:text-[2.2vw]',
            'xl:top-[1vw] xl:-left-[3.4vw] xl:w-[12.5vw] xl:text-[1.5vw]',
            ribbonColor(quality),
          ])}
          >
            {quality}
          </span>
        )}

        <img className='w-full' src={imageUrl} alt='Movie poster' />

        {type === 'released' && (
          <div className='hidden absolute w-full h-full top-0 left-0 bg-black-transparent-800 items-center justify-center flex-col opacity-0 transition-[opacity] duration-[250ms] ease-in-out group-hover:opacity-100 xxl:flex'>
            <Star className='w-[1.5vw] h-[1.5vw]' fill='#75C74E' />

            <h1 className='text-[2vw] text-white text-center py-[1.2vw] px-0'>
              {rating}
              {' '}
              / 10
            </h1>

            {!!genre && (
              <h1 className='text-[2vw] text-white text-center py-[1.2vw] px-0'>
                {genre[0]}
                <br />
                {genre[1]}
              </h1>
            )}

            <div className='text-center py-[1.2vw] px-0'>
              <button
                type='button'
                className='bg-accent-primary text-white font-bold border-0 py-[1vw] px-[1.3vw] rounded-[0.3rem] cursor-pointer translate-y-[30%] transition-[transform] duration-[250ms] ease-in-out group-hover:translate-y-0 hover:bg-accent-primary-lighter xxl:text-[1.1vw] xxl:py-[0.9vw] xxl:px-[1.7vw]'
              >
                View Details
              </button>
            </div>
          </div>
        )}

        {type === 'upcoming' && (
          <div className='hidden absolute w-full h-full top-0 left-0 bg-black-transparent-800 items-center justify-center flex-col opacity-0 transition-[opacity] duration-[250ms] ease-in-out group-hover:opacity-100 xxl:flex'>
            <button
              type='button'
              className='bg-accent-secondary text-white font-bold border-0 py-[0.8rem] px-[1.6rem] rounded-[0.3rem] cursor-pointer translate-y-[30%] transition-[transform] duration-[250ms] ease-in-out group-hover:translate-y-0 hover:bg-accent-secondary-light xxl:text-[1.1vw] xxl:py-[0.9vw] xxl:px-[1.7vw]'
            >
              View IMDb
            </button>
          </div>
        )}
      </div>

      <a href='/' className='block font-bold mt-[0.5rem] overflow-hidden whitespace-nowrap text-ellipsis xxl:text-[1.1vw] xxl:mt-[0.5vw]'>
        {title}
      </a>

      <span className='text-gray xxl:text-[1.1vw]'>{year}</span>
    </div>
  );
}

Card.defaultProps = {
  rating: null,
  genre: null,
  quality: null,
};

export default Card;
