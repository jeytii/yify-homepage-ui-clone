import React, { useContext, useState } from 'react';
import Search from '@/_utilities/icons/Search';
import Browse from '@/_utilities/icons/Browse';
import User from '@/_utilities/icons/User';
import Logo from '@/_utilities/icons/Logo';
import Filter from './filter';
import { StoreContext } from '~/components/App';
import styles from './index.module.css';

export default function MobileHeader() {
    const [showFilter, toggleFilter] = useState<boolean>(false);
    const store = useContext(StoreContext);

    function toggleDropdown() {
        toggleFilter(current => !current);
    }

    function hideDropdown() {
        toggleFilter(false);
    }

    function showModalForm() {
        store?.dispatch({ value: 'login' });
    }

    return (
        <header className={styles.root}>
            <div className={styles.wrap}>
                <a href='/'>
                    <Logo width='30' height='30' />
                </a>

                <nav className={styles.nav}>
                    <button
                        type='button'
                        className={styles.button}
                        title='Search'
                        onClick={toggleDropdown}
                    >
                        <Search />
                    </button>

                    <a href='/' className={styles.link} title='Browse'>
                        <Browse />
                    </a>

                    <button
                        type='button'
                        className={styles.button}
                        title='Sign in'
                        onClick={showModalForm}
                    >
                        <User />
                    </button>
                </nav>
            </div>

            {showFilter && <Filter event={hideDropdown} />}
        </header>
    );
}
