import React, { Component } from "react";
import Partner from "./partner";
import AboutHeader from "./shared/aboutHeader.jsx";

class Partners extends Component {
  render() {
    return (
      <div>
        <div className="thumbnail" />
        <AboutHeader active="partners" />

        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-partners"
            role="tabpanel"
            aria-labelledby="nav-partners-tab"
          >
            <div className="container">
              <h1 className="currentPageTitle mt-3  pl-04">პარტნიორები</h1>
            </div>
            <div className="fluid-container highlight p-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 pl-04 dejavu">
                    „საინჟინრო მონიტორინგის ჯგუფი“ თანამშრომლობს სანდო და მაღალი
                    რეპუტაციის მქონე იმგვარ ცნობილ ორგანიზაციებთან, როგორებიცაა:{" "}
                    <br /> <br />
                    <Partner
                      onDeletePartner={this.props.onDeletePartner}
                      user={this.props.user}
                      partners={this.props.partners}
                    ></Partner>
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

export default Partners;
