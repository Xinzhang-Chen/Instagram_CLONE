import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import React from 'react';
import tw from 'twrnc';
import { Divider } from '@rneui/base';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, query, onSnapshot, where, limit, getDocs, doc } from 'firebase/firestore';

const BottomTabs = () => {
  const [selectedTab, setSelectedTab] = React.useState('Home');
  const [currentUser, setCurrentUser] = React.useState(null);

  const getUserInfo = async () => {
    const auth = getAuth();
    const db = getFirestore();
    const user = auth.currentUser;
    try {
      onSnapshot(
        doc(db, 'users', `${auth.currentUser.uid}`),
        (target) => {
          setCurrentUser({
            username: target.data().username,
            image: target.data().image,
          });
        },
        () => {
          console.log('error');
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    getUserInfo();
  }, []);

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
          <Image
            style={[{ height: 30, width: 30 }, tw`border-2 border-red-500`]}
            source={{ uri: currentUser?.image }}
          />
          {/* <Icon
            size={30}
            name={`${selectedTab === 'User' ? 'person' : 'person-outline'}`}
            type="ionicon"
            color="white"
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
