import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MobileHeader, MobileNav } from '../components';
import { Home, PostDetails, Search, Settings } from '../pages';

function App() {
  return (
    <Router>
      <div className='App'>
        <MobileHeader />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Search} />
          <Route path={'/post/:date'} component={PostDetails} />
          <Route path={'/settings'} component={Settings} />
        </Switch>
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;
