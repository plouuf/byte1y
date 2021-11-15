import React from 'react';
import {
  KeyboardAvoidingViewComponent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

import { Feather } from '@expo/vector-icons';

export default AuthMenu = ({ authPage, setAuthPage, detailsPage, setDetailsPage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.headerText}>{authPage ? 'Log in' : 'Register'}</Text>
        <TouchableOpacity style={styles.providerButton} onPress={() => setDetailsPage(true)}>
          <Feather name="user" size={24} color="black" />
          <Text style={styles.providerLabel}>Use Email</Text>
          <View />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.bottomContainer}
        onPress={() => (authPage ? setAuthPage(false) : setAuthPage(true))}
      >
        {authPage ? (
          <Text>
            Don't have an account ?{' '}
            <Text style={styles.signupText}>Sign up</Text>
          </Text>
        ) : (
          <Text>
            Already have an account ?{' '}
            <Text style={styles.signupText}>Log in</Text>
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
