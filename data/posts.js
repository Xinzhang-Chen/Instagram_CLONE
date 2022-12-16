import { users } from './users';

export const posts = [
  {
    imageURL:
      'https://media.istockphoto.com/id/535455441/photo/view-of-sydney-harbour-australia.jpg?s=612x612&w=0&k=20&c=o7qSiUvYzMp94lYYb7R1ZUAMcEG54byX0bU3UY1z2sQ=',
    user: users[0],
    likes: 1688,
    caption: 'Welcome to Sydney👋. Hope you have a wonderful trip 🚀!',
    profileImage: users[0].image,
    comments: [
      {
        user: users[1].username,
        comments: 'Nice image',
      },
    ],
  },
  {
    imageURL:
      'https://images.unsplash.com/photo-1566618501422-c23b8983e256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaCUyMHF1YWxpdHl8ZW58MHx8MHx8&w=1000&q=80',

    user: users[1],
    likes: 10,
    caption: 'Welcome to Sydney',
    profileImage: users[1].image,
    comments: [
      {
        user: users[2].username,
        comments: 'Awsome post',
      },
      {
        user: users[3].username,
        comments: ' Nice building Nice building Nice building Nice building Nice building Nice building',
      },
    ],
  },
  {
    imageURL:
      'https://images.unsplash.com/photo-1565843122968-1ce0e44e865f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80',

    user: users[3],
    likes: 8000,
    caption: 'Welcome to Sydney',
    profileImage: users[1].image,
    comments: [],
  },
];
