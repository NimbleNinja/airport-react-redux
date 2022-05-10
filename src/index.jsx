import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App.jsx';

const rootElement = ReactDOM.createRoot(document.querySelector('#root'));

rootElement.render(<App />);
