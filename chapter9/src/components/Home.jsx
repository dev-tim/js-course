import React from 'react';
import LectionList from './LectionList';

const formatName = user => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const Home = () => {
     return  (
        <div>
          <h1>Hello, {formatName(user)}!</h1>
          <LectionList items={[]} />
        </div>
      )
}


export default Home;