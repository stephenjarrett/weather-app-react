import React, { Component } from 'react';
import './App.css';
import LocationList from './Components/LocationList';
// import LocationWeather from './Components/LocationWeather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    
  }
  render() {
    return (
    <div className="App">
      <h1>Badass Weather App</h1>
      <LocationList />
    </div>
    );
  }
}

export default App;
