import React, { Component } from "react";
import locationImage from "../res/location.png";
import FontAwesome from "react-fontawesome";

class Manager extends Component {
  state = {};
  render() {
    const {
      name,
      position,
      id,
      profession,
      education,
      work,
      experience,
      surname
    } = this.props;
    return (
      <div className="col-xl-3 col-2-4 col-md-6 mb-4 ">
        <button
          type="button"
          className=" p-0 m-0 border-emg"
          data-toggle="modal"
          data-target={`#` + id}
        >
          <div className="card border-0 shadow">
            <img
              src="https://www.hbwealthadvisors.com/sites/default/files/imagecache/team-sm/users/hbwealthadvisors/images/Generic_Placeholder_-_Profile2.jpg"
              className="card-img-top out-img inner-shadow-emg"
              alt="..."
            />
            <div
              className="card-body text-center"
              style={{ minHeight: "115px" }}
            >
              <h5 className="card-title mb-0">
                <span className="inner-shadow-emg">{name}</span>
              </h5>
              <div className="card-text text-black-50 ">{position}</div>
            </div>
          </div>
        </button>

        {/*Modal: Name*/}
        <div
          className="modal fade"
          id={id}
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body mb-0 p-0">
                <div id="map-container-google-16" className="z-depth-1-half ">
                  <ul className="pt-4 manager-ul">
                    <li>
                      <b>{name}</b>
                    </li>
                    <li>
                      <img
                        src="https://www.hbwealthadvisors.com/sites/default/files/imagecache/team-sm/users/hbwealthadvisors/images/Generic_Placeholder_-_Profile2.jpg"
                        height="100vh"
                        alt={name}
                        className="inner-shadow-emg"
                      />
                    </li>
                    <li>
                      <b>პოზიცია</b> <p>{position}</p>
                    </li>
                    <li>
                      <b>პროფესია</b> <p>{profession}</p>
                    </li>
                    <li>
                      <b>განათლება</b>{" "}
                      {education.map(s => (
                        <p>{s}</p>
                      ))}
                    </li>
                    <li>
                      <b>სამუშაო გამოცდილება</b> <p>{experience}</p>
                    </li>
                    <li>
                      <b>{work.pretext}</b> <p>{work.text}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-md map-close"
                  data-dismiss="modal"
                >
                  დახურვა
                  <FontAwesome className="fas fa-times ml-1"></FontAwesome>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Manager;
