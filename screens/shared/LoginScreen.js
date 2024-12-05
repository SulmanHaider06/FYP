import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Use SafeAreaView
import { login } from '../../utils/api'; // Ensure this is correctly imported
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setCredentials({ ...credentials, [field]: value });
  };

  const handleLogin = async () => {
    setLoading(true); // Show loading while processing login
    setError(''); // Reset any previous error messages
  
    try {
      const response = await login(credentials);
      console.log('Login response:', response);
  
      if (response && response.token) {
        await AsyncStorage.setItem('token', response.token);
        console.log('Login successful, navigating to Home screen...');
        Alert.alert('Success', 'Login successful', [
          {
            text: 'OK',
            onPress: () => {
              console.log('Navigating to Home screen...');
              navigation.replace('Home'); // Ensure this is being called
            },
          },
        ]);
      } else {
        console.log('Login failed with message:', response.message);
        setError(response.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      
      {/* Show error message if there is any */}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={credentials.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={credentials.password}
        onChangeText={(value) => handleInputChange('password', value)}
      />

      <Button
        title={loading ? 'Logging In...' : 'Log In'}
        onPress={handleLogin}
        disabled={loading} // Disable button while logging in
      />

      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  error: { color: 'red', marginBottom: 10 },
  signupContainer: { marginTop: 20, alignItems: 'center' },
});

export default LoginScreen;
