import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Icon } from '@rneui/themed';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';

const Header = () => {
  const navigate = useNavigation();

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await auth.signOut();
      console.log('sign out successful');
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={tw`flex flex-row justify-between items-center mx-5 mb-1`}>
      <View>
        <TouchableOpacity onPress={handleSignOut}>
          <Image style={styles.logoStyle} source={require('../../assets/header-logo.png')} />
        </TouchableOpacity>
      </View>
      <View style={tw`flex flex-row `}>
        <TouchableOpacity onPress={() => navigate.navigate('Post')}>
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
