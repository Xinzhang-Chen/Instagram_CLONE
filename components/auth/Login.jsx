import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';

import { Button } from '@rneui/themed';
import { Icon } from '@rneui/base';

import { useNavigation } from '@react-navigation/native';

import { Formik } from 'formik';
import * as yup from 'yup';
import Validator from 'email-validator';

const Login = () => {
  const navigate = useNavigation();

  const loginSchema = yup.object().shape({
    email: yup.string().email().required('An email is required'),
    password: yup.string().required('An password is required').min(8, 'Password must be at least 8 characters'),
  });

  return (
    <View style={tw`w-full`}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
        validateOnMount={true}
      >
        {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => {
          return (
            <>
              <View>
                <TextInput
                  style={[tw`rounded-lg p-4 mb-3 mx-3 border`, { backgroundColor: '#FAFAFA' }]}
                  placeholder="Phone number, username or email"
                  placeholderTextColor="#444"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoFocus={true}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
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
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>
              <TouchableOpacity style={tw`items-end mb-5 mx-3 `}>
                <Text style={tw`underline text-blue-800`}>Forgot password?</Text>
              </TouchableOpacity>

              <Button
                style={tw`mx-8`}
                buttonStyle={{ backgroundColor: '#198754' }}
                icon={<Icon style={tw`mr-1`} name="login" type="antDesign" size={15} color="white" />}
                title="Log in"
                onPress={handleSubmit}
              />
              <View style={tw`items-center flex-row justify-center mt-8`}>
                <Text>Don't have a account? </Text>
                <TouchableOpacity onPress={() => navigate.navigate('Register')}>
                  <Text style={tw`underline text-blue-800`}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
