import React from 'react';

function ClinicalVisitDetails({ clinicalVisit }) {
  // Check if clinicalVisit is undefined
  if (!clinicalVisit) {
    return (
      <div style={styles.container}>
        <h2>No Clinical Visit Data Available</h2>
        <p>Please enter your vital signs to view clinical visit details.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Clinical Visit Details</h2>
      <div style={styles.details}>
        <p><strong>Body Temperature:</strong> {clinicalVisit.bodyTemperature}</p>
        <p><strong>Heart Rate:</strong> {clinicalVisit.heartRate}</p>
        <p><strong>Blood Pressure:</strong> {clinicalVisit.bloodPressure}</p>
        <p><strong>Respiratory Rate:</strong> {clinicalVisit.respiratoryRate}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  heading: {
    marginBottom: '10px',
    fontSize: '24px',
    color: '#333',
  },
  details: {
    fontSize: '16px',
  },
};

export default ClinicalVisitDetails;



