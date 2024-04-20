import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SYMPTOM_CHECKLIST } from '../graphql/mutations';

function SymptomChecklistForm({ userId }) {
  const [symptoms, setSymptoms] = useState([]);
  const [addSymptomChecklist, { loading, error }] = useMutation(ADD_SYMPTOM_CHECKLIST);

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setSymptoms([...symptoms, event.target.value]);
    } else {
      setSymptoms(symptoms.filter(symptom => symptom !== event.target.value));
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <h3>Check Your Symptoms</h3>
      <label>
        <input type="checkbox" value="Fever" onChange={handleCheckboxChange} /> Fever
      </label>
      <label>
        <input type="checkbox" value="Cough" onChange={handleCheckboxChange} /> Cough
      </label>
      <label>
        <input type="checkbox" value="Difficulty Breathing" onChange={handleCheckboxChange} /> Difficulty Breathing
      </label>
      <button type="submit" disabled={loading}>Submit Symptoms</button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
}

export default SymptomChecklistForm;
