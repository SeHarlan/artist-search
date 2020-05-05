import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFetchReleases } from '../../../services/hooks';
import withList from '../../HOCs/WithList/WithList';
import ReleaseItem from '../Release/ReleaseItem';

const Artist = ({ match }) => {
  const [pageNum, setPageNum] = useState(1);

  const { artist, artistId } = match.params;

  const dec = () => setPageNum(prev => prev - 1);
  const inc = () => setPageNum(prev => prev + 1);

  const releasesData = useFetchReleases(artistId, pageNum, artist);
  const Releases = withList(ReleaseItem);
  return (
    <>
      <h1>{artist}</h1>
      <button disabled={pageNum === 1} onClick={dec}>Previous Page</button>
      <button disabled={releasesData.length < 20} onClick={inc}>Next Page</button>
      <Releases list={releasesData} />
    </>
  );
};

Artist.propTypes = {
  match: PropTypes.object.isRequired
};

export default Artist;
