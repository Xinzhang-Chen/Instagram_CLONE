import { users } from './users';

export const posts = [
  {
    imageURL:
      'https://media.istockphoto.com/id/535455441/photo/view-of-sydney-harbour-australia.jpg?s=612x612&w=0&k=20&c=o7qSiUvYzMp94lYYb7R1ZUAMcEG54byX0bU3UY1z2sQ=',
    user: users[0],
    likes: 1688,
    caption: 'Welcome to Sydney👋. Hope you have a wonderful trip 🚀!',
    profileImage: users[0].image,
    Comment: [
      {
        user: users[1].username,
        comment: 'Nice image',
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
    Comment: [
      {
        user: users[2].username,
        comment: 'Awsome post',
      },
    ],
  },
];
