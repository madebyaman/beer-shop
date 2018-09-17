import React from 'react';
import PropTypes from 'prop-types';

const Favourite = (props) => {
  return (
    <svg onClick={props.handleFavourite} width="164px" height="157px" viewBox="0 0 164 157" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" strokeWidth="1" fill={props.isFavourite ? '#FFF13E' : 'none'} fillRule="evenodd">
        <g id="Workspace" transform="translate(-80.000000, -70.000000)" stroke="#FFF13E">
          <polygon id="Star" points="162 199 111.450468 225.575462 121.10457 169.287731 80.2091396 129.424538 136.725234 121.212269 162 70 187.274766 121.212269 243.79086 129.424538 202.89543 169.287731 212.549532 225.575462"></polygon>
        </g>
      </g>
    </svg>
  );
}

Favourite.propTypes = {
  isFavourite: PropTypes.bool.isRequired,
  handleFavourite: PropTypes.func.isRequired
}

export default Favourite;