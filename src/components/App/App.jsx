import React from 'react';
import Lyric from '../presenters/Lyrics/Lyric';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/lyrics/:artist/:title" component={Lyric} />
      </Switch>
    </Router>
  );
}
  
