// Nurse/PreviousClinicalVisit.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PREVIOUS_VISIT } from '../graphql/queries';

const PreviousClinicalVisit = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_PREVIOUS_VISIT, { variables: { userId } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Previous Clinical Visit</h2>
      <p>Temperature: {data.previousVisit.temperature}</p>
      <p>Heart Rate: {data.previousVisit.heartRate}</p>
      <p>Blood Pressure: {data.previousVisit.bloodPressure}</p>
      <p>Respiratory Rate: {data.previousVisit.respiratoryRate}</p>
    </div>
  );
};

export default PreviousClinicalVisit;
