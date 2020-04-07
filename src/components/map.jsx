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
                    src={link}
                    width={600}
                    height={450}
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                  />
                  {/* <iframe
                    src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d381115.18266540254!2d44.55866895230048!3d41.73211894051142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2z4YOX4YOR4YOY4YOa4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1586274787887!5m2!1ska!2sge" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>"
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen
                  /> */}
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
