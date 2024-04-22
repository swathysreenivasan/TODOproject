import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardContent, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

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
          height: '80vh', // Adjust the height as needed
        }}
      >
        <Card sx={{ maxWidth: 400 }}>
          <CardContent>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>Login</Typography>
            <TextField
              label="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              fullWidth
              margin="normal"
            />
            <Link to="/ProjectList">
              <Button variant="contained" fullWidth sx={{ marginTop: 2 }}>
                Login
              </Button>
            </Link>
            <Typography variant="body2" style={{ marginTop: '10px' }}>
              Don't have an account? <Link to="/register">Register here</Link>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </body>
    </>
  );
};

export default LoginForm;
