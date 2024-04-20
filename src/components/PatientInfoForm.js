import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PATIENT_INFO } from '../graphql/mutations';

function PatientInfoForm({ userId }) {
  const [formState, setFormState] = useState({
    pulseRate: '',
    bloodPressure: '',
    weight: '',
    temperature: '',
    respiratoryRate: ''
  });
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
      // Reset form after successful submission
      setFormState({
        pulseRate: '',
        bloodPressure: '',
        weight: '',
        temperature: '',
        respiratoryRate: ''
      });
    } catch (error) {
      console.error('Error adding patient info:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="pulseRate" type="number" placeholder="Pulse Rate" value={formState.pulseRate} onChange={handleChange} />
      <input name="bloodPressure" type="text" placeholder="Blood Pressure" value={formState.bloodPressure} onChange={handleChange} />
      <input name="weight" type="number" placeholder="Weight" value={formState.weight} onChange={handleChange} />
      <input name="temperature" type="number" placeholder="Temperature" value={formState.temperature} onChange={handleChange} />
      <input name="respiratoryRate" type="number" placeholder="Respiratory Rate" value={formState.respiratoryRate} onChange={handleChange} />
      <button type="submit" disabled={loading}>Submit Patient Info</button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
}

export default PatientInfoForm;

 