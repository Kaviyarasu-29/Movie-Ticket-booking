import React, { useState } from 'react';
import Login from './Login';
import Movie from './Movie';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className='bc'>
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      {isLoggedIn && <Movie />}
    </div>
  );
}

export default App;
