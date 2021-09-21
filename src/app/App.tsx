import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAppSelector } from '.';
import { MobileHeader, MobileNav } from '../components';
import { Home, PostDetails, Search, Settings } from '../pages';
import { selectSettings } from './slices/settings';

function App() {
  const settingsSlice = useAppSelector(selectSettings);
  const { darkModeSetting } = settingsSlice;
  return (
    <Router>
      <div className={darkModeSetting ? 'App-Dark' : 'App'}>
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
