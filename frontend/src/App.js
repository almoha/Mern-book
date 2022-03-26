import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import ListBooks from './pages/ListBooks/ListBooks';
import AddBook from './pages/AddBook/AddBook';
import ErrorPage from './pages/ErrorPage';
import Updatebook from './pages/UpdateBook';
import DetailsBook from './pages/DetailsBook';

import './App.css';

function App() {
  return (
    <Router>
      <h1>BOOKS CATALOG</h1>
      <Header />
      <Routes>
        <Route path="/" element={<ListBooks />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/updatebook/:id" element={<Updatebook />} />
        <Route path="/detailsbook/:id" element={<DetailsBook />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
