import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PATIENT_INFO } from '../graphql/mutations'; // Ensure you have this mutation defined in your GraphQL schema

function PatientInfoForm({ userId }) {
  const [formState, setFormState] = useState({
    pulseRate: '',
    bloodPressure: '',
    weight: '',
    temperature: '',
    respiratoryRate: ''
  });
  const navigate = useNavigate();
  const [addPatientInfo, { loading, error }] = useMutation(ADD_PATIENT_INFO);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addPatientInfo({
        variables: { userId, ...formState }
      });
      console.log('Patient info added successfully');
      navigate('/info'); // Redirect or handle post-submission logic
    } catch (err) {
      console.error('Error adding patient info:', err.message);
    }
    // Reset form and state management if needed here
    setFormState({
      pulseRate: '',
      bloodPressure: '',
      weight: '',
      temperature: '',
      respiratoryRate: ''
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.welcomeBar}>
        <p style={styles.welcomeMessage}>Welcome to Daily Information</p>
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        {Object.keys(formState).map(key => (
          <input
            key={key}
            name={key}
            type="number" // Assuming all inputs are number type, adjust if necessary
            placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')} // Format to readable label
            value={formState[key]}
            onChange={handleChange}
            style={styles.input}
          />
        ))}
        <button type="submit" disabled={loading} style={styles.button}>
          Submit Patient Info
        </button>
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      </form>
      <Link to="/symptom" style={styles.link}>Go to your Symptom Checklist</Link>
      <br />
      <Link to="/login" onClick={() => navigate('/login')} style={styles.link}>Log Out</Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  welcomeBar: {
    backgroundColor: '#007bff',
    width: '100%',
    padding: '10px 0',
    textAlign: 'center',
    marginBottom: '20px',
  },
  welcomeMessage: {
    color: '#fff',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
  },
  input: {
    margin: '5px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    width: '100%',
  },
  button: {
    margin: '10px 0',
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%',
  },
  link: {
    marginTop: '10px',
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '16px',
  },
};

export default PatientInfoForm;
