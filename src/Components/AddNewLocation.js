import React from 'react';
import '../CSS/AddNewLocation.css';

class AddNewLocation extends React.Component {

  render() {

    return (
      <div>
          <form onSubmit={(e) => {
            this.props.handleSubmit();
            e.preventDefault();
            e.target.reset();
          }}>
          <input type="text" name="Loaction" required placeholder="Atlanta, GA"
          value={this.props.newLocationText} 
          onChange={(e) => {this.props.handleChange(e.target.value)}}/>
          <button type="submit">Add Location</button>
        </form>
      </div>
    )
  }

}

export default AddNewLocation;