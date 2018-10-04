import React from 'react';
import '../CSS/LocationList.css';
import LocationWeather from './LocationWeather';
import AddNewLocation from './AddNewLocation';

class LocationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationsArray: ['ATLANTA, GA'],
      newLocationText: '',
      selectedSection: 'forecast'
    };
  }

  componentDidMount() {
    // Checks for local storage.. if it exists then it adds it to state... if it doesn't exist it goes ahead and writes to localstorage
    if (localStorage.getItem('locations')) {
      this.setState({
        locationsArray: JSON.parse(localStorage.getItem('locations'))
      });
    } else (
      localStorage.setItem('locations', JSON.stringify(this.state.locationsArray))
    )
  }

  //handle click for forecast vs other info 
  _handleClickForecastOther = () => {
    if (this.state.selectedSection === 'forecast') {
      this.setState({
        selectedSection: 'other'
      });
    } else {
      this.setState({
        selectedSection: 'forecast'
      });
    }
  }

  //function to handle change on text input
  _handleChange = (newText) => {
    this.setState({
      newLocationText: newText
    });
  }

  //function the handle submit on text input
  _handleSubmit = () => {
    this._addLocation();
  }

  //add components for add location here
  _addLocation = () => {
    let newLocationsArray = this.state.locationsArray.slice();
    //check to see if you have this city entered... obviously you can break this
    if (!newLocationsArray.includes(this.state.newLocationText.toUpperCase())){
      newLocationsArray.push(this.state.newLocationText.toUpperCase());

      this.setState({
        locationsArray: newLocationsArray,
        newLocationText: ''
      }, () => {
        // add item to local storage
        localStorage.setItem('locations', JSON.stringify(this.state.locationsArray))
      });
    } else {
      this.setState({
        newLocationText: ''
      })
    }
  }

  //delete a location
  _deleteLocation = (locationName) => {
    let newLocationsArray = this.state.locationsArray.filter((location) => {
      return location !== locationName;
    });

    this.setState({
      locationsArray: newLocationsArray
    }, () => {
      //delete item from local storage
      localStorage.setItem('locations', JSON.stringify(this.state.locationsArray))
    });

  }

  render() {

    // map the array of locations and create components
    let locationWeatherComponents = this.state.locationsArray.map(location => {
      return <LocationWeather 
      key={location} 
      location={location} 
      delete={this._deleteLocation} 
      handleClick={this._handleClickForecastOther} 
      selectedSection={this.state.selectedSection} />
    });

    return (
      <div className="location-list">
        <AddNewLocation newLocationText={this.props.newLocationText} 
        handleChange={this._handleChange} 
        handleSubmit={this._handleSubmit} />
        {locationWeatherComponents}
      </div>
    );
  }
}

export default LocationList;
