import React from 'react';
import axios from 'axios';

import './Beer.css';

class Beer extends React.Component {
  state={
    beer:{}
  }

  componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          beer: response.data[0]
        })
      })
      .catch(err => console.error('Error in fetching data', err));
  }

  foodPairing = () => {

  }

  render() {
    return (
      <div className="beer">
      <div className="container">
        <div className="flex-container">
          <div className="image">
            <img src={this.state.beer['image_url']} alt={this.state.beer.name} />
          </div>
          <div className="info">
            <h1>{this.state.beer.name}</h1>
            <h2>Tagline</h2>
            <p>{this.state.beer.tagline}</p>
            <h2>Description</h2>
            <p>{this.state.beer.description}</p>
              <h2>Food Pairings</h2>
              <ul>
                {Array.isArray(this.state.beer.food_pairing) ? this.state.beer.food_pairing.map((item, index) => <li key={index}>{item}</li>) : <p></p>}
              </ul>
              <h2>Cold Brewing Tips</h2>
              <p>{this.state.beer.brewers_tips}</p>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Beer;