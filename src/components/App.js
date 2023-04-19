import React, { useState } from 'react';
import { Register } from './';


function App() {
  const [token, setToken] = useState('');
  
  return (
    <div>
      <Register setToken={setToken} />
    </div>
  )
}

export default App;
