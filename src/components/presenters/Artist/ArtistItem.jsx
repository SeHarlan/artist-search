import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArtistItem = ({ artist, artistId, score, country = 'N/A' }) => {

};

ArtistItem.propTypes = {
  artist: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  country: PropTypes.string
};

export default ArtistItem;
