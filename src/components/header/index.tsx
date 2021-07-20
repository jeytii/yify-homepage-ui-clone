import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { StoreContext } from '@/App';
import Logo from '@/_utilities/icons/Logo';
import Search from '@/_utilities/icons/Search';
import MobileHeader from './mobile';
import styles from './index.module.css';

export default function Header() {
    const store = useContext(StoreContext);
    const narrowScreen = useMediaQuery({ maxWidth: 977 });

    function showModalForm(type: 'login' | 'register') {
        store?.dispatch({ value: type });
    }

    if (narrowScreen) {
        return <MobileHeader />;
    }

    return (
        <header className={styles.root}>
            <div className={styles.wrap}>
                <a href='/'>
                    <Logo />
                </a>

                <div className={styles.right}>
                    <div className={styles.searchbar}>
                        <input
                            className={styles.search_input}
                            type='text'
                            name='movie-title'
                            id='search'
                            placeholder='Quick search'
                        />

                        <button type='button' className={styles.search_submit}>
                            <Search width='1rem' height='1rem' />
                        </button>
                    </div>

                    <nav className={styles.links}>
                        <a href='/' className={styles.link}>
                            Home
                        </a>
                        <a href='/' className={styles.link}>
                            Browse Movies
                        </a>
                        <button
                            type='button'
                            className={styles.text_button}
                            onClick={showModalForm.bind(null, 'login')}
                        >
                            Login
                        </button>
                        <button
                            type='button'
                            className={styles.text_button}
                            onClick={showModalForm.bind(null, 'register')}
                        >
                            Register
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
