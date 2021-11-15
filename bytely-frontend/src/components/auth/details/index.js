import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { login } from '../../../redux/actions';
import { register } from '../../../redux/actions';

export default AuthDetails = ({ authPage, detailsPage, setDetailsPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(email, password))
      .then(() => {
        console.log('Login successful');
      })
      .catch(() => {
        console.log('Login failed');
      });
  };

  const handleRegister = () => {
    dispatch(register(email, password))
      .then(() => {
        console.log('Registration successful');
      })
      .catch(() => {
        console.log('Registration failed');
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setDetailsPage(false)}>
        <Feather
          name="arrow-left"
          size={24}
          color="black"
          style={styles.icon}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        placeholder="Password"
      />

      <TouchableOpacity style={styles.button} onPress={() => authPage ? handleLogin() : handleRegister()}>
        <Text style={styles.buttonText}>
          {authPage ? 'Sign In' : 'Sign Up'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
