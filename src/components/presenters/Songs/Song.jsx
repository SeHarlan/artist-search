import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Song = ({ title, artist }) => (
  <Link to={`/lyrics/${artist}/${title}`}>
    {title}
  </Link>
);

Song.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
};

export default Song;
