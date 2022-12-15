import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../screens/MainScreen';
import PostScreen from '../screens/PostScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const stack = createNativeStackNavigator();

const postScreenStyle = {
  title: 'Share your thoughts💡',
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
};

export const SignInStack = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
        <stack.Screen name="Post" component={PostScreen} options={postScreenStyle} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export const SignOutStack = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Login">
        <stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  );
};
