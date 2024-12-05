const BASE_URL = 'http://192.168.18.53:5000/api';  // Use your laptop's IP address instead of localhost
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



export const signup = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // If response is not OK (e.g., 400, 500), throw an error
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    // Parse the response JSON
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Signup error:', err);
    throw new Error('Failed to sign up. Please try again.');
  }
};

export const login = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {  // Updated path here
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Login error:', err);
    throw new Error('Failed to log in. Please try again.');
  }
};



