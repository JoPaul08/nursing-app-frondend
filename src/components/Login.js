import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations'; // Assuming you have a LOGIN_USER mutation defined

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginUser({
        variables: {
          email,
          password
        }
      });
      // Assuming the response includes some form of user token or session id
      console.log('Login successful', data);
      localStorage.setItem('token', data.login.token); // Store token in local storage
      navigate('/info'); // Redirect to another route on successful login
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    }}>
      <form onSubmit={handleLogin} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '375px',
        height: '667px',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        background: '#fff',
      }}>
        <h3 style={{
          fontSize: '24px',
          marginBottom: '20px',
          color: '#333',
        }}>Login</h3>
        <label style={{
          marginBottom: '10px',
          fontSize: '16px',
          color: '#333',
          width: '100%',
          textAlign: 'left',
        }}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              width: '100%',
            }}
          />
        </label>
        <label style={{
          marginBottom: '10px',
          fontSize: '16px',
          color: '#333',
          width: '100%',
          textAlign: 'left',
        }}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              width: '100%',
            }}
          />
        </label>
        <button type="submit" disabled={loading} style={{
          padding: '12px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
          width: '100%',
        }}>Login</button>
        {error && (
          <p style={{ marginTop: '20px', color: 'red', fontSize: '16px' }}>Error: {error.message}</p>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
