import React, { Component } from "react";
import { Link } from "react-router-dom";
import locationImage from "../res/location.png";

class Branches extends Component {
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
              ვინ ვართ ჩვენ
            </Link>

            <Link
              className="nav-item nav-link nav-link-emg"
              to="/about/partners"
            >
              პარტნიორები
            </Link>
            <Link
              className="nav-item nav-link nav-link-emg active"
              to="/about/branches"
            >
              ფილიალები
            </Link>
          </div>
        </nav>
        <div
          className="tab-pane fade show"
          id="nav-branches"
          role="tabpanel"
          aria-labelledby="nav-branches-tab"
        >
          <div className="fluid-container">
            <div className="container">
              <h1 className="currentPageTitle pl-04">ფილიალები</h1>
              <div className="row">
                <div className="col-12 row">
                  <div
                    className="col-12"
                    style={{ margin: 0, fontSize: 40, textAlign: "center" }}
                  >
                    <img className="location" src={locationImage} alt="" />
                    <div className="column">
                      <span className="color-emg" style={{ margin: 0 }}>
                        სათაო ოფისი: თბილისი
                      </span>
                      <br />
                      <span style={{ margin: 0, fontSize: 25 }}>
                        კ. ქუთათელაძე 8
                      </span>
                    </div>
                  </div>
                  <div className="container p-5"></div>
                  <div className="col-6 col-md-4 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        ქუთაისი
                      </p>
                      <p>თამარ მეფე #66/68</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        თერჯოლა
                      </p>
                      <p>რუსთველსის ქუჩა #99</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        ზესტაფონი
                      </p>
                      <p>გ. ნიკოლაძე #36</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        ჭიათურა{" "}
                      </p>
                      <p>ნინოშვილის ქუჩა #5</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        თელავი
                      </p>
                      <p>რუსთაველის ქუჩა #86</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        წნორი
                      </p>
                      <p>თავისუფლების ქუჩა #74</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container p-5"></div>
          </div>
        </div>
        <div className="container p-5"></div>
      </div>
    );
  }
}

export default Branches;
