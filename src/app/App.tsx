import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MobileHeader, MobileNav } from '../components';
import { Home } from '../pages';

function App() {
  return (
    <Router>
      <div className='App'>
        <MobileHeader />
        <Route exact path='/' component={Home} />
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;
