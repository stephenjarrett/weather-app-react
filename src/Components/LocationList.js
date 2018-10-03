import React from 'react';
import '../CSS/LocationList.css';
import LocationWeather from './Components/LocationWeather';

class LocationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const url = `http://localhost:4000/api/companies/${this.props.match.params.id}`;
    // console.log(url);
    fetch(url)
      .then(company => company.json())
      .then(company => {
        this.setState({
          company: {
            _id: company._id,
            name: company.name,
            picture: company.picture,
            summary: company.summary,
            industry: company.industry,
            stage: company.stage,
            productAndServices: company.productAndServices,
            need1: company.needs[0],
            need2: company.needs[1],
            need3: company.needs[2],
            website: company.website,
            email: company.email,
            phone: company.phone,
            youtubeLink: company.youtubeLink,
            paypalLink: company.paypalLink,
            profile: company.profile,
            linkedIn: company.linkedIn,
            ownerName: company.ownerName
          }
        })
      });
  }

  render() {
    return (
      <div className="location-list">
        
      </div>
    );
  }
}

export default LocationList;
