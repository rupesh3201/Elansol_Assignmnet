import  { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../src/Css/login.css'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log(response.data);


      localStorage.setItem('token', response.data.token);

     
      alert("Login successful!");
      navigate('/home'); 
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-teal-500">
      <Container className="form-container text-center">
        <h2 className='Sign_title'>Sign In</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4 w-100">
            Login
          </Button>
          <Button
            variant="secondary"
            className="mt-3 w-100"
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
