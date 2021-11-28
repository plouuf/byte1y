import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import buttonStyles from '../../../styles/buttonStyles';
import styles from './styles';

export default ProfileHeader = ({ user }) => {
  const navigation = useNavigation();

  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <View style={styles.container}>
      {currentUser.photoURL !== null ? (
        <View style={styles.profilePictureContainer}>
          <Image
            style={styles.profilePicture}
            source={{ uri: currentUser.photoURL }}
          />
        </View>
      ) : (
        <Avatar.Icon
          size={80}
          icon={'account'}
          style={{ backgroundColor: 'gray' }}
          color={'white'}
        />
      )}
      <Text style={styles.userText}>
        @{user.displayName ? user.displayName : user.email}
      </Text>
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
      <TouchableOpacity
        style={buttonStyles.grayOutlinedButton}
        onPress={() => navigation.navigate('editProfile')}
      >
        <Text>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
