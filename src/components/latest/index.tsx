import React from 'react';
import SectionHeader from '@/_utilities/SectionHeader';
import Card from '@/_utilities/Card';
import { latestMovies } from '~/data';
import styles from './index.module.css';

export default function LatestMovies() {
    return (
        <section className={styles.root}>
            <SectionHeader
                title='Latest YIFY Movie Torrents'
                linkText='Browse all'
            />

            <div className={styles.main}>
                {latestMovies.map(({ key, ...movie }) => (
                    <Card key={key} type='released' {...movie} />
                ))}
            </div>
        </section>
    );
}
