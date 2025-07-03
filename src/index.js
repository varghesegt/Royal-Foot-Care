import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// If you're using `react-head`
import { HeadProvider } from 'react-head';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HeadProvider>
    <App />
  </HeadProvider>
);
