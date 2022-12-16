import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import React from 'react';
import tw from 'twrnc';

import { getAuth } from 'firebase/auth';
import { getFirestore, addDoc, getDocs, doc, collection, where, limit, query } from 'firebase/firestore';

import * as yup from 'yup';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import validUrl from 'valid-url';

const FormikUpload = () => {
  const uploadPostSchema = yup.object().shape({
    imageURL: yup.string().url().required('A image URL is required'),
    caption: yup.string().max(2200, 'Caption has reached the maximum characters limit'),
  });

  const defaultImage = 'https://t3.ftcdn.net/jpg/02/70/22/86/360_F_270228625_yujevz1E4E45qE1mJe3DyyLPZDmLv4Uj.jpg';

  const [image, setImage] = React.useState('');
  const navigate = useNavigation();

  const [currentUser, setCurrentUser] = React.useState(null);

  const getUserInfo = async () => {
    try {
      const auth = getAuth();
      const db = getFirestore();
      const user = auth.currentUser;
      const unsubscribe = await getDocs(query(collection(db, 'users'), where('ownerId', '==', user.uid), limit(1)));
      unsubscribe.forEach((doc) => {
        setCurrentUser({
          username: doc.data().username,
          image: doc.data().image,
        });
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  React.useEffect(() => {
    getUserInfo();
  }, []);

  const uploadPost = async (imageURL, caption) => {
    const auth = getAuth();
    const db = getFirestore();
    addDoc(collection(db, 'users', `${auth.currentUser.uid}`, 'posts'), {
      imageURL,
      user: currentUser,
      caption,
      likes: 0,
      likesByUser: [],
      comments: [],
    })
      .then(() => navigate.navigate('Home'))
      .catch(() => console.log('error'));
  };

  return (
    <View>
      <Formik
        initialValues={{ imageURL: '', caption: '' }}
        onSubmit={(values) => {
          uploadPost(values.imageURL, values.caption);
        }}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit, isValid }) => {
          return (
            <View>
              <View style={tw`flex-row mx-2`}>
                <Image
                  source={{ uri: validUrl.isUri(image) ? image : defaultImage }}
                  style={{ width: 100, height: 100 }}
                />
                <TextInput
                  style={[tw`text-white ml-1 p-2`, { borderWidth: 1, borderColor: 'white', width: '70%' }]}
                  placeholder="Write a caption"
                  placeholderTextColor="gray"
                  multiline={true}
                  onChangeText={handleChange('caption')}
                  onBlur={handleBlur('caption')}
                  value={values.caption}
                />
              </View>
              <View style={tw`mt-2`}>
                <TextInput
                  onChange={(event) => setImage(event.nativeEvent.text)}
                  style={[tw`text-white mx-2 p-2`, { borderWidth: 1, borderColor: 'white', height: 30 }]}
                  placeholder="Paste a image URL"
                  placeholderTextColor="gray"
                  onChangeText={handleChange('imageURL')}
                  onBlur={handleBlur('imageURL')}
                  value={values.imageURL}
                />
                {errors.imageURL && <Text style={[{ fontSize: 13, color: 'red' }, tw`mx-2`]}>{errors.imageURL}</Text>}
                <Button
                  title="Share"
                  onPress={() => {
                    handleSubmit();
                    navigate.goBack();
                  }}
                  disabled={!isValid}
                />
              </View>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default FormikUpload;
