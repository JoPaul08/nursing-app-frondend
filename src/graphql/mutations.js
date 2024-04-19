import { gql } from '@apollo/client';

// Mutation to sign up a new user
export const SIGN_UP = gql`
  mutation SignUp($email: String!, $password: String!, $role: Role!) {
    signup(email: $email, password: $password, role: $role) {
      _id
      email
      role
    }
  }
`;

// Mutation to log in a user
export const LOG_IN = gql`
  mutation LogIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        role
      }
    }
  }
`;

// Mutation to create vital signs
export const CREATE_VITAL_SIGNS = gql`
  mutation CreateVitalSigns(
    $userId: ID!
    $bodyTemperature: Float
    $heartRate: Float
    $bloodPressure: String
    $respiratoryRate: Float
  ) {
    createVitalSigns(
      userId: $userId
      bodyTemperature: $bodyTemperature
      heartRate: $heartRate
      bloodPressure: $bloodPressure
      respiratoryRate: $respiratoryRate
    ) {
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

// Mutation to create patient information
export const CREATE_PATIENT_INFO = gql`
  mutation CreatePatientInfo(
    $userId: ID!
    $pulseRate: Float
    $bloodPressure: String
    $weight: Float
    $temperature: Float
    $respiratoryRate: Float
  ) {
    createPatientInfo(
      userId: $userId
      pulseRate: $pulseRate
      bloodPressure: $bloodPressure
      weight: $weight
      temperature: $temperature
      respiratoryRate: $respiratoryRate
    ) {
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

// Mutation to create symptom checklist
export const CREATE_SYMPTOM_CHECKLIST = gql`
  mutation CreateSymptomChecklist($userId: ID!, $symptoms: [String]) {
    createSymptomChecklist(userId: $userId, symptoms: $symptoms) {
      _id
      userId
      date
      symptoms
    }
  }
`;
