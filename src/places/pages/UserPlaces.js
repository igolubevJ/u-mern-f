import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scraers in the world!',
    imageUrl: 'https://tk.media/storage/uploads/articles/2/2509-article20191019231022.jpeg',
    address: '20 W 34th St, New York, NY 10001, Соединенные Штаты',
    location: {
      lat: 40.7484405,
      lng: -73.9878531
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scraers in the world!',
    imageUrl: 'https://tk.media/storage/uploads/articles/2/2509-article20191019231022.jpeg',
    address: '20 W 34th St, New York, NY 10001, Соединенные Штаты',
    location: {
      lat: 40.7484405,
      lng: -73.9878531
    },
    creator: 'u2'
  },
];

const UserPlaces = () => {
  return <PlaceList items={ DUMMY_PLACES } />;
};

export default UserPlaces;
