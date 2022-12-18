import SearchBar from './components/header/SearchBar';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import './App.css';
import CardList from './components/card/CardList';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/card" element={<CardList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
