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
      favourite: [],
      idCounter: 1
    }
  }

  componentDidMount() {
    this.getBeerXTimes(18);
  };

  getBeerXTimes = (x) => {
    for (let i = 0; i < x; i++) {
      axios.get(`https://api.punkapi.com/v2/beers/${this.state.idCounter}`)
        .then(response => {
          this.setState({
            beers: [
              ...response.data,
              ...this.state.beers
            ]
          })
        })
        .catch(err => console.error('Error in fetching data', err))
      this.setState({
        idCounter: this.state.idCounter+=1
       })
      }
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
          <Route path="/" render={() => <Header />} />
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
