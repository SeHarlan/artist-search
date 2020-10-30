import React from 'react';
import { useParams } from 'react-router-dom';
import withList from '../HOCs/WithList/WithList';
import ArtistItem from '../Artist/ArtistItem';
import { useFetchArtists, useFormData } from '../../services/hooks';
import style from './Search.css';

const Search = () => {
  const { artist } = useParams();

  const Artists = withList(ArtistItem);
  const { artists, pageNum, dec, inc, noResults } = useFetchArtists(artist);
  const { text, handleInputChange, handleSubmit } = useFormData();

  return (
    <section className={style.Search}>
      <h1>Search By Artist Name</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} value={text}/>
        <button type="submit">Search</button>
      </form>
      <nav>
        <button disabled={pageNum === 1} onClick={dec}>Previous Page</button>
        <button disabled={artists.length < 5} onClick={inc}>Next Page</button>
      </nav>
      {noResults ? <h2>{noResults}</h2> : <Artists list={artists} />}
    </section>
  );
};

export default Search;
