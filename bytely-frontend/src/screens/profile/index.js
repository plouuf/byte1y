import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './styles';
import ProfileNavBar from '../../components/profile/navbar';

export default ProfileScreen = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <View style={styles.container}>
      <ProfileNavBar user={currentUser}/>
    </View>
  );
};
