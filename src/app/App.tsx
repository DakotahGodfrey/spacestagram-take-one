import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MobileHeader, MobileNav } from '../components';
import { Home, PostDetails, Search } from '../pages';

function App() {
  return (
    <Router>
      <div className='App'>
        <MobileHeader />
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/post/:date' component={PostDetails} />
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;
