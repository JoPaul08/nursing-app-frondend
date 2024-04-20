
import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
mutation signupuser($email: String!, $password: String!, $role: Role!) {
  signup(email: $email, password: $password, role: $role) {
    _id
    email
    role
  }
}
`;

export const LOGIN_USER = gql`
mutation LoginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    
      _id
      email
      role
    
  }
}
`;
export const ADD_VITAL_SIGNS = gql`
  mutation AddVitalSigns($userId: ID!, $bodyTemperature: Float, $heartRate: Float, $bloodPressure: String, $respiratoryRate: Float) {
    createVitalSigns(
      userId: $userId,
      bodyTemperature: $bodyTemperature,
      heartRate: $heartRate,
      bloodPressure: $bloodPressure,
      respiratoryRate: $respiratoryRate
    ) {
      _id
      bodyTemperature
      heartRate
      bloodPressure
      respiratoryRate
    }
  }
`;

export const ADD_PATIENT_INFO = gql`
  mutation AddPatientInfo($userId: ID!, $pulseRate: Float, $bloodPressure: String, $weight: Float, $temperature: Float, $respiratoryRate: Float) {
    createPatientInfo(
      userId: $userId,
      pulseRate: $pulseRate,
      bloodPressure: $bloodPressure,
      weight: $weight,
      temperature: $temperature,
      respiratoryRate: $respiratoryRate
    ) {
      _id
      pulseRate
      bloodPressure
      weight
      temperature
      respiratoryRate
    }
  }
`;

export const ADD_SYMPTOM_CHECKLIST = gql`
  mutation AddSymptomChecklist($userId: ID!, $symptoms: [String!]!) {
    createSymptomChecklist(
      userId: $userId,
      symptoms: $symptoms
    ) {
      _id
      symptoms
    }
  }
`;
