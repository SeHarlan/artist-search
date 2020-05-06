import React from 'react';
import { useFetchSongs } from '../../services/hooks';
import withList from '../HOCs/WithList/WithList';
import Song from '../Songs/Song';
import placeholder from '../../assets/placeholder.png';
import { useParams } from 'react-router-dom';
import style from './release.css';

const Release = () => {
  const { releaseTitle, releaseId, artist } = useParams();

  const img = `http://coverartarchive.org/release/${releaseId}/front`;
  const handleImgError = ({ target }) => (target.src = placeholder);
  
  const songsData = useFetchSongs(releaseId, artist);
  const Songs = withList(Song);

  return (
    <section className={style.Release}>
      <h2>{releaseTitle}</h2>
      <img src={img} onError={handleImgError} alt={releaseTitle}/>
      <Songs list={songsData}/>
    </section>
  );
};

export default Release;
