import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
  }
  return (
    <div className="auth-form-container">
            <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='example@mail.com' id='email' name='email'/>

        <label htmlFor="username">Username</label>
        <input value={username} onChange={(e) => setEmail(e.target.value)} type="username" id='username' name='username'/>

        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='*******' id='password' name='password'/>
        <button type='submit'>Login</button>
      </form>
      <button onClick={() => props.onFormSwitch('login')}>Login</button>
    </div>
    );
  };
  
  export default Register;