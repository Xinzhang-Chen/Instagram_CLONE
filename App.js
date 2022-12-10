import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from './screens/auth/LandingScreen';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Landing">
        <stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        <stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
