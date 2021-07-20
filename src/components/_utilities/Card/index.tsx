import React from 'react';
import Star from '@/_utilities/icons/Star';
import { useMediaQuery } from 'react-responsive';
import styles from './index.module.css';

interface Props {
    type: 'released' | 'upcoming';
    imageUrl: string;
    rating?: number;
    genre?: [string, string];
    title: string;
    year: number;
    quality?: '720p' | '1080p' | '4K';
}

type QualityClassName = 'quality__720' | 'quality__1080' | 'quality__4k' | null;

export default function Card(props: Props) {
    const isDesktop = useMediaQuery({ minWidth: 885 });
    let color: QualityClassName = null;

    if (props.quality === '720p') {
        color = 'quality__720';
    } else if (props.quality === '1080p') {
        color = 'quality__1080';
    } else {
        color = 'quality__4k';
    }

    return (
        <div>
            <div className={styles.main}>
                {props.type === 'released' && !!props.quality && (
                    <span className={`${styles.quality} ${styles[color]}`}>
                        {props.quality}
                    </span>
                )}

                <img
                    className={styles.image}
                    src={props.imageUrl}
                    alt='Movie poster'
                />

                {isDesktop && props.type === 'released' && (
                    <div className={styles.overlay}>
                        <Star fill='#75C74E' />

                        <h1 className={styles.overlay_text}>
                            {props.rating} / 10
                        </h1>

                        {!!props.genre && (
                            <h1 className={styles.overlay_text}>
                                {props.genre[0]}
                                <br />
                                {props.genre[1]}
                            </h1>
                        )}

                        <div className={styles.details_button_container}>
                            <button
                                type='button'
                                className={`${styles.button} ${styles.details_button}`}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                )}

                {isDesktop && props.type === 'upcoming' && (
                    <div className={styles.overlay}>
                        <button
                            type='button'
                            className={`${styles.button} ${styles.view_imdb_button}`}
                        >
                            View IMDb
                        </button>
                    </div>
                )}
            </div>

            <a href='/' className={styles.title}>
                {props.title}
            </a>

            <span className={styles.year}>{props.year}</span>
        </div>
    );
}
