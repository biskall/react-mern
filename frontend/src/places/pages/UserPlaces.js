import React from 'react';
import {useParams} from 'react-router-dom'


import PlaceList from '../components/PlaceList';
const DUMMY_PLACES = [
    {
    id: 'p1',
    title : 'Empire State Building',
    description :'One of the most famous sky scrapers in the world!',
    imageUrl : 'https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg',
    address: '20 W 34th St., New York, NY 10001, United States',
    location:{ 
        lat: 40.7484405,
        lng: -74.0031739
    },
    creator: 'u1'
},
{
    id: 'p2',
    title : 'Emp. State Building',
    description :'One of the most famous sky scrapers in the world!',
    imageUrl : 'https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg',
    address: '20 W 34th St., New York, NY 10001, United States',
    location:{ 
        lat: 40.7484405,
        lng: -74.0031739
    },
    creator: 'u2'
}
]

const UserPlaces = () => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces;