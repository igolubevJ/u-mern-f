import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    { 
      id: 'u1',
      name: 'John Doe',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3rrr58HrON4U10CMC2tXrpmfQE8OhpIa76Zgn0GHdHFqU6u-&s',
      places: 3
    }
  ];

  return <UsersList items={ USERS } />
}

export default Users;
