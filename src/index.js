import { unstable_styleFunctionSx } from '@mui/system';
import { renderHook } from '@testing-library/react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);