import React from 'react';
import '../CSS/LocationList.css';
import LocationWeather from './LocationWeather';

class LocationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationsArray: ['atlanta, ga']
    };
  }

  //check location storage on component did mount for locations array 
  
  //add components for add location here

  //functions needed for handle click delete and handle submit that updates locationsArray... writes array to location storage

  render() {

    let locationWeatherComponents = this.state.locationsArray.map(location => {
      return <LocationWeather key={location} location={location} />
    });

    return (
      <div className="location-list">
        {locationWeatherComponents}
      </div>
    );
  }
}

// const _convertToLocationElement = (locationData) => {
//   return <LocationWeather key={'test'} locationData={locationData} />
// };

export default LocationList;
