import React from 'react';
import { Feed } from '../components';

const postArr = [
  {
    imageSrc: 'https://source.unsplash.com/1600x900/?space',
    caption: '',
  },
  {
    imageSrc: 'https://source.unsplash.com/1600x900/?space',
    caption: '',
  },
  {
    imageSrc: 'https://source.unsplash.com/1600x900/?space',
    caption: '',
  },
];

const Home = () => {
  return (
    <main>
      <Feed posts={postArr} />
    </main>
  );
};

export default Home;
