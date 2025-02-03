import React from 'react';
import './App.scss'
import { AlertProvider } from './context/AlertContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <React.StrictMode>
      <AlertProvider>
        <AppRouter />
      </AlertProvider>
    </React.StrictMode>
    );
}

export default App;
