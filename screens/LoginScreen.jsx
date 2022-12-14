import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Login from '../components/auth/Login';

const LoginScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white px-2 items-center`}>
      <View style={tw`mt-10 mb-3`}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1384/1384886.png',
            width: 150,
            height: 150,
          }}
        />
      </View>
      <Login />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
