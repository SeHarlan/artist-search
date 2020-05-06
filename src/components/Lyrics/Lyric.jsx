import React from 'react'; 
import { useFetchLyrics } from '../../services/hooks';
import { useParams } from 'react-router-dom';
import style from './lyric.css';

const Lyric = () => {
  const { artist, title } = useParams();

  const body = useFetchLyrics(artist, title);
  
  return (
    <section className={style.lyric}>
      <h2>{title}</h2>
      <p>{body ? body : 'Sorry, No Lyrics Found'}</p>
    </section>
  );
};


export default Lyric;
