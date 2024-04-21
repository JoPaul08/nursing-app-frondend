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
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', // Soft gradient background
        }}>
            <div style={{
                width: '375px', // Mimicking iPhone width
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '20px', // Rounded corners for modern look
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                background: '#fff', // White background for the form
            }}>
                <h1 style={{
                    fontSize: '24px',
                    marginBottom: '20px',
                    textAlign: 'center',
                    color: '#333',
                }}>Welcome to our Nursing App</h1>
                <form onSubmit={handleSubmit} style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                            marginBottom: '20px',
                            padding: '12px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            width: '100%',
                        }}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{
                            marginBottom: '20px',
                            padding: '12px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            width: '100%',
                        }}
                    />
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        style={{
                            marginBottom: '20px',
                            padding: '12px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            width: '100%',
                        }}>
                        <option value="nurse">Nurse</option>
                        <option value="patient">Patient</option>
                    </select>
                    <button type="submit" style={{
                        padding: '12px 20px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        width: '100%',
                    }}>Sign Up</button>
                </form>
                <p style={{
                    marginTop: '20px',
                    textAlign: 'center',
                    fontSize: '16px',
                    color: '#666'
                }}>Already have an account? <Link to="/login" style={{
                    color: '#007bff',
                    textDecoration: 'none'
                }}>Log in</Link></p>
            </div>
        </div>
    );
}

export default Signup;
