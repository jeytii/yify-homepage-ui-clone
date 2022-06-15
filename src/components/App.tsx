import React, { createContext, useReducer, useMemo } from 'react';
import type { Dispatch, ReducerAction, ReducerState } from 'react';
import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import Hero from './Hero';
import LatestMovies from './LatestMovies';
import UpcomingMovies from './UpcomingMovies';
import Modal from './Modal';

type StateType = 'login' | 'register' | null;

type UseReducerHook = (
  state: { formType: StateType },
  action: { value: StateType },
) => { formType: StateType };

export const StoreContext = createContext<{
  state: ReducerState<UseReducerHook>;
  dispatch: Dispatch<ReducerAction<UseReducerHook>>;
} | null>(null);

export default function App() {
  const [globalState, dispatch] = useReducer<UseReducerHook>(
    (state, action) => ({ formType: action.value }),
    { formType: null },
  );
  const contextValue = useMemo(
    () => ({ state: globalState, dispatch }),
    [globalState],
  );

  return (
    <StoreContext.Provider value={contextValue}>
      <main>
        <Header />
        <Hero />
        <LatestMovies />
        <UpcomingMovies />
        <Footer />

        {!!globalState.formType && (
        <Modal>
          <Form />
        </Modal>
        )}
      </main>
    </StoreContext.Provider>
  );
}
