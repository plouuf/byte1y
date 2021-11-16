import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CameraScreen from '../../screens/camera';
import ProfileScreen from '../../screens/profile';

import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => <View />;

export default HomeScreen = () => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: 'black' }}
      initialRouteName="feed2"
    >
      <Tab.Screen
        name="Home"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name=" "
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="plus-square" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message-minus-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
