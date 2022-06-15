import React from 'react';
import SectionHeader from '@/components/_utilities/SectionHeader';
import Card from '@/components/_utilities/Card';
import { latestMovies } from '@/data/movies';

export default function LatestMovies() {
  return (
    <section className='bg-[#282828] py-12 xxl:py-[3vw]'>
      <SectionHeader
        title='Latest YIFY Movie Torrents'
        linkText='Browse all'
      />

      <div className='max-w-[90%] grid grid-cols-[1fr] gap-8 justify-between m-auto sm:grid-cols-[45%_45%] xl:grid-cols-[21%_21%_21%_21%]'>
        {latestMovies.map(({ key, ...movie }) => (
          <Card key={key} type='released' {...movie} />
        ))}
      </div>
    </section>
  );
}
