import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Divider } from '@rneui/base';
import tw from 'twrnc';

import { users } from '../../data/users';

const Story = () => {
  return (
    <View style={tw`mb-4`}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mb-2`}>
        {users.map((user, index) => {
          return (
            <TouchableOpacity style={tw`justify-center items-center ml-3 `} key={index}>
              <Image style={styles.story} source={{ uri: user.image }} />
              <Text style={tw`text-white`}>
                {user.username.length > 6
                  ? user.username.slice(0, 5).toLowerCase() + '...'
                  : user.username.toLowerCase()}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <Divider width={1} orientation="horizontal" color="gray" />
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  story: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
});
