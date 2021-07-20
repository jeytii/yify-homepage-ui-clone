import React, { Children, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { StoreContext } from '@/App';
import { desktopFooterLinks, mobileFooterLinks } from '~/data';
import styles from './index.module.css';

export default function Footer() {
    const store = useContext(StoreContext);
    const narrowScreen = useMediaQuery({ maxWidth: 680 });
    const isMobile = useMediaQuery({ maxWidth: 540 });

    function showFormModal() {
        store?.dispatch({ value: 'login' });
    }

    if (narrowScreen) {
        return (
            <footer className={styles.root}>
                <div className={styles.main}>
                    {mobileFooterLinks.map(item => (
                        <div key={item.key} className={styles.link_container}>
                            <a className={styles.link} href='/'>
                                <item.icon
                                    width={isMobile ? '1.2rem' : '3vw'}
                                />
                                <br />
                                <span className={styles.link_label}>
                                    {item.name}
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </footer>
        );
    }

    return (
        <footer className={styles.root}>
            <div className={styles.main}>
                <span className={styles.copyright_text}>YIFY @ 2011-2021</span>
                <ul className={styles.list}>
                    {Children.map(desktopFooterLinks, item => (
                        <li className={styles.list_item}>
                            <a href='/' className={styles.list_item_link}>
                                {item}
                            </a>
                        </li>
                    ))}

                    <li className={styles.list_item}>
                        <button
                            type='button'
                            className={styles.list_item_button}
                            onClick={showFormModal}
                        >
                            Login
                        </button>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
