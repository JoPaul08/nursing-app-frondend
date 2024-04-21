import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from '../graphql/mutations'; // Ensure you have this mutation defined in your GraphQL schema

function Signup() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'nurse' // Default role set to nurse
    });
    const navigate = useNavigate();
    const [signup, { loading, error }] = useMutation(SIGNUP_MUTATION, {
        variables: {
            email: formData.email,
            password: formData.password,
            role: formData.role
        },
        onCompleted: (data) => {
            // Handle post-signup logic based on the role
            if (data.signup.role === 'NURSE') {
                navigate('/vital-signs');
            } else if (data.signup.role === 'PATIENT') {
                navigate('/info');
            }
        },
        onError: (err) => {
            console.error("Error signing up: ", err.message);
        }
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        signup(); // Execute the mutation
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        }}>
            <div style={{
                width: '375px',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                background: '#fff',
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
                    <button type="submit" disabled={loading} style={{
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
                {error && <p style={{
                    color: 'red',
                    marginTop: '20px',
                    textAlign: 'center',
                    fontSize: '16px'
                }}>Error signing up: {error.message}</p>}
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
