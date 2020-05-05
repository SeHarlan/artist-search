import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import placeholder from '../../../assets/placeholder.png';


const ReleaseItem = ({ releaseTitle, releaseId, artist }) => {

  const img = `http://coverartarchive.org/release/${releaseId}/front`;
  const handleImgError = ({ target }) => (target.src = placeholder);

  return (
    <Link to={`/releases/${artist}/${releaseTitle}/${releaseId}`} >
      <h2>{releaseTitle}</h2>
      <img src={img} onError={handleImgError} alt={releaseTitle} />
    </Link>
  );
};


ReleaseItem.propTypes = { 
  releaseTitle: PropTypes.string.isRequired, 
  releaseId: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired,
  artist:PropTypes.string.isRequired
};

export default ReleaseItem;
