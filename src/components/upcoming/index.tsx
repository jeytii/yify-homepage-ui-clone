import React from 'react';
import SectionHeader from '@/_utilities/SectionHeader';
import Card from '@/_utilities/Card';
import { upcomingMovies } from '~/data';
import styles from './index.module.css';

export default function UpcomingMovies() {
    return (
        <section className={styles.root}>
            <SectionHeader
                title='Upcoming YIFY movies'
                linkText='Request a movie'
            />

            <div className={styles.main}>
                {upcomingMovies.map(({ key, ...movie }) => (
                    <Card key={key} type='upcoming' {...movie} />
                ))}
            </div>
        </section>
    );
}
