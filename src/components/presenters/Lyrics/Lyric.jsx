import React from 'react'; 
import PropTypes from 'prop-types';
import { useFetchLyrics } from '../../../services/hooks';

const Lyric = ({ match }) => {
  if(!match) return <><p>no song</p></>;
  const artist = match.params.artist;
  const title = match.params.title;

  const body = useFetchLyrics(artist, title);
  
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
    </>
  );
};

Lyric.propTypes = {
  match: PropTypes.object.isRequired
};

export default Lyric;
