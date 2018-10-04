import React from 'react';
import '../CSS/LocationWeather.css';

class LocationWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: '',
      failedToGetData: false
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
            <h3>
              {this.state.weatherData.location.city}, {this.state.weatherData.location.region}
            </h3>
          </div>
          <div className="remove-location">
            <button onClick={() => this.props.delete(this.props.location)}>&times;</button>
          </div>
        </div>
        <div className="forecast-container">
          <div className="current-weather daily-weather-container">
            <div className="current-weather-left">
              <img src="http://l.yimg.com/a/i/us/we/52/31.gif" alt=""/>
              <div>
                <strong>
                  {this.state.weatherData.item.condition.text}
                </strong>
              </div>
            </div>
            <div className="current-weather-right">
              <div>
                <strong>
                  Today - {this.state.weatherData.item.forecast[0].day}
                </strong>
              </div>
              <div>
                <strong>
                  {this.state.weatherData.item.condition.temp}&#8457;
                </strong>
              </div>
              <div>
                <strong>
                  H{this.state.weatherData.item.forecast[0].high}&#176;/
                  L{this.state.weatherData.item.forecast[0].low}&#176;
                </strong>
              </div>
              {/* Wind Chill:{this.state.weatherData.wind.chill}
              Direction:{this.state.weatherData.wind.direction}
              Speed:{this.state.weatherData.wind.speed}mph */}

            </div>
          </div>
          <div className="future-forecast daily-weather-container">
            <div>
              {this.state.weatherData.item.forecast[1].day}
            </div>
            <div>
              {this.state.weatherData.item.forecast[1].date}
            </div>
            <div>
              {this.state.weatherData.item.forecast[1].text}
            </div>
            <div>
              {this.state.weatherData.item.forecast[1].code}
            </div>
            <div>
              High Temp:{this.state.weatherData.item.forecast[1].high}
            </div>
            <div>
              Low Temp:{this.state.weatherData.item.forecast[1].low}
            </div>
          </div>
          <div className="future-forecast daily-weather-container">
            <div>
              {this.state.weatherData.item.forecast[2].day}
            </div>
            <div>
              {this.state.weatherData.item.forecast[2].date}
            </div>
            <div>
              {this.state.weatherData.item.forecast[2].text}
            </div>
            <div>
              {this.state.weatherData.item.forecast[2].code}
            </div>
            <div>
              High Temp:{this.state.weatherData.item.forecast[2].high}
            </div>
            <div>
              Low Temp:{this.state.weatherData.item.forecast[2].low}
            </div>
          </div>
          <div className="future-forecast daily-weather-container">
            <div>
              {this.state.weatherData.item.forecast[2].day}
            </div>
            <div>
              {this.state.weatherData.item.forecast[2].date}
            </div>
            <div>
              {this.state.weatherData.item.forecast[2].text}
            </div>
            <div>
              {this.state.weatherData.item.forecast[2].code}
            </div>
            <div>
              High Temp:{this.state.weatherData.item.forecast[2].high}
            </div>
            <div>
              Low Temp:{this.state.weatherData.item.forecast[2].low}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationWeather;
