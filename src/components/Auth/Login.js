// Auth/Login.js
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loginUser] = useMutation(LOGIN_USER);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ variables: { input: formData } });
      console.log('User logged in:', data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
