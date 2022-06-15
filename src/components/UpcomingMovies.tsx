import React from 'react';
import SectionHeader from '@/components/_utilities/SectionHeader';
import Card from '@/components/_utilities/Card';
import { upcomingMovies } from '@/data/movies';

export default function UpcomingMovies() {
  return (
    <section className='bg-black-pale py-12 xxl:py-[3vw]'>
      <SectionHeader
        title='Upcoming YIFY movies'
        linkText='Request a movie'
      />

      <div className='max-w-[90%] grid grid-cols-[1fr] gap-8 justify-between m-auto sm:grid-cols-[45%_45%] xl:grid-cols-[21%_21%_21%_21%]'>
        {upcomingMovies.map(({ key, ...movie }) => (
          <Card key={key} type='upcoming' {...movie} />
        ))}
      </div>
    </section>
  );
}
