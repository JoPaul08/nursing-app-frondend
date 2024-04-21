import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'nurse' // Default role set to nurse
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Redirect based on the selected role
        if (formData.role === 'nurse') {
            navigate('/vital-signs');
        } else if (formData.role === 'patient') {
            navigate('/info');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ maxWidth: '400px', width: '100%', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <h1 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center', color: '#333' }}>Welcome to our Nursing App</h1>
                <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ marginBottom: '20px', padding: '12px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{ marginBottom: '20px', padding: '12px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
                    />
                    <select name="role" value={formData.role} onChange={handleChange} style={{ marginBottom: '20px', padding: '12px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}>
                        <option value="nurse">Nurse</option>
                        <option value="patient">Patient</option>
                    </select>
                    <button type="submit" style={{ padding: '12px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>Sign Up</button>
                </form>
                <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '16px', color: '#666' }}>Already have an account? <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>Log in</Link></p>
            </div>
        </div>
    );
}

export default Signup;
