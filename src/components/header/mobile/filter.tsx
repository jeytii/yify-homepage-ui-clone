import React, { useEffect, useRef } from 'react';
import Select from '@/_utilities/Select';
import styles from './filter.module.css';

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
        <div ref={rootRef} className={styles.root}>
            <div className={styles.search_container}>
                <form action='' className={styles.searchbar}>
                    <input
                        className={styles.search_input}
                        type='text'
                        name='search'
                        id='search--mobile'
                        placeholder='Search for movies...'
                    />
                    <input
                        className={styles.search_submit}
                        type='submit'
                        value='Search'
                    />
                </form>
            </div>

            <div className={styles.options}>
                <Select
                    titleClass={styles.option_label}
                    titleLabel='Quality:'
                    className={styles.option_select}
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
                    titleClass={styles.option_label}
                    titleLabel='Rating:'
                    className={styles.option_select}
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
                    titleClass={styles.option_label}
                    titleLabel='Genre:'
                    className={styles.option_select}
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
                    titleClass={styles.option_label}
                    titleLabel='Language:'
                    className={styles.option_select}
                    id='language'
                    name='language'
                    defaultValue='English'
                >
                    <option value=''>--</option>
                    <option value='English'>English</option>
                </Select>

                <Select
                    titleClass={styles.option_label}
                    titleLabel='Year:'
                    className={styles.option_select}
                    id='year'
                    name='year'
                >
                    <option value=''>--</option>
                    <option value='2021'>2021</option>
                </Select>

                <Select
                    titleClass={styles.option_label}
                    titleLabel='Order By:'
                    className={styles.option_select}
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
