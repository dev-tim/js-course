import React from 'react';
import LectionList from './LectionList';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

function generateLectures(numberOfLectures = 0){
  return (Array.from(Array(numberOfLectures).keys())).map((nullItem, index) => {
      return {
        id: index,
        lection: 'Test lection ' + index + Date.now(),
        video: "https://www.youtube.com/watch?v=WEkSYw3o5is",
        homework: "test homework test homework test homework test homework test homework test homework" + Date.now()
      }
  })
}

let itemsArray = generateLectures(10);

const Home = () => (
  <div>
    <h1>Hello, {formatName(user)}!</h1>
    <LectionList items={itemsArray} />
  </div>
)


export default Home;