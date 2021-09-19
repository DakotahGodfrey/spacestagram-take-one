import React from 'react';
import { ReactionBar } from '.';
import Placeholder from '../images/apod.jpeg';
const Post = () => {
  return (
    <div className='post'>
      <figure>
        <img src={Placeholder} alt='placeholder post' />
      </figure>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        quibusdam rerum saepe asperiores id.
      </p>
      <ReactionBar />
    </div>
  );
};

export default Post;
