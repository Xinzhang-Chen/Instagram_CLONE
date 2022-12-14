import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import React from 'react';
import tw from 'twrnc';

const Header = () => {
  return (
    <View style={tw`flex flex-row justify-between items-center mx-5 mb-1`}>
      <View>
        <TouchableOpacity>
          <Image style={styles.logoStyle} source={require('../../assets/header-logo.png')} />
        </TouchableOpacity>
      </View>
      <View style={tw`flex flex-row `}>
        <TouchableOpacity>
          <Icon style={styles.iconStyle} name="plussquareo" type="antdesign" color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon style={styles.iconStyle} name="hearto" type="antdesign" color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[tw`bg-red-500 rounded-full absolute justify-center`, styles.unreadStyle]}>
            <Text style={tw`text-white`}>12</Text>
          </View>
          <Icon style={styles.iconStyle} name="message1" type="antdesign" color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  logoStyle: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  unreadStyle: {
    left: 20,
    bottom: 23,
    width: 25,
    height: 18,
    alignItems: 'center',
    zIndex: 10,
  },
});
