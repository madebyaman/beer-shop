import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Favourite from './Favourite';

class BeerSplash extends React.Component {
  render() {
    return (
      <li>
        <h2>{this.props.name}</h2>
        <img src={this.props.imageSrc} alt={this.props.name}/>
        <p>{this.props.tagline}</p>
        <Favourite handleFavourite={this.props.handleFavourite} isFavourite={this.props.isFavourite} />
        <Link to={`/beer/${this.props.id}`}>View Beer</Link>
      </li>
    )
  }
}

BeerSplash.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleFavourite: PropTypes.func.isRequired,
  isFavourite: PropTypes.bool.isRequired
}

export default BeerSplash;