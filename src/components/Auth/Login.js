import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOG_IN } from '../../graphql/mutations';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loginUser] = useMutation(LOG_IN);
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ variables: { input: formData } });
      console.log('User logged in:', data);
      setWelcomeMessage(`Welcome back, ${data.loggedUser.name}!`); // Assuming the server response includes the user's name
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        {welcomeMessage && <h2 style={{ marginBottom: '20px' }}>{welcomeMessage}</h2>}
        <h2 style={{ marginBottom: '20px' }}>Welcome back , we care about your health </h2>
        <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '300px', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Email" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: '300px', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Password" />
        <button type="submit" style={{ width: '300px', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#28a745', color: 'white', fontSize: '16px', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;

