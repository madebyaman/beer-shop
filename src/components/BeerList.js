import React from 'react';
import BeerSplash from './BeerSplash';
import PropTypes from 'prop-types';

import "./BeerList.css";

class BeerList extends React.Component {

  render() {
    return (
      <div className="container">
      <ul className="beers">
        {
          this.props.beers.map(beer => {
          return (
          <BeerSplash 
            name={beer.name} 
            tagline={beer.tagline} 
            imageSrc={beer.image_url} 
            key={beer.id}
            id={beer.id}
            handleFavourite={() => this.props.handleFavourite(beer)}
            isFavourite={this.props.favourites.indexOf(beer) > -1 ? true : false}
          />
          );
        })
        }
      </ul>
      </div>
    )
  }
}

BeerList.propTypes = {
  beers: PropTypes.array.isRequired,
  handleFavourite: PropTypes.func.isRequired,
  favourites: PropTypes.array.isRequired,
  addMoreBeer: PropTypes.func
}

export default BeerList;