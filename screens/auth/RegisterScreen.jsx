import React from 'react';
import tw from 'twrnc';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

import { View, TextInput, SafeAreaView, Button } from 'react-native';

import { useDispatch } from 'react-redux';

import { fetchUserInfo } from '../../Redux/slices/userSlice';

const RegisterScreen = () => {
  // States to track the user input
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  const dispatch = useDispatch();

  const handleSignUp = () => {
    const auth = getAuth();
    const db = getFirestore();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        await setDoc(doc(db, 'users', auth.currentUser.uid), { name, email });
        dispatch(fetchUserInfo());
      })
      .catch((error) => console.error(error));
  };

  return (
    <SafeAreaView style={tw` flex-1`}>
      <View style={tw`p-10`}>
        <TextInput
          placeholder="please enter your email"
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
        <TextInput
          placeholder="please enter your password"
          secureTextEntry={true}
          onChangeText={(password) => {
            setPassword(password);
          }}
        />
        <TextInput
          placeholder="please enter your name"
          onChangeText={(name) => {
            setName(name);
          }}
        />

        <Button title="Sign up" onPress={handleSignUp} />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
