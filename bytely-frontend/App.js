import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducers';

import Constants from 'expo-constants';
import firebase from 'firebase/app';

import Route from './src/navigation/main'

const store = createStore(rootReducer, applyMiddleware(thunk));

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase);
}

export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
