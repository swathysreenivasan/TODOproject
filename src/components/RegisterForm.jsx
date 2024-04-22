import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardContent, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';



const RegisterForm = ({ onRegister, setMessage }) => {
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      // Validate inputs on the client side
      if (!registerData.name || !registerData.email || !registerData.password) {
        setErrorMessage('Please fill in all fields');
        return;
      }

      const response = await axios.post('http://localhost:3000/register', registerData);

      // Check if the registration was successful
      if (response.status === 201) {
        alert('Registration successful!');
        window.location.href = "/login";

        onRegister(); // Notify the parent component about the successful registration
      } else {
        setErrorMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      // Check for specific error messages from the server
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(`Registration failed: ${error.response.data.message}`);
      } else {
        console.error('Registration error:', error.message);
        // setErrorMessage('Registration failed. Please try again.');
      }
    }
  };

  return (
    <>
      <style>
        {`
        body {
          margin: 0;
          padding: 0;
          background: url('https://wallpaperaccess.com/full/5590044.jpg') fixed;
          background-size: cover;
        }
      `}
      </style>
      <body>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
          }}
        >
          <Card sx={{ maxWidth: 700 }}>
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: 2 }}>Register</Typography>
              {errorMessage && (
                <Typography variant="body2" color="error" sx={{ marginBottom: 2 }}>{errorMessage}</Typography>
              )}
              <TextField
                label="Name"
                value={registerData.name}
                onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                fullWidth
                margin="normal"
              />
              <Button variant="contained" onClick={handleRegister} fullWidth sx={{ marginTop: 2 }}>
                Register
              </Button>
            </CardContent>
          </Card>
        </Box>
      </body>
    </>
  );
};

export default RegisterForm;
