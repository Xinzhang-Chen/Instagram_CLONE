import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import defaultStyle from '../styles/index';
import Header from '../components/home/Header';
import Story from '../components/home/Story';
import Post from '../components/home/Post';

import { posts } from '../data/posts';

const MainScreen = () => {
  return (
    <SafeAreaView style={[defaultStyle.AndroidSafeArea, tw`bg-black`]}>
      <View>
        <Header />
        <Story />
        <ScrollView bounces={false} contentContainerStyle={{ paddingBottom: 130 }}>
          {posts.map((post, index) => {
            return (
              <View key={`post-${index}`}>
                <Post post={post} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
