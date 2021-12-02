import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './component/AppRouter';
import Navbar from './component/Navbar';

function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <AppRouter />
  </BrowserRouter>
  );
}

export default App;
