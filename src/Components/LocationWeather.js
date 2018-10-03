import React from 'react';
import '../CSS/LocationList.css';

class LocationWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: ''
    }
  }
  
  componentDidMount() {
    //check local storage here to update locations array and data
    this._fetchWeatherData();
    // setInterval(this._fetchWeatherData, 1000000)
  }

  // Calls on YAHOO WEATHER API, writes to local storage
  _fetchWeatherData = () => {
    let YAHOO_URL = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='${this.props.location}')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

    fetch(YAHOO_URL)
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({
          weatherData: jsonData.query.results.channel
        }, () => { console.log(this.state.weatherData)});
      })
      .catch(function (err) {
        console.log(err);
      });
    }
    
    render() {
      //renders nothing if API hasn't return data
      if (!this.state.weatherData) {
        return null;
      }
    
    return (
      <div className="location-weather">
        {this.props.location}
        Low Temp:{this.state.weatherData.item.forecast[0].low}
        {this.state.weatherData.units.speed}
      </div>
    );
  }
}

export default LocationWeather;
