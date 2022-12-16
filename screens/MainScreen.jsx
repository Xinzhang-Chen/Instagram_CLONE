import { View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import defaultStyle from '../styles/index';
import Header from '../components/home/Header';
import Story from '../components/home/Story';
import Post from '../components/home/Post';
import BottomTabs from '../components/home/BottomTabs';
import { Divider } from '@rneui/base';

import { posts } from '../data/posts';

import { getFirestore, collectionGroup, onSnapshot } from 'firebase/firestore';

const MainScreen = () => {
  const [userPosts, setUserPosts] = React.useState([]);

  React.useEffect(() => {
    try {
      const db = getFirestore();
      const data = collectionGroup(db, 'posts');
      onSnapshot(
        data,
        (snapshot) => {
          setUserPosts(snapshot.docs.reverse().map((doc) => doc.data()));
        },
        () => {
          console.log('disable snapshot');
        }
      );
    } catch (error) {
      console.log('disable snapshot');
    }
  }, []);

  return (
    <SafeAreaView style={[defaultStyle.AndroidSafeArea, tw`bg-black`]}>
      <StatusBar barStyle="light-content" />
      <View>
        <Header />
        <Story />
        <ScrollView bounces={true} contentContainerStyle={{ paddingBottom: 235 }}>
          {posts.map((post, index) => {
            if (index === posts.length - 1) {
              return (
                <View key={`post-${index}`}>
                  <Post post={post} />
                </View>
              );
            } else {
              return (
                <View key={`post-${index}`}>
                  <Post post={post} />
                  <Divider style={tw`mt-3 mb-4`} orientation="horizontal" color="gray" width={2} />
                </View>
              );
            }
          })}

          {userPosts.length !== 0 && <Divider style={tw`mt-3 mb-4`} orientation="horizontal" color="gray" width={2} />}

          {userPosts.map((post, index) => {
            if (index === userPosts.length - 1) {
              return (
                <View key={`post-${index}`}>
                  <Post post={post} />
                </View>
              );
            } else {
              return (
                <View key={`post-${index}`}>
                  <Post post={post} />
                  <Divider style={tw`mt-3 mb-4`} orientation="horizontal" color="gray" width={2} />
                </View>
              );
            }
          })}
        </ScrollView>
      </View>
      <BottomTabs />
    </SafeAreaView>
  );
};

export default MainScreen;
