import React from 'react';
import '../CSS/OtherWeatherInfo.css';

class OtherWeatherInfo extends React.Component {

  render() {
    return (
      <div className="other-weather-container">
        <div className="other-weather-element">
            Wind Chill: {this.props.weatherData.wind.chill}&#8457;
          <br/>
            Direction: {this.props.weatherData.wind.direction}&#176;
          <br/>
            Speed: {this.props.weatherData.wind.speed}mph
        </div>
        <div className="other-weather-element">
          Hum: {this.props.weatherData.atmosphere.humidity}%
          <br/>
          Pres: {this.props.weatherData.atmosphere.pressure}in
          <br/>
          Vis: {this.props.weatherData.atmosphere.visibility}mi
        </div>
        <div className="other-weather-element">
          Sunrise: {this.props.weatherData.astronomy.sunrise}
          <br/>
          Sunset: {this.props.weatherData.astronomy.sunset}
        </div>
      </div>
    )
  }
}

export default OtherWeatherInfo;

