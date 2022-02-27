import React from 'react';
import './App.css';
import Routes from './routes/Routes';
import GlobalProvider from './context/GlobalProvider';

function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
    <Routes />
  );
}

export default App;
