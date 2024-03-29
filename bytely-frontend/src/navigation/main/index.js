import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { userAuthStateListener } from '../../redux/actions';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../../screens/auth';
import HomeScreen from '../home';
import SavePostScreen from '../../screens/savePost';
import EditProfileScreen from '../../screens/profile/edit'

const Stack = createStackNavigator();

export default Route = () => {
  const currentUserObj = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAuthStateListener());
  }, []);

  if (!currentUserObj.loaded) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {currentUserObj.currentUser === null ? (
          <Stack.Screen
            name="auth"
            component={AuthScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="savePost"
              component={SavePostScreen}
              options={{ headerShown: false }}
              />
              
              <Stack.Screen
              name="editProfile"
              component={EditProfileScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
