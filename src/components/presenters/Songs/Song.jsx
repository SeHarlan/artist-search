import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Lyric from '../Lyrics/Lyric';

const Song = ({ title, artist }) => {

  return (
    <Link to={`/lyrics/${artist}/${title}`} component={Lyric}>
      <p>{title}</p>
    </Link>
  );
};


Song.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
};

export default Song;
