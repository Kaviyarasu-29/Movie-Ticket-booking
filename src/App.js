import React, { useState } from 'react';
import Login from './Login';
import Movie from './Movie';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const hdlgn = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className='bc'>
      {!isLoggedIn && <Login onLogin={hdlgn} />}
      {isLoggedIn && <Movie />}
    </div>
  );
}

export default App;
