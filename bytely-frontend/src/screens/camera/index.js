import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Audio } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import * as VideoThumbnails from 'expo-video-thumbnails';
import { useIsFocused } from '@react-navigation/core';
import styles from './styles';

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default CameraScreen = () => {
  const [hasCameraPermissions, setHasCameraPermissions] = useState(false);
  const [hasAudioPermissions, setHasAudioPermissions] = useState(false);
  const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false);
  const [galleryItems, setGalleryItems] = useState([]);
  const [cameraRef, setCameraRef] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [cameraFlash, setCameraFlash] = useState(
    Camera.Constants.FlashMode.off
  );
  const [isCameraReady, setIsCameraReady] = useState(false);

  const isFocused = useIsFocused();

  const navigation = useNavigation();

  useEffect(() => {
    const getPermissions = async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermissions(cameraStatus.status === 'granted');
      const audioStatus = await Audio.requestPermissionsAsync();
      setHasAudioPermissions(audioStatus.status === 'granted');
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermissions(galleryStatus.status === 'granted');

      if (galleryStatus.status == 'granted') {
        const userGalleryMedia = await MediaLibrary.getAssetsAsync({
          sortBy: ['creationTime'],
          mediaType: ['video'],
        });
        setGalleryItems(userGalleryMedia.assets);
      }
    };
    getPermissions();
  }, []);

  const recordVideo = async () => {
    if (cameraRef) {
      try {
        const options = {
          maxDuration: 60,
          quality: Camera.Constants.VideoQuality['480'],
        };
        const videoRecordPromise = cameraRef.recordAsync(options);

        if (videoRecordPromise) {
          const data = await videoRecordPromise;
          const source = data.uri;
          let thumbnail = await generateThumbnail(source)
          navigation.navigate('savePost', { source, thumbnail });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const stopRecordVideo = async () => {
    if (cameraRef) {
      cameraRef.stopRecording();
    }
  };

  const pickFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    if (!result.cancelled) {
      let thumbnail = await generateThumbnail(result.uri)
      navigation.navigate('savePost', { source: result.uri, thumbnail });
    }
  };

  const generateThumbnail = async (source) => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(
        source,
        {
          time: 2000,
        }
      );
      return uri;
    } catch (e) {
      console.warn(e);
    }
  };

  if (!hasCameraPermissions || !hasAudioPermissions || !hasGalleryPermissions) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      {isFocused ? (
        <Camera
          ref={(ref) => setCameraRef(ref)}
          style={styles.camera}
          ratio={'16:9'}
          type={cameraType}
          flashMode={cameraFlash}
          onCameraReady={() => setIsCameraReady(true)}
        />
      ) : null}

      <View style={styles.sideBarContainer}>
        <TouchableOpacity
          style={styles.sideBarButton}
          onPress={() =>
            setCameraType(
              cameraType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            )
          }
        >
          <Feather name="refresh-cw" size={24} color={'white'} />
          <Text style={styles.iconText}>Flip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sideBarButton}
          onPress={() =>
            setCameraFlash(
              cameraFlash === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.torch
                : Camera.Constants.FlashMode.off
            )
          }
        >
          {cameraFlash === Camera.Constants.FlashMode.off ? (
            <Ionicons name="ios-flash" size={24} color={'white'} />
          ) : (
            <Ionicons name="ios-flash-off" size={24} color={'white'} />
          )}
          <Text style={styles.iconText}>Flash</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomBarContainer}>
        <View style={{ flex: 1 }}></View>

        <View style={styles.recordButtonContainer}>
          <TouchableOpacity
            disabled={!isCameraReady}
            onLongPress={() => recordVideo()}
            onPressOut={() => stopRecordVideo()}
            style={styles.recordButton}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.galleryButton}
            onPress={() => pickFromGallery()}
          >
            {galleryItems[0] == undefined ? (
              <View />
            ) : (
              <Image
                source={{ uri: galleryItems[0].uri }}
                style={styles.galleryButtonImage}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
