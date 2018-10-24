import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route, BrowserRouter} from 'react-router-dom';
import BeerList from './components/BeerList';
import FavouriteBeerList from './components/FavouriteBeerList';
import Beer from './components/Beer';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      favourite: []
    }
  }

  componentDidMount() {
    this.getBeer();
  };

  getBeer = () => {
    axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=18`)
      .then(response => {
        this.setState({
          beers: [
            ...response.data,
            ...this.state.beers
          ],
        })
      })
      .catch(err => console.error('Error in fetching data', err))
  }


  handleFavourite = (beer) => {
    let index = this.state.favourite.indexOf(beer);
    if ( index === -1 ) {
      this.setState({
        favourite: [
          beer,
          ...this.state.favourite
        ]
      })
    } else {
      this.state.favourite.splice(index, 1);
      this.setState({
        favourite: this.state.favourite
      });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" render={() => <Header favouriteItems={this.state.favourite.length} />} />
          <Route exact path="/" render={() =>
          <BeerList
            beers={this.state.beers}
            handleFavourite={this.handleFavourite}
            favourites={this.state.favourite}
            addMoreBeer={this.addMoreBeer}
          />} />
          <Route path="/favourites" render={() =>
            <FavouriteBeerList
              beers={this.state.favourite}
              handleFavourite={this.handleFavourite}
              favourites={this.state.favourite}
            />}/>
          <Route path="/beer/:id" component={Beer}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
