import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axiosInstance.js';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('/users/register', { email, password });
      
      setResponse(result.data.message);
      if (result.data.status==="success") {
        navigate('/explore');  // Redirect to the Explore page
      }

    } catch (error) {
      console.error("There was an error posting the data!", error);
      setResponse('Error logging in');
    }
  };
  return (
    <>
        <header className="Register-header">
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
        {response && <p>{response}</p>}
      </header>
    </>
  )
}

export default Register