import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId } from '@env';

import tw from 'twrnc';

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// import LandingScreen from './screens/auth/LandingScreen';
// import LoginScreen from './screens/auth/LoginScreen';
// import RegisterScreen from './screens/auth/RegisterScreen';
import MainScreen from './screens/MainScreen';
import PostScreen from './screens/PostScreen';
import LoginScreen from './screens/LoginScreen';

import { Provider } from 'react-redux';

import { store } from './Redux/store';

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Login">
        <stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <stack.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
        <stack.Screen
          name="Post"
          component={PostScreen}
          options={{
            title: 'Share your thoughts💡',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
