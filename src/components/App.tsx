import React, {
    createContext,
    Dispatch,
    ReducerAction,
    ReducerState,
    useReducer,
} from 'react';
import Footer from './footer';
import Form from './form';
import Header from './header';
import Hero from './hero';
import LatestMovies from './latest';
import UpcomingMovies from './upcoming';
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

    return (
        <StoreContext.Provider value={{ state: globalState, dispatch }}>
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
