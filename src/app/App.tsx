import React from 'react';
import { MobileHeader, MobileNav, Feed } from '../components';

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
function App() {
  return (
    <div className='App'>
      <MobileHeader />
      <main>
        <Feed posts={postArr} />
      </main>
      <MobileNav />
    </div>
  );
}

export default App;
