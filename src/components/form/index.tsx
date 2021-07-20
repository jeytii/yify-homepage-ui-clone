import React, {
    ChangeEvent,
    useCallback,
    useContext,
    useEffect,
    useRef,
} from 'react';
import User from '@/_utilities/icons/User';
import Lock from '@/_utilities/icons/Lock';
import Email from '@/_utilities/icons/Email';
import TextField from '@/_utilities/TextField';
import { StoreContext } from '@/App';
import styles from './index.module.css';

export default function Form() {
    const store = useContext(StoreContext);
    const root = useRef<HTMLElement>(null);

    const changeFormType = useCallback(
        (type: 'login' | 'register', e: ChangeEvent<HTMLInputElement>) => {
            if (store?.state.formType === type) {
                e.preventDefault();
            } else {
                store?.dispatch({ value: type });
            }
        },
        [store?.state.formType],
    );

    function outsideClick(e: MouseEvent) {
        if (e.target === root.current) {
            store?.dispatch({ value: null });
        }
    }

    function closeForm(e: KeyboardEvent) {
        if (e.key === 'Escape') {
            store?.dispatch({ value: null });
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', closeForm);
        root.current?.addEventListener('click', outsideClick);

        return () => {
            document.removeEventListener('keydown', closeForm);
            root.current?.removeEventListener('click', outsideClick);
        };
    }, []);

    return (
        <section ref={root} className={styles.root}>
            <div className={styles.wrap}>
                <div className={styles.tabs}>
                    <label
                        className={`${styles.tab} ${styles.login_tab} ${
                            store?.state.formType === 'login'
                                ? styles.active_tab
                                : ''
                        }`}
                        htmlFor='login-tab'
                    >
                        <input
                            className={styles.tab_radio}
                            type='radio'
                            id='login-tab'
                            name='form-type'
                            value='login'
                            onChange={changeFormType.bind(null, 'login')}
                        />
                        <span>Login</span>
                    </label>
                    <label
                        className={`${styles.tab} ${styles.register_tab} ${
                            store?.state.formType === 'register'
                                ? styles.active_tab
                                : ''
                        }`}
                        htmlFor='register-tab'
                    >
                        <input
                            className={styles.tab_radio}
                            type='radio'
                            id='register-tab'
                            name='form-type'
                            value='register'
                            onChange={changeFormType.bind(null, 'register')}
                        />
                        <span>Register</span>
                    </label>
                </div>

                <div className={styles.form_container}>
                    {store?.state.formType === 'login' ? (
                        <form className={styles.form}>
                            <TextField
                                type='text'
                                id='login-user'
                                name='login-user'
                                placeholder='Username or email'
                                icon={<User fill='#919191' />}
                            />

                            <TextField
                                type='password'
                                id='login-password'
                                name='login-password'
                                placeholder='Password'
                                icon={<Lock fill='#919191' />}
                            />

                            <input
                                className={styles.submit_button}
                                type='submit'
                                value='Login'
                            />
                        </form>
                    ) : (
                        <form className={styles.form}>
                            <TextField
                                type='text'
                                id='register-user'
                                name='register-user'
                                placeholder='Username'
                                icon={<User fill='#919191' />}
                            />

                            <TextField
                                type='text'
                                id='register-email'
                                name='register-email'
                                placeholder='Email'
                                icon={<Email fill='#919191' />}
                            />

                            <TextField
                                type='password'
                                id='register-password'
                                name='register-password'
                                placeholder='Password'
                                icon={<Lock fill='#919191' />}
                            />

                            <TextField
                                type='password'
                                id='confirmed-pw'
                                placeholder='Confirm password'
                                icon={<Lock fill='#919191' />}
                            />

                            <input
                                className={styles.submit_button}
                                type='submit'
                                value='Register'
                            />
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
