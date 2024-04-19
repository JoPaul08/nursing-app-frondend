// Patient/SymptomChecklist.js
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SUBMIT_SYMPTOMS } from '../graphql/mutations';

const SymptomChecklist = () => {
  const [formData, setFormData] = useState({ symptoms: [] });
  const [submitSymptoms] = useMutation(SUBMIT_SYMPTOMS);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, symptoms: [...formData.symptoms, value] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await submitSymptoms({ variables: { input: formData } });
      console.log('Symptoms submitted:', data);
    } catch (error) {
      console.error('Failed to submit symptoms:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="checkbox" value="Fever" onChange={handleChange} />
        Fever
      </label>
      <label>
        <input type="checkbox" value="Cough" onChange={handleChange} />
        Cough
      </label>
      {/* Add more symptoms */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SymptomChecklist;
