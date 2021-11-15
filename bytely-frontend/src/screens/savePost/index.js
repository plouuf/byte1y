import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

import { Feather } from '@expo/vector-icons';

export default SavePostScreen = (props) => {
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

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

      <View style={styles.spacer}/>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.cancelButton}
        >
          <Feather name="x" size={24} color="black" />
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.postButton}
        >
          <Feather name="upload" size={24} color="white" />
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
