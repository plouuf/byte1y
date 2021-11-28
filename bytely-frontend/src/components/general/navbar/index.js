import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default NavbarGeneral = ({
  title = 'NavbarGeneral',
  rightButton = { display: false },
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left" size={26} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {rightButton.display ? (
        <TouchableOpacity style={styles.button}>
          <Feather
            name="arrow-left"
            size={26}
          />
        </TouchableOpacity>
      ) : (
          <View style={{flex: 1/3}} />
      )}
    </View>
  );
};
