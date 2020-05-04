import React from 'react';
import PropTypes from 'prop-types';

const withList = (ItemComponent, list) => {
  function WithListHOC() {
    const listItems = list.map(item => (
      <li key={item.id}>
        <ItemComponent {...item} />
      </li>
    ));
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
  WithListHOC.displayName = `WithList(${ItemComponent.name})`;
  return WithListHOC;
};

withList.propTypes = {
  ItemComponent: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
};

export default withList;
