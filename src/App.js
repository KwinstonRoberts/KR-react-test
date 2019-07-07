
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
    this.fetchRestaurants = this.fetchRestaurants.bind(this);
  }

  fetchRestaurants(event){
    const url = 'http://opentable.herokuapp.com/api/restaurants?city=' + event.target.value.toLowerCase();
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if(data.restaurants){
        this.setState({restaurants: data.restaurants})
      } 
    });
  }

  componentDidMount() {
    window.addEventListener('search', this.fetchRestaurants);
    // Call our fetch function below once the component mounts
    fetch(`https://opentable.herokuapp.com/api/restaurants?city=toronto`)
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
        <header className="App-header">
          <h1 className="title has-text-white">Welcome to Kelp!<br/> The search engine for restaurants!</h1>
          <br/>
          <div className="field">
            <div className="control">
                <input onChange={this.fetchRestaurants} className="input is-primary" type="text" placeholder="City"/>
            </div>
          </div>      
        </header>
        <section className="section">
          <div className="columns is-multiline">
            { 
              this.state.restaurants.map(restaurant =>
              <div className="column is-half has-text-white" key={restaurant.id}>
                <div className="card">
                  <div className="card-header">
                    <h1 className="card-header-title">{restaurant.name}</h1>
                  </div>
                  <div className="card-content">
                    <p>{restaurant.address}</p><br/>
                    <div className="columns">
                      <h1 class="column is-one-fourth">{getPrice(restaurant.price)}</h1>
                    </div>
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

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.fetchRestaurants = this.fetchRestaurants.bind(this);
  }

  render() {
      return (
          <React.Fragment>
              <div className="section">
                  <div className="field">
                  <div className="control">
                      <input onChange="{this.fetchRestaurants}" className="input is-primary" type="text" value="Toronto" placeholder="City"/>
                  </div>
                  </div>
              </div>
          </React.Fragment>
      )}
}

export default App;