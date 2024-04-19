import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../../graphql/mutations';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '', userType: 'patient' }); // Initialize userType as 'patient'
  const [registerUser] = useMutation(SIGN_UP);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await registerUser({ variables: { input: formData } });
      console.log('User registered:', data);
      
      const userType = data.registeredUser.userType;
      const destination = userType === 'nurse' ? '/nursingPage' : '/patientPage';
      
      navigate(destination);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="register-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <form style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9', textAlign: 'center' }} onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: '20px' }}>Welcome to the nursing app</h2>
        <label style={{ display: 'block', marginBottom: '10px' }}>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }} />
        <label style={{ display: 'block', marginBottom: '10px' }}>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }} />
        
        {/* Radio buttons for selecting user type */}
        <label style={{ display: 'block', marginBottom: '10px' }}>User Type:</label>
        <label style={{ marginRight: '10px' }}>
          <input type="radio" name="userType" value="patient" checked={formData.userType === 'patient'} onChange={handleChange} /> Patient
        </label>
        <label>
          <input type="radio" name="userType" value="nurse" checked={formData.userType === 'nurse'} onChange={handleChange} /> Nurse
        </label>

        <button type="submit" style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', fontSize: '16px', cursor: 'pointer' }}>Register</button>
      </form>
      <p style={{ marginTop: '20px' }}>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;


