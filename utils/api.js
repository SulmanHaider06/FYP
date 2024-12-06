const BASE_URL = 'http://10.120.140.183:5000/api';  // Use your laptop's IP address instead of localhost




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



