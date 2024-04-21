import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from React Router

function PatientInfoForm({ userId }) {
  const [formState, setFormState] = useState({
    pulseRate: '',
    bloodPressure: '',
    weight: '',
    temperature: '',
    respiratoryRate: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Use useNavigate to navigate programmatically

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate backend interaction by displaying a confirmation message
    setSubmitted(true);
    // Reset form after submission
    setFormState({
      pulseRate: '',
      bloodPressure: '',
      weight: '',
      temperature: '',
      respiratoryRate: ''
    });
    // Set timeout to hide confirmation message after 2 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  };

  const handleLogout = () => {
    // Perform logout actions here
    // For now, just redirect to login page
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <div style={styles.welcomeBar}>
        <p style={styles.welcomeMessage}>Welcome to Daily Information</p>
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="pulseRate" type="number" placeholder="Pulse Rate" value={formState.pulseRate} onChange={handleChange} style={styles.input} />
        <input name="bloodPressure" type="text" placeholder="Blood Pressure" value={formState.bloodPressure} onChange={handleChange} style={styles.input} />
        <input name="weight" type="number" placeholder="Weight" value={formState.weight} onChange={handleChange} style={styles.input} />
        <input name="temperature" type="number" placeholder="Temperature" value={formState.temperature} onChange={handleChange} style={styles.input} />
        <input name="respiratoryRate" type="number" placeholder="Respiratory Rate" value={formState.respiratoryRate} onChange={handleChange} style={styles.input} />
        <button type="submit" style={styles.button}>Submit Patient Info</button>
      </form>
      {submitted && <p style={styles.confirmation}>Daily information saved, THANK YOU.</p>}
      <Link to="/Symptom" style={styles.link}>Go to your Symptom Checklist</Link> {/* Link to Symptom Checklist form */}
      <br />
      <Link to="/login" onClick={handleLogout} style={styles.link}>Log Out</Link> {/* Log Out link */}
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
  confirmation: {
    margin: '10px 0',
    color: 'green',
    fontSize: '16px',
  },
  link: {
    marginTop: '10px',
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '16px',
  },
};

export default PatientInfoForm;

 