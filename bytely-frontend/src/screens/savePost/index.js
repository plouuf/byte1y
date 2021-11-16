import React, { useState } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

import { Feather } from '@expo/vector-icons';

export default SavePostScreen = (props) => {
  const [description, setDescription] = useState('');
  const [onRequest, setOnRequest] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleSavePost = () => {
    setOnRequest(true);
    dispatch(createPost(props.route.params.source, description)).then(() =>
      navigation
        .dispatch(StackActions.popToTop())
        .catch(() => setOnRequest(false))
    );
  };

  if (onRequest) {
    return (
      <View style={styles.loadingSpinner}>
        <ActivityIndicator color={'#00CED1'} size={'large'} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputText}
          maxLength={150}
          multiline
          onChangeText={(text) => setDescription(text)}
          placeholder="Describe your video"
        />
        <Image
          style={styles.mediaPreview}
          source={{ uri: props.route.params.source }}
        />
      </View>

      <View style={styles.spacer} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.cancelButton}
        >
          <Feather name="x" size={24} color="black" />
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleSavePost()}
          style={styles.postButton}
        >
          <Feather name="upload" size={24} color="white" />
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
