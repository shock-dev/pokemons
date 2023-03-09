import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
);
