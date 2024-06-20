import React from 'react';
import ReactDOM from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { App } from './App.tsx';
import CoreProvider from './contexts/CoreProvider.tsx';
import './index.css';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoreProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
        <CssBaseline />
      </ThemeProvider>
    </CoreProvider>
  </React.StrictMode>
);
