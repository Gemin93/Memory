import React from 'react';
import ReactDOM from 'react-dom/client';
import './common.css';
import { App } from './Components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const element = <App />;
root.render(element);
