import React, { Component } from "react";
import { Link } from "react-router-dom";
import Partner from "./partner";

class Partners extends Component {
  render() {
    return (
      <div>
        <div className="thumbnail" />
        <nav className="container">
          <div
            className="nav nav-tabs justify-content-center"
            id="nav-tab"
            role="tablist"
          >
            <Link
              className="nav-item nav-link nav-link-emg "
              to="/about/whoweare"
            >
              ვინ ვართ ჩვენ
            </Link>
            <Link
              className="nav-item nav-link nav-link-emg "
              to="/about/governance"
            >
              მმართველობა
            </Link>
            <Link
              className="nav-item nav-link nav-link-emg "
              to="/about/strategicvision"
            >
              სტრატეგიული ხედვა
            </Link>
            <Link
              className="nav-item nav-link nav-link-emg "
              to="/about/qualityandpermits"
            >
              ხარისხი და პასუხისმგებლობა
            </Link>

            <Link
              className="nav-item nav-link nav-link-emg active"
              to="/about/partners"
            >
              პარტნიორები
            </Link>
            <Link
              className="nav-item nav-link nav-link-emg"
              to="/about/training"
            >
              ტრენინგები
            </Link>
            <Link
              className="nav-item nav-link nav-link-emg"
              to="/about/branches"
            >
              ფილიალები
            </Link>
          </div>
        </nav>
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
