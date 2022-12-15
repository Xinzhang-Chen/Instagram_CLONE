import { StyleSheet, StatusBar, Image, View, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Register from '../components/auth/Register';

const RegisterScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white px-2 items-center`}>
      <StatusBar barStyle="dark-content" />
      <View style={tw`mt-10 mb-4`}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3456/3456426.png',
            width: 150,
            height: 150,
          }}
        />
      </View>
      <Register />
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
