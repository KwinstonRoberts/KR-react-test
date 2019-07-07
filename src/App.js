
import React, { Component } from 'react';
import './App.css';
import SearchBar from './search-bar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
    this.fetchRestaurants = this.fetchRestaurants.bind(this);
  }

  fetchRestaurants(event){
    const url = 'https://opentable.herokuapp.com/api/restaurants?city=' + event.target.value.toLowerCase() + '&state=ON';
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if(data.restaurants){
        console.log(data.restaurants)
        this.setState({restaurants: data.restaurants})
      } 
    });
  }

  componentDidMount() {
    window.addEventListener('search', this.fetchRestaurants);
    // Call our fetch function below once the component mounts
    fetch(`https://opentable.herokuapp.com/api/restaurants?city=toronto&state=ON`)
    .then(response => response.json())
    .then(data => this.setState({restaurants: data.restaurants})); 
  }
  
 



  render() {
    function getPrice(price) { 
      let items = "";

      for (var i=0; i<price; i++) {
        items= items + '$';
      }
      return items;
    }
    return (
      <div className="App">
        <header className="App-header has-background-primary">
          <h1 className="title has-text-white">Welcome to Kelp!<br/> The search engine for restaurants!</h1>
          <br/>
          <h3 className="text-center">Enter a City to start looking!</h3>
         <SearchBar fetchRestaurants={this.fetchRestaurants}></SearchBar>  
        </header>
        <section className="section">
          <div className="columns is-multiline">
            { 
              this.state.restaurants.map(restaurant =>
              <div className="column is-one-third has-text-white" key={restaurant.id}>
                <div className="card">
                    <div className="card-header">
                      <h1 className="card-header-title">{restaurant.name}</h1>
                    </div>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img alt={restaurant.name + 'interior image'} src={restaurant.image_url}/>
                    </figure>
                  </div>
                  <div className="card-content">
                    <p>{restaurant.address + ', ' + restaurant.postal_code}</p><br/>
                    <h1>{getPrice(restaurant.price)}</h1>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default App;