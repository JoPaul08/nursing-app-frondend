import { gql } from '@apollo/client';

// Query to fetch user details
export const GET_USER_DETAILS = gql`
  query GetUserDetails {
    getUserDetails {
      _id
      email
      role
    }
  }
`;

// Query to fetch vital signs for a user
export const GET_VITAL_SIGNS = gql`
  query GetVitalSigns($userId: ID!) {
    getVitalSigns(userId: $userId) {
      _id
      userId
      date
      bodyTemperature
      heartRate
      bloodPressure
      respiratoryRate
    }
  }
`;

// Query to fetch patient information for a user
export const GET_PATIENT_INFO = gql`
  query GetPatientInfo($userId: ID!) {
    getPatientInfo(userId: $userId) {
      _id
      userId
      date
      pulseRate
      bloodPressure
      weight
      temperature
      respiratoryRate
    }
  }
`;

// Query to fetch symptom checklist for a user
export const GET_SYMPTOM_CHECKLIST = gql`
  query GetSymptomChecklist($userId: ID!) {
    getSymptomChecklist(userId: $userId) {
      _id
      userId
      date
      symptoms
    }
  }
`;
