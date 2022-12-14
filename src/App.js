import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Math from './pages/Math';

const App = () => (
  <>
    <Header />
    <div className="container">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home />
        }
        />
        <Route
          path="/calculator"
          element={
            <Math />
        }
        />
        <Route
          path="/quote"
          element={
            <Quote />
        }
        />
      </Routes>
    </div>
  </>
);

export default App;
