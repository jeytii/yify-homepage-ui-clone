import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';
import clsx from 'clsx';
import User from '@/components/_utilities/icons/User';
import Lock from '@/components/_utilities/icons/Lock';
import Email from '@/components/_utilities/icons/Email';
import TextField from '@/components/_utilities/TextField';
import { StoreContext } from '@/components/App';

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
    [store],
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
    const rootElement = root.current;

    document.addEventListener('keydown', closeForm);
    rootElement?.addEventListener('click', outsideClick);

    return () => {
      document.removeEventListener('keydown', closeForm);
      rootElement?.removeEventListener('click', outsideClick);
    };
  }, []);

  return (
    <section ref={root} className='fixed w-full flex items-center h-screen inset-0 bg-black-transparent-900 p-4 z-20 xxl:block'>
      <div className='max-w-[550px] w-full mx-auto shadow-[0_8px_5px_-4px_rgba(0,0,0,0.5)] xxl:max-w-[40vw] xxl:w-auto xxl:mt-[5vw]'>
        <div className='flex items-center bg-pale rounded-t-[0.4rem]'>
          <label
            className={clsx([
              'flex-1 text-[1.vw] text-gray text-center rounded-tl-[0.4rem] py-6 cursor-pointer xxl:py-[1.5vw]',
              store?.state.formType === 'login' && 'bg-white text-accent-primary font-bold cursor-default',
            ])}
            htmlFor='login-tab'
          >
            <input
              className='hidden'
              type='radio'
              id='login-tab'
              name='form-type'
              value='login'
              onChange={changeFormType.bind(null, 'login')}
            />
            <span className='xxl:text-[1.1vw]'>Login</span>
          </label>
          <label
            className={clsx([
              'flex-1 text-[1.1vw] text-gray text-center rounded-tr-[0.4rem] py-6 cursor-pointer xxl:py-[1.5vw]',
              store?.state.formType === 'register' && 'bg-white text-accent-primary font-bold cursor-default',
            ])}
            htmlFor='register-tab'
          >
            <input
              className='hidden'
              type='radio'
              id='register-tab'
              name='form-type'
              value='register'
              onChange={changeFormType.bind(null, 'register')}
            />
            <span className='xxl:text-[1.1vw]'>Register</span>
          </label>
        </div>

        <div className='bg-white py-6 rounded-b-[0.4rem] xxl:py-[1.5vw]'>
          {store?.state.formType === 'login' ? (
            <form className='w-[90%] m-auto'>
              <TextField
                type='text'
                id='login-user'
                name='login-user'
                placeholder='Username or email'
                icon={<User className='w-5 h-5 xl:w-[1.5vw] xl:h-[1.5vw]' fill='#919191' />}
              />

              <TextField
                type='password'
                id='login-password'
                name='login-password'
                placeholder='Password'
                icon={<Lock className='w-5 h-5 xl:w-[1.5vw] xl:h-[1.5vw]' fill='#919191' />}
              />

              <input
                className='w-full bg-accent-primary text-white font-bold border-0 rounded-[0.2rem] py-4 mt-6 cursor-pointer hover:bg-accent-primary-lightest xxl:text-[1.1vw] xxl:py-[1vw] xxl:mt-[1.5vw]'
                type='submit'
                value='Login'
              />
            </form>
          ) : (
            <form className='w-[90%] m-auto'>
              <TextField
                type='text'
                id='register-user'
                name='register-user'
                placeholder='Username'
                icon={<User className='w-5 h-5 xl:w-[1.5vw] xl:h-[1.5vw]' fill='#919191' />}
              />

              <TextField
                type='text'
                id='register-email'
                name='register-email'
                placeholder='Email'
                icon={<Email className='w-5 h-5 xl:w-[1.5vw] xl:h-[1.5vw]' fill='#919191' />}
              />

              <TextField
                type='password'
                id='register-password'
                name='register-password'
                placeholder='Password'
                icon={<Lock className='w-5 h-5 xl:w-[1.5vw] xl:h-[1.5vw]' fill='#919191' />}
              />

              <TextField
                type='password'
                id='confirmed-pw'
                placeholder='Confirm password'
                icon={<Lock className='w-5 h-5 xl:w-[1.5vw] xl:h-[1.5vw]' fill='#919191' />}
              />

              <input
                className='w-full bg-accent-primary text-white font-bold border-0 rounded-[0.2rem] py-4 mt-6 cursor-pointer hover:bg-accent-primary-lightest xxl:text-[1.1vw] xxl:py-[1vw] xxl:mt-[1.5vw]'
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
