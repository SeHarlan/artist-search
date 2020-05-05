import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ReleaseItem = ({ releaseTitle, releaseId, imageBool, artist }) => {

  const image = imageBool ? `http://coverartarchive.org/release/${releaseId}/front` : '/placeholder.png';
  return (
    <Link to={`/releases/${artist}/${releaseTitle}/${releaseId}/${imageBool}`} >
      <h2>{releaseTitle}</h2>
      <img src={image} alt={releaseTitle} />
    </Link>
  );
};


ReleaseItem.propTypes = { 
  releaseTitle: PropTypes.string.isRequired, 
  releaseId: PropTypes.string.isRequired, 
  imageBool: PropTypes.bool.isRequired, 
  artist:PropTypes.string.isRequired
};

export default ReleaseItem;
