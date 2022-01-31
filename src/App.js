import React from 'react';
import Routes from './router';
import './App.css';
import AppProviders from './context';

function App() {
  console.log("Mirror should Work");
  console.log("Confirming mirror");
  return (
    <AppProviders>
      <Routes/>
    </AppProviders>
  );
}

export default App;