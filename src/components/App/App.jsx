import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Lyric from '../presenters/Lyrics/Lyric';
import Release from '../presenters/Release/Release';
import Artist from '../presenters/Artist/Artist';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/lyrics/:artist/:title" component={Lyric} />
        <Route exact path="/releases/:artist/:releaseTitle/:releaseId/:imageBool" component={Release} />
        <Route exact path="/artists/:artist/:artistId" component={Artist} />
        {/* <Route exact path="/:artist" component={Search} /> */}
      </Switch>
    </Router>
  );
}
  
