import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import tw from 'twrnc';

import { Button } from '@rneui/themed';
import { Icon } from '@rneui/base';

const Login = () => {
  return (
    <View style={tw`w-full`}>
      <View>
        <TextInput
          style={[tw`rounded-lg p-4 mb-3 mx-3 border`, { backgroundColor: '#FAFAFA' }]}
          placeholder="Phone number, username or email"
          placeholderTextColor="#444"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />
      </View>

      <View>
        <TextInput
          style={[tw`rounded-lg p-4 mb-1 mx-3 border `, { backgroundColor: '#FAFAFA' }]}
          placeholder="Please enter your password"
          placeholderTextColor="#444"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
        />
      </View>
      <View style={tw`items-end mb-5 mx-3 `}>
        <Text style={tw`underline text-blue-800`}>Forgot password?</Text>
      </View>

      <Button
        style={tw`mx-10`}
        buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
        icon={<Icon name="login" type="antDesign" size={15} color="white" />}
        title="Log in"
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
