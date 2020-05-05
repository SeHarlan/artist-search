import React from 'react';
import PropTypes from 'prop-types';
import { useFetchSongs } from '../../../services/hooks';
import withList from '../../HOCs/WithList/WithList';
import Song from '../Songs/Song';

const Release = ({ match }) => {
  const { releaseTitle, releaseId, artist } = match.params;

  const img = `http://coverartarchive.org/release/${releaseId}/front`;
  const handleImgError = ({ target }) => (target.src = '/placeholder.png');
  
  const songsData = useFetchSongs(releaseId, artist);
  const Songs = withList(Song);

  return (
    <>
      <h2>{releaseTitle}</h2>
      <img src={img} onError={handleImgError} alt={releaseTitle}/>
      <Songs list={songsData}/>
    </>
  );
};

Release.propTypes = {
  match: PropTypes.object.isRequired
};

export default Release;
