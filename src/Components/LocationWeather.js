import React from 'react';
import '../CSS/LocationWeather.css';
import CurrentWeather from'../Components/CurrentWeather.js';
import Forecast from'../Components/Forecast.js';
import OtherWeatherInfo from'../Components/OtherWeatherInfo.js';

class LocationWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: '',
      failedToGetData: false,
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
        if (jsonData.query.results == null) {
          this.setState({
            failedToGetData: true,
            weatherData: 'Failed to retrieve data'
          }) 
        } else {
          this.setState({
            weatherData: jsonData.query.results.channel
          });
        }
        })
      .catch(function (err) {
        console.log(err);
      });
    }

    _renderForecastOrOther = () => {
      if (this.props.selectedSection === 'forecast') {
        return <Forecast weatherData={this.state.weatherData} />
      } else if (this.props.selectedSection === 'other') {
        return <OtherWeatherInfo weatherData={this.state.weatherData} />
      }
    }
    
    render() {
      //renders nothing if API hasn't return data...
      if (!this.state.weatherData) {
        // alert('Invalid Query!');
        return null;
      } 
      else if (this.state.failedToGetData === true) {
        // return (
        // alert('Failed to retrieve data from the server! Enter location as "City, State"');
        // this._fetchWeatherData();
        return null;
        // <div>{this.props.location}: Failed to retrieve data from server</div>
        // )
      }
    
    return (
      //create day of component and forecast component to clean this up.. pass in data as props
      <div className="location-weather">
        <div className="name-container">
          <div className="name-container-left">
            <h4>
              {this.state.weatherData.location.city}, {this.state.weatherData.location.region}
            </h4>
          </div>
          <div className="name-container-right">
            { this.props.selectedSection === 'forecast'
            ? <button onClick={() => this.props.handleClick()}>More Information</button>
            : <button onClick={() => this.props.handleClick()}>3 day Forecast</button>
            }
          </div>
          <div className="remove-location">
            <button onClick={() => this.props.delete(this.props.location)}>&times;</button>
          </div>
        </div>
        <div className="main-weather-container">
              <CurrentWeather weatherData={this.state.weatherData} />
              {this._renderForecastOrOther()}

        </div>
      </div>
    );
  }
}

export default LocationWeather;
