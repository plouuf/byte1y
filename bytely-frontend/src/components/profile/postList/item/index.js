import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default ProfilePostListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.media[1]}}/>
    </View>
  );
};
