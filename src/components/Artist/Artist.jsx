import React from 'react';
import { useFetchReleases } from '../../services/hooks';
import withList from '../HOCs/WithList/WithList';
import ReleaseItem from '../Release/ReleaseItem';
import { useParams } from 'react-router-dom';
import style from './Artist.css';

const Artist = () => {
  const { artist, artistId } = useParams();

  const { releases, pageNum, dec, inc } = useFetchReleases(artistId, artist);
  const Releases = withList(ReleaseItem);
  return (
    <section className={style.Artist}>
      <h1>{artist}</h1>
      <nav>
        <button disabled={pageNum === 1} onClick={dec}>Previous Page</button>
        <button disabled={releases.length < 20} onClick={inc}>Next Page</button>
      </nav>
      {releases.length ? <Releases list={releases} /> : <h2>Sorry, No Releases Found</h2>}
    </section>
  );
};

export default Artist;
