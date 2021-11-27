import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import buttonStyles from '../../../styles/buttonStyles';
import styles from './styles';

export default ProfileHeader = ({ user }) => {
  return (
    <View style={styles.container}>
      <Avatar.Icon size={80} icon={'account'} style={{ backgroundColor: 'gray' }} color={'white'}/>
      <Text style={styles.userText}>@{user.displayName ? user.displayName : user.email}</Text>
      <View style={styles.counterContainer}>
        <View style={styles.counterItemContainer}>
          <Text style={styles.counterNumberText}>0</Text>
          <Text style={styles.counterLabelText}>Following</Text>
        </View>
        <Text style={styles.counterSeperator}>|</Text>
        <View style={styles.counterItemContainer}>
          <Text style={styles.counterNumberText}>0</Text>
          <Text style={styles.counterLabelText}>Followers</Text>
        </View>
        <Text style={styles.counterSeperator}>|</Text>
        <View style={styles.counterItemContainer}>
          <Text style={styles.counterNumberText}>0</Text>
          <Text style={styles.counterLabelText}>Likes</Text>
        </View>
      </View>
      <TouchableOpacity style={buttonStyles.grayOutlinedButton}>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
