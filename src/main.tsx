import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './main.css';

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root'),
);
