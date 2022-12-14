import { View, Button } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const navigate = useNavigation();

  return (
    <View style={tw`flex-1 justify-center`}>
      <Button title="Login" onPress={() => navigate.navigate('Login')} />
      <Button title="Register" onPress={() => navigate.navigate('Register')} />
    </View>
  );
};

export default LandingScreen;
