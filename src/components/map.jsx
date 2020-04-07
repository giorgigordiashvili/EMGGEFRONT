import React, { Component } from "react";
import locationImage from "../res/location.png";
import FontAwesome from "react-fontawesome";

class MapLogo extends Component {
  state = {};
  render() {
    const { link, city } = this.props;
    return (
      <div>
        <button
          type="button"
          className="btn "
          data-toggle="modal"
          data-target={`#` + city}
        >
          <img className="location" src={locationImage} alt="" />
        </button>

        {/*Modal: Name*/}
        <div
          className="modal fade"
          id={city}
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            {/*Content*/}
            <div className="modal-content">
              {/*Body*/}
              <div className="modal-body mb-0 p-0">
                {/*Google map*/}
                <div
                  id="map-container-google-16"
                  className="z-depth-1-half map-container-9"
                  style={{ height: "400px" }}
                >
                  <iframe
                    title={city}
                    src={link}
                    width={600}
                    height={450}
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
              </div>
              {/*Footer*/}
              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-md map-button"
                  data-dismiss="modal"
                >
                  Close
                  <FontAwesome className="fas fa-times ml-1"></FontAwesome>
                </button>
              </div>
            </div>
            {/*/.Content*/}
          </div>
        </div>
        {/*Modal: Name*/}
      </div>
    );
  }
}

export default MapLogo;
