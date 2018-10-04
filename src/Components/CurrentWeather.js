import React from 'react';
import '../CSS/CurrentWeather.css';

class CurrentWeather extends React.Component {

  _findImgURL = () => {
    let firstIndex = this.props.weatherData.item.description.indexOf('"');
    let secondIndex = this.props.weatherData.item.description.indexOf('"',firstIndex+1);
    let ImgURL = this.props.weatherData.item.description.slice(firstIndex + 1,secondIndex);
    return ImgURL
  }
  render() {
    return (
      <div className="current-weather">
        <div className="current-weather-left">
          <img src={this._findImgURL()} alt=""/>
            <div>
              <div className="current-weather-condition">
              <strong>
                {this.props.weatherData.item.condition.text}
              </strong>
              </div>
            </div>
          </div>
          <div className="current-weather-right">
            <div>
              <strong>
                Today
              </strong>
            </div>
            <div>
              <strong>
                {this.props.weatherData.item.condition.temp}&#8457;
              </strong>
            </div>
            <div>
              <strong>
                H{this.props.weatherData.item.forecast[0].high}&#176;/
                L{this.props.weatherData.item.forecast[0].low}&#176;
              </strong>
            </div>
          </div>
      </div>
    )
  }
}

export default CurrentWeather;

