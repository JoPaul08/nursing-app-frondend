// Patient/EnterDailyInformation.js
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DAILY_INFO } from '../graphql/mutations';

const EnterDailyInformation = () => {
  const [formData, setFormData] = useState({ pulseRate: '', bloodPressure: '', weight: '', temperature: '', respiratoryRate: '' });
  const [addDailyInfo] = useMutation(ADD_DAILY_INFO);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addDailyInfo({ variables: { input: formData } });
      console.log('Daily information added:', data);
    } catch (error) {
      console.error('Failed to add daily information:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="pulseRate" value={formData.pulseRate} onChange={handleChange} />
      <input type="text" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} />
      <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
      <input type="number" name="temperature" value={formData.temperature} onChange={handleChange} />
      <input type="number" name="respiratoryRate" value={formData.respiratoryRate} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EnterDailyInformation;
