import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
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

import LandingScreen from './screens/auth/LandingScreen';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

export default function App() {
  const [loaded, setLoaded] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const stack = createNativeStackNavigator();

  React.useEffect(() => {
    setLoaded(true);
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setLogin(false);
      } else {
        setLogin(true);
      }
    });
  }, []);

  if (!loaded) {
    return (
      <SafeAreaView style={tw`flex-1 justify-center`}>
        <ActivityIndicator color="#0000ff" size="large" />
      </SafeAreaView>
    );
  }

  if (login) {
    return (
      <NavigationContainer>
        <stack.Navigator initialRouteName="Landing">
          <stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
          <stack.Screen name="Login" component={LoginScreen} />
          <stack.Screen name="Register" component={RegisterScreen} />
        </stack.Navigator>
      </NavigationContainer>
    );
  }

  // return (
  //   <SafeAreaView style={tw`flex-1 justify-center`}>
  //     <ActivityIndicator color="#f20" size="large" />
  //   </SafeAreaView>
  // );
}
