import React from 'react';
import PropTypes from 'prop-types';
import { useFetchSongs } from '../../../services/hooks';
import withList from '../../HOCs/WithList/WithList';
import Song from '../Songs/Song';

const Release = ({ match }) => {
  const { releaseTitle, releaseId, imageBool, artist } = match.params;
  const title = releaseTitle;
  const isThereImage = imageBool === 'true';

  const img = isThereImage ? `http://coverartarchive.org/release/${releaseId}/front` : '/placeholder.png';
  
  const songsData = useFetchSongs(releaseId, artist);
  const Songs = withList(Song);

  return (
    <>
      <h2>{title}</h2>
      <img src={img} alt={title}/>
      <Songs list={songsData}/>
    </>
  );
};

Release.propTypes = {
  match: PropTypes.object.isRequired
};

export default Release;
