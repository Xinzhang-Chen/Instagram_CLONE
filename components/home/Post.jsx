import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/base';
import { Divider } from '@rneui/base';
import tw from 'twrnc';
import React from 'react';

const Post = ({ post }) => {
  return (
    <View style={tw`mb-4`}>
      <PostHeader userDetail={post.user} />
      <PostImage imageURL={post.imageURL} />
      <PostFooter postDetail={post} />
      <Divider style={tw`mt-3`} orientation="horizontal" color="gray" width={2} />
    </View>
  );
};

const PostHeader = ({ userDetail }) => {
  return (
    <View style={tw`flex-row justify-between items-center mx-3 mb-2`}>
      <View style={tw`flex-row items-center`}>
        <Image style={styles.hearderImage} source={{ uri: userDetail.image }} />
        <Text style={tw`text-white ml-1 font-bold`}>{userDetail.username}</Text>
      </View>
      <TouchableOpacity>
        <Icon name="dots-three-horizontal" type="entypo" color="white" />
      </TouchableOpacity>
    </View>
  );
};

const PostImage = ({ imageURL }) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.imageStyle} source={{ uri: imageURL }} />
    </View>
  );
};

const PostFooter = ({ postDetail }) => {
  return (
    <View style={tw`mx-3 mt-2`}>
      <FooterIcons />
      <View style={tw`mt-3`}>
        <Text style={tw`text-white font-semibold text-sm`}>{postDetail.likes.toLocaleString('en')} Likes</Text>
      </View>
      <Caption userName={postDetail.user.username} caption={postDetail.caption} />
    </View>
  );
};

const FooterIcons = () => {
  return (
    <View style={tw`flex-row justify-between`}>
      <View style={styles.footerIconLeft}>
        <TouchableOpacity>
          <Icon name="heart-o" type="font-awesome" color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="comment-o" type="font-awesome" color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="send-o" type="font-awesome" color="white" />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Icon name="bookmark-o" type="font-awesome" color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Caption = ({ userName, caption }) => {
  return (
    <View>
      <Text>
        <Text style={tw`text-white font-bold mr-2 text-base`}>{userName} </Text>
        <Text style={tw`text-white font-medium`}> {caption}</Text>
      </Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  hearderImage: {
    width: 45,
    height: 45,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#E1306C',
  },
  imageContainer: {
    width: '100%',
    height: 450,
  },
  imageStyle: {
    height: '100%',
    resizeMode: 'cover',
  },
  footerIconLeft: {
    flexDirection: 'row',
    width: '26%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
