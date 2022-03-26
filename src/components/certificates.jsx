import React, { Component } from "react";
import { Link } from "react-router-dom";
import AboutHeader from "./shared/aboutHeader";

class Certificates extends Component {
  render() {
    return (
      <div>
        <div className="thumbnail" />
        <AboutHeader active="certificates" />

        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="container">
              <h1 className="currentPageTitle mt-3 col-12 col-md-12 pl-04">
                სერტიფიკატები
              </h1>
              <h5 className="color-emg pb-4 col-12 col-md-12 pl-04">
                „საინჟინრო მონიტორინგის ჯგუფი“
              </h5>
            </div>
            <div className="fluid-container highlight p-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 pl-04">
                    <Link to="https://drive.google.com/file/d/1KgWERKbLEiHg3wsftvesE7kpcbENC1_o/view?usp=sharing">
                      ISO სერტიფიკატი
                    </Link>
                    <br></br>
                    <Link to="https://drive.google.com/file/d/1SbILPBF3bR4AuZlZdXRy6wVxFl7Ux_FJ/view?usp=sharing">
                      აკრედიტაციის მოწმობა
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Certificates;
