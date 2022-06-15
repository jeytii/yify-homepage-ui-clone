import { ReactNode, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StoreContext } from './App';

const modalRoot = document.querySelector('#modal');

export default function Modal({ children }: { children: ReactNode }) {
  const store = useContext(StoreContext);
  const container = document.createElement('div');

  useEffect(() => {
    modalRoot?.appendChild(container);

    return () => {
      modalRoot?.removeChild(container);
    };
  }, [store, container]);

  return createPortal(children, container);
}
