import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../styles';

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }
    if (login(username, password)) {
      navigation.replace('Dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

    // Clear error message when user starts typing
    const clearError = () => {
      if (error) setError('');
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Tracker</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TextInput style={styles.input} placeholder="Username"  onChangeText={(text) => { setUsername(text); clearError(); }} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={(text) => { setPassword(text); clearError(); }} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
