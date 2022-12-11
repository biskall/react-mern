import React from 'react';

import UsersList from '../components/UsersList';
const Users = () => {
  const USERS = [
    {
    id: "u1",
    name: "John Smith",
    image: 'https://media.istockphoto.com/photos/shot-of-a-handsome-young-man-using-his-smartphone-to-send-a-text-picture-id1358205704?b=1&k=20&m=1358205704&s=612x612&w=0&h=kHjEWrYIvZyl8QxxrxrWC2L4Lkq2lcl3Rp9_V_2dIRM=',
    places: 3
  },
  {
    id: "u1",
    name: "John Smith",
    image: 'https://media.istockphoto.com/photos/shot-of-a-handsome-young-man-using-his-smartphone-to-send-a-text-picture-id1358205704?b=1&k=20&m=1358205704&s=612x612&w=0&h=kHjEWrYIvZyl8QxxrxrWC2L4Lkq2lcl3Rp9_V_2dIRM=',
    places: 3
  }
]

  return <UsersList items={USERS}></UsersList>
}

export default Users;