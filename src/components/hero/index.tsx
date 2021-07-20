import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Card from '@/_utilities/Card';
import Star from '@/_utilities/icons/Star';
import { popularMovies } from '~/data';
import styles from './index.module.css';

export default function Hero() {
    const isDesktop = useMediaQuery({ minWidth: 769 });

    return (
        <section className={styles.root}>
            {isDesktop && (
                <div className={styles.headline}>
                    <h1 className={styles.headline_title}>
                        Download YIFY movies: HD smallest size
                    </h1>
                    <p className={styles.headline_subtitle}>
                        Welcome to the official <b>YIFY</b> website. Here you
                        will be able to browse and download YIFY movies in
                        excellent 720p, 1080p and 3D quality, all at the
                        smallest file size. Only here: YIFY Movie Torrents.
                    </p>
                </div>
            )}

            <div>
                <h2 className={styles.popular_title}>
                    <Star fill='#75C74E' />
                    <span className={styles.popular_title_text}>
                        Popular Downloads
                    </span>
                </h2>

                <div className={styles.cards}>
                    {popularMovies.map(({ key, ...movie }) => (
                        <Card key={key} type='released' {...movie} />
                    ))}
                </div>
            </div>
        </section>
    );
}
