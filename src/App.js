import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Movie from './Movie';

function App() {
  return (
    <Router>
      <div className='bc'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;