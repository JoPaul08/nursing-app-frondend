import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function SymptomChecklistForm() {
  const [symptoms, setSymptoms] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSymptoms([...symptoms, value]);
    } else {
      setSymptoms(symptoms.filter(symptom => symptom !== value));
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSymptoms([]);
    }, 2000); // Simulating a backend interaction with a 2-second delay
  };

  return (
    <div style={styles.container}>
      <div style={styles.banner}>
        <h2 style={styles.bannerText}>Welcome to Symptom Checker</h2>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} style={styles.form}>
        <h3>Check Your Symptoms</h3>
        <label style={styles.checkbox}>
          <input type="checkbox" value="Fever" onChange={handleCheckboxChange} /> Fever
        </label>
        <label style={styles.checkbox}>
          <input type="checkbox" value="Cough" onChange={handleCheckboxChange} /> Cough
        </label>
        <label style={styles.checkbox}>
          <input type="checkbox" value="Difficulty Breathing" onChange={handleCheckboxChange} /> Difficulty Breathing
        </label>
        <button type="submit" style={styles.button}>Submit Symptoms</button>
        {submitted && <p style={styles.confirmation}>Symptoms saved successfully.</p>}
        <div>
          <h4>Selected Symptoms:</h4>
          <ul>
            {symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
        </div>
        <Link to="/login" style={styles.link}>Log out</Link>
      </form>
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
  banner: {
    backgroundColor: '#007bff',
    width: '100%',
    padding: '20px 0',
    textAlign: 'center',
    marginBottom: '20px',
  },
  bannerText: {
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  form: {
    width: '300px',
  },
  checkbox: {
    marginBottom: '10px',
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

export default SymptomChecklistForm;

