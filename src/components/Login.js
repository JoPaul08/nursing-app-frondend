import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link from React Router

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const predefinedPassword = 'password123'; // Predefined password

  const handleLogin = (event) => {
    event.preventDefault();
    // Check if the entered password matches the predefined password
    if (password === predefinedPassword) {
      // Redirect after a delay of 2 seconds
      setShowMessage(false);
      setTimeout(() => {
        navigate('/info');
      }, 2000);
    } else {
      // Show "Incorrect Password" message
      setShowMessage(true);
      // Reset showMessage state after 2 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <form onSubmit={handleLogin} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '300px',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}>
        <h3 style={{
          fontSize: '24px',
          marginBottom: '20px',
          color: '#333',
        }}>Login</h3>
        <p style={{
          marginBottom: '20px',
          textAlign: 'center',
          fontSize: '16px',
          color: '#333',
        }}>Welcome back!</p>
        <p style={{
          marginBottom: '20px',
          textAlign: 'center',
          fontSize: '16px',
          color: '#333',
        }}>We are glad to see you</p>
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
        <button type="submit" style={{
          padding: '12px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
          width: '100%',
        }}>Login</button>
        <Link to="/" style={{ marginTop: '10px', textDecoration: 'none', color: '#007bff', fontSize: '16px' }}>Sign Up</Link>
      </form>
      {showMessage && (
        <p style={{ marginTop: '20px', color: 'red' }}>Incorrect Password</p>
      )}
    </div>
  );
}

export default LoginForm;
