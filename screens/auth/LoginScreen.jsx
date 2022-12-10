import React from 'react';
import tw from 'twrnc';
import { TextInput, View, SafeAreaView, Button } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
  // States to track the user input
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result))
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

        <Button title="Sign in" onPress={handleSignIn} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
