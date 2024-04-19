// Nurse/MedicalConditions.js
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GENERATE_MEDICAL_CONDITIONS } from '../graphql/mutations';

const MedicalConditions = () => {
  const [conditions, setConditions] = useState([]);
  const [generateConditions] = useMutation(GENERATE_MEDICAL_CONDITIONS);

  const handleSubmit = async () => {
    try {
      const { data } = await generateConditions();
      setConditions(data.generatedConditions);
    } catch (error) {
      console.error('Failed to generate medical conditions:', error);
    }
  };

  return (
    <div>
      <h2>Generate Medical Conditions</h2>
      <button onClick={handleSubmit}>Generate</button>
      <ul>
        {conditions.map((condition, index) => (
          <li key={index}>{condition}</li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalConditions;
