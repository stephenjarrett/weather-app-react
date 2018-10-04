import React from 'react';
import '../CSS/Forecast.css';

class Forecast extends React.Component {

  render() {
    return (
      <div className="forecast-container">
        <div className="future-forecast daily-weather-container">
            <div>
              {this.props.weatherData.item.forecast[1].day}
            </div>
            <div>
              {this.props.weatherData.item.forecast[1].text}
            </div>
            <div>
              H{this.props.weatherData.item.forecast[1].high}&#176;/
              L{this.props.weatherData.item.forecast[1].low}&#176;
            </div>
          </div>
          <div className="future-forecast daily-weather-container">
            <div>
              {this.props.weatherData.item.forecast[2].day}
            </div>
            <div>
              {this.props.weatherData.item.forecast[2].text}
            </div>
            <div>
              H{this.props.weatherData.item.forecast[2].high}&#176;/
              L{this.props.weatherData.item.forecast[2].low}&#176;
            </div>
          </div>
          <div className="future-forecast daily-weather-container">
            <div>
              {this.props.weatherData.item.forecast[2].day}
            </div>
            <div>
              {this.props.weatherData.item.forecast[2].text}
            </div>
            <div>
              H{this.props.weatherData.item.forecast[2].high}&#176;/
              L{this.props.weatherData.item.forecast[2].low}&#176;
            </div>
          </div>
      </div>
    )
  }
}

export default Forecast;
