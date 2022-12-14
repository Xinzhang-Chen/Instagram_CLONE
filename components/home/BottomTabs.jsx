import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import React from 'react';
import tw from 'twrnc';
import { Divider } from '@rneui/base';

const BottomTabs = () => {
  const [selectedTab, setSelectedTab] = React.useState('Home');

  return (
    <View style={[tw`bg-black w-full`, { position: 'absolute', bottom: 0, left: 0, height: '13%' }]}>
      <Divider orientation="horizontal" color="gray" width={1} />
      <View style={tw`flex-row justify-around pt-3`}>
        <TouchableOpacity onPress={() => setSelectedTab('Home')}>
          <Icon
            size={30}
            name={`${selectedTab === 'Home' ? 'ios-home' : 'ios-home-outline'}`}
            type="ionicon"
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedTab('Search')}>
          <Icon
            size={30}
            name={`${selectedTab === 'Search' ? 'ios-search' : 'ios-search-outline'}`}
            type="ionicon"
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedTab('Video')}>
          <Icon
            size={30}
            name={`${selectedTab === 'Video' ? 'ios-videocam' : 'ios-videocam-outline'}`}
            type="ionicon"
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedTab('Shopping')}>
          <Icon
            size={30}
            name={`${selectedTab === 'Shopping' ? 'shopping' : 'shopping-outline'}`}
            type="material-community"
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedTab('User')}>
          <Icon
            size={30}
            name={`${selectedTab === 'User' ? 'person' : 'person-outline'}`}
            type="ionicon"
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
