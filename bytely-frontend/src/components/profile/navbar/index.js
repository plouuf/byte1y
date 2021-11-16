import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default ProfileNavBar = ({ user }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Fontisto name="search" size={21} color={'black'} />
      </TouchableOpacity>
      <Text style={styles.displayName}>{user.displayName}</Text>
      <TouchableOpacity>
        <Feather name="menu" size={24} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};
