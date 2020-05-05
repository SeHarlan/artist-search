import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ match }) => {
  const { artist } = match.params;

  return (
    <h1>Search stuff</h1>
  );
};

Search.propTypes = {
  match: PropTypes.object.isRequired
};

export default Search;
