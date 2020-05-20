import React, { Component } from "react";
import locationImage from "../res/location.png";

class MapLogo extends Component {
  state = {};
  render() {
    const { link } = this.props;
    return (
      <div>
        <a href={link} type="button" className="btn ">
          <img className="location map-button" src={locationImage} alt="" />
        </a>
      </div>
    );
  }
}

export default MapLogo;
