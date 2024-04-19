// Nurse/EnterVitalSigns.js
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_VITAL_SIGNS } from '../graphql/mutations';

const EnterVitalSigns = () => {
  const [formData, setFormData] = useState({ temperature: '', heartRate: '', bloodPressure: '', respiratoryRate: '' });
  const [addVitalSigns] = useMutation(ADD_VITAL_SIGNS);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addVitalSigns({ variables: { input: formData } });
      console.log('Vital signs added:', data);
    } catch (error) {
      console.error('Failed to add vital signs:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="temperature" value={formData.temperature} onChange={handleChange} />
      <input type="number" name="heartRate" value={formData.heartRate} onChange={handleChange} />
      <input type="text" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} />
      <input type="number" name="respiratoryRate" value={formData.respiratoryRate} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EnterVitalSigns;
