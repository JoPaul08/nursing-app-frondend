import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_VITAL_SIGNS } from '../graphql/mutations'; // Make sure this mutation is defined in your GraphQL API

function VitalSignsForm({ userId }) {
  const [formState, setFormState] = useState({
    bodyTemperature: '',
    heartRate: '',
    bloodPressure: '',
    respiratoryRate: ''
  });
  const navigate = useNavigate();
  const [addVitalSigns, { loading, error }] = useMutation(ADD_VITAL_SIGNS, {
    onCompleted: () => {
      // You could navigate to another page or show a success message
      navigate('/success'); // Redirect to a success page, or adjust as necessary
    }
  });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addVitalSigns({
      variables: { userId, ...formState }
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.dashboard}>
        <h2 style={styles.banner}>Vital Signs Dashboard</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Body Temperature:</label>
            <input name="bodyTemperature" type="number" value={formState.bodyTemperature} onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Heart Rate:</label>
            <input name="heartRate" type="number" value={formState.heartRate} onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Blood Pressure:</label>
            <input name="bloodPressure" type="text" value={formState.bloodPressure} onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Respiratory Rate:</label>
            <input name="respiratoryRate" type="number" value={formState.respiratoryRate} onChange={handleChange} style={styles.input} />
          </div>
          <button type="submit" disabled={loading} style={styles.button}>Submit Vital Signs</button>
          {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
          <Link to="/clinical-visit" style={styles.link}>View Clinical Visit Details</Link>
          <Link to="/login" style={styles.logout}>Log out</Link>
        </form>
      </div>
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
    background: 'linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%)',
  },
  dashboard: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    width: '90%',
    maxWidth: '600px',
  },
  banner: {
    fontSize: '22px',
    color: '#007bff',
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputGroup: {
    marginBottom: '20px',
    width: '100%',
  },
  label: {
    marginBottom: '5px',
    fontSize: '16px',
    color: '#333',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
    width: '100%',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
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
  logout: {
    marginTop: '10px',
    textDecoration: 'none',
    color: 'red',
    fontSize: '16px',
  },
};

export default VitalSignsForm;
