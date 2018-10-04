import React, { Component } from 'react';
import './App.css';
import LocationList from './Components/LocationList';
import 'bootstrap/dist/css/bootstrap.min.css'

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
      <h1 style={{margin:"30px 0 10px 0"}}>React Weather!</h1>
      <img className="sun" src={require('./Images/sun.png')} style={{width:"80px"}} alt=""/>
      <LocationList />
    </div>
    );
  }
}

export default App;
