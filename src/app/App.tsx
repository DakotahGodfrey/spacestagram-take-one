import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MobileHeader, MobileNav } from '../components';
import { Home, Search, Trending } from '../pages';

function App() {
  return (
    <Router>
      <div className='App'>
        <MobileHeader />
        <Route exact path='/' component={Home} />
        <Route exact path='/trending' component={Trending} />
        <Route exact path='/search' component={Search} />
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;
