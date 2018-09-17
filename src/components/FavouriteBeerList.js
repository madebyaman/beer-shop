import React from 'react';
import BeerSplash from './BeerSplash';
import PropTypes from 'prop-types';

import "./BeerList.css";

class FavouriteBeerList extends React.Component {

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

FavouriteBeerList.propTypes = {
  beers: PropTypes.array.isRequired,
  handleFavourite: PropTypes.func.isRequired,
  favourites: PropTypes.array.isRequired
}

export default FavouriteBeerList;