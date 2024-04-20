import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_VITAL_SIGNS } from '../graphql/mutations';

function VitalSignsForm({ userId }) {
  const [formState, setFormState] = useState({
    bodyTemperature: '',
    heartRate: '',
    bloodPressure: '',
    respiratoryRate: ''
  });
  const [addVitalSigns, { loading, error }] = useMutation(ADD_VITAL_SIGNS);

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
    <form onSubmit={handleSubmit}>
      <input name="bodyTemperature" type="number" placeholder="Body Temperature" value={formState.bodyTemperature} onChange={handleChange} />
      <input name="heartRate" type="number" placeholder="Heart Rate" value={formState.heartRate} onChange={handleChange} />
      <input name="bloodPressure" type="text" placeholder="Blood Pressure" value={formState.bloodPressure} onChange={handleChange} />
      <input name="respiratoryRate" type="number" placeholder="Respiratory Rate" value={formState.respiratoryRate} onChange={handleChange} />
      <button type="submit" disabled={loading}>Submit Vital Signs</button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
}

export default VitalSignsForm;
