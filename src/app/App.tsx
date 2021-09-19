import React from 'react';
import { MobileHeader, MobileNav, Post } from '../components';

function App() {
  return (
    <div className='App'>
      <MobileHeader />
      <main>
        <Post />
      </main>
      <MobileNav />
    </div>
  );
}

export default App;
