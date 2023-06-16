import React, { useState } from 'react';
import { registerUser } from '../ajax-requests';

        <div>
            <h1>This is register</h1>
        </div>

function Register({ setToken, navigate }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    async function handleSubmit(event) {
      event.preventDefault();
      const user = {username, password};
     
      const results = await registerUser(user);
      
      if (results.success) {
        setToken(results.data.token);
        window.localStorage.setItem("token", results.data.token);
        navigate('/login');
      }
      
    }

    return (
        <div>
            <h1>This is register</h1>
        </div>
    )

}

export default Register;