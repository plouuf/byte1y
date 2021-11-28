import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavbarGeneral from '../../../components/general/navbar';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { saveUserProfileImage } from '../../../services/user';

export default EditProfileScreen = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const chooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      saveUserProfileImage(result.uri);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <NavbarGeneral />
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.imageViewContainer}
          onPress={() => chooseImage()}
        >
          <Image style={styles.image} source={{ uri: currentUser.photoURL }} />
          <View style={styles.imageOverlay} />
          <Feather name="camera" color="white" size={26} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
