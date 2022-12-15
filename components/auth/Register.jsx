import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import tw from 'twrnc';

import { Button } from '@rneui/themed';
import { Icon } from '@rneui/base';

import { useNavigation } from '@react-navigation/native';

import { Formik } from 'formik';
import * as yup from 'yup';
import Validator from 'email-validator';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const navigate = useNavigation();

  const registerSchema = yup.object().shape({
    email: yup.string().email().required('An email is required'),
    password: yup.string().required('An password is required').min(8, 'Password must be at least 8 characters'),
    username: yup.string().required('A user name is required').min(2, 'A user name must be at least 2 characters'),
  });

  const handleRegister = async (email, password, username) => {
    try {
      const auth = getAuth();
      const db = getFirestore();
      await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, 'users', auth.currentUser.uid), { email, username });
      console.log('user created');
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={tw`w-full`}>
      <Formik
        initialValues={{ email: '', password: '', username: '' }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          handleRegister(values.email, values.password, values.username);
        }}
        validateOnMount={true}
      >
        {({ handleBlur, handleChange, handleSubmit, values, isValid }) => {
          return (
            <>
              <View>
                <TextInput
                  style={[
                    tw`rounded-lg p-4 mb-3 mx-3 border`,
                    { backgroundColor: '#FAFAFA' },
                    { borderColor: 1 > values.username.length || values.username.length >= 2 ? 'black' : 'red' },
                  ]}
                  placeholder="User name"
                  placeholderTextColor="#444"
                  autoCapitalize="none"
                  keyboardType=""
                  textContentType="emailAddress"
                  autoFocus={true}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
              </View>

              <View>
                <TextInput
                  style={[
                    tw`rounded-lg p-4 mb-3 mx-3 border`,
                    { backgroundColor: '#FAFAFA' },
                    { borderColor: values.email.length < 1 || Validator.validate(values.email) ? 'black' : 'red' },
                  ]}
                  placeholder="Phone number, username or email"
                  placeholderTextColor="#444"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>

              <View>
                <TextInput
                  style={[
                    tw`rounded-lg p-4 mb-1 mx-3 border `,
                    { backgroundColor: '#FAFAFA' },
                    {
                      borderColor: values.password.length >= 1 && values.password.length <= 7 ? 'red' : 'black',
                    },
                  ]}
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

              <Button
                style={tw`mx-8 mt-3`}
                icon={<Icon style={tw`mr-1`} name="form" type="antdesign" size={15} color="white" />}
                title="Register"
                onPress={handleSubmit}
                disabled={!isValid}
              />

              <View style={tw`items-center flex-row justify-center mt-8`}>
                <Text>Already have a account? </Text>
                <TouchableOpacity onPress={() => navigate.navigate('Login')}>
                  <Text style={tw`underline text-blue-800`}>Log in</Text>
                </TouchableOpacity>
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default Register;
