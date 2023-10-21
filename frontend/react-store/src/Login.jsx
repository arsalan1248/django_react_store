import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
  }
  return (
    <div className="auth-form-container">
            <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='example@mail.com' id='email' name='email'/>

        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='*******' id='password' name='password'/>
        <button type='submit'>Login</button>
      </form>
      <button onClick={() => props.onFormSwitch('register')}>Register</button>
    </div>
    // <Container className="login-container">
    //   <Row className="justify-content-center align-items-center min-vh-100">
    //     <Col md={6}>
    //       <div className="login-form">
    //         <h2 className="text-center">Login</h2>
    //         <Form>
    //           <Form.Group controlId="formBasicEmail">
    //             <Form.Label>Email address</Form.Label>
    //             <Form.Control type="email" placeholder="Enter email" />
    //           </Form.Group>

    //           <Form.Group controlId="formBasicPassword">
    //             <Form.Label>Password</Form.Label>
    //             <Form.Control type="password" placeholder="Password" />
    //           </Form.Group>

    //           <Button variant="primary" type="submit" className="btn-block">
    //             Login
    //           </Button>
    //         </Form>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default Login;
