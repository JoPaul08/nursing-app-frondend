// Auth/Register.js
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../graphql/mutations';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [registerUser] = useMutation(REGISTER_USER);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await registerUser({ variables: { input: formData } });
      console.log('User registered:', data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
