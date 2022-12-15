import { StyleSheet, StatusBar, View, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'twrnc';

import FormikUpload from '../components/post/FormikUpload';
import Header from '../components/home/Header';

const PostScreen = () => {
  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
      <StatusBar barStyle="light-content" />
      <FormikUpload />
    </SafeAreaView>
  );
};

export default PostScreen;

const styles = StyleSheet.create({});
