import React, { Component } from "react";
import { Link } from "react-router-dom";
import MapLogo from "./map";
import phoneFooter from "../res/phoneFooter.png";
import mailFooter from "../res/mailFooter.png";
import homeFooter from "../res/home.png";

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
              ხარისხი და პასუხისმგებლობა
            </Link>

            <Link
              className="nav-item nav-link nav-link-emg"
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
          <div className="container ">
            <h1 className="currentPageTitle mt-3 col-12 col-md-12 pl-04">
              ფილიალები
            </h1>
          </div>
          <div className="fluid-container highlight">
            <div className="container">
              <div className="row">
                <div className="col-12 row">
                  <div
                    className="col-12"
                    style={{ margin: 0, fontSize: 40, textAlign: "center" }}
                  >
                    <MapLogo
                      city="Tbilisi"
                      link={"https://map.google.com"}
                    ></MapLogo>
                    <div className="column">
                      <span className="color-emg" style={{ margin: 0 }}>
                        სათავო ოფისი: თბილისი
                      </span>
                      <br />
                      <p style={{ margin: 0, fontSize: 25 }}>
                        საქართველო, თბილისი 0177, ალექსანდრე ყაზბეგის #47
                      </p>
                      <p>
                        <img
                          alt="phone"
                          className="p-1 pl-5"
                          src={homeFooter}
                        />
                        <a href="tel:+995322151000" className="pr-5 ">
                        (+995) 032 2 15 10 00 
                        </a>

                        <img
                          alt="phone"
                          className="p-1 pl-5"
                          src={phoneFooter}
                        />
                        <a href="tel:+995591599292" className="pr-5">
                        (+995) 591 59 92 92
                        </a>
                        <img alt="mail" className="p-1 pl-5" src={mailFooter} />
                        <a href="mailto:info@emg.ge" className="pr-5">
                          info@emg.ge
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="container p-5"></div>
                  <div className="col-6 col-md-6 row">
                    <MapLogo
                      city="Kutaisi"
                      link={"https://map.google.com"}
                    ></MapLogo>
                    <div className="column mt-2">
                      <h3 className="color-emg">ქუთაისი</h3>
                      <p> საქართველო, ქუთაისი 4600 თამარ მეფის ქ. N66/68</p>
                      <p>
                        <img alt="mail" className="pr-1" src={mailFooter} />
                        <a href="mailto:imereti@emg.ge">imereti@emg.ge</a>
                      </p>
                    </div>
                  </div>

                  <div className="col-6 col-md-6 row">
                    <MapLogo
                      city="Zestafoni"
                      link={"https://map.google.com"}
                    ></MapLogo>{" "}
                    <div className="column mt-2">
                      <h3 className="color-emg">ზესტაფონი</h3>
                      <p>საქართველო, ზესტაფონი 2000 გ. ნიკოლაძის ქ. N36</p>
                      <p>
                        <img alt="mail" className="pr-1" src={mailFooter} />
                        <a href="mailto:imereti@emg.ge">imereti@emg.ge</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 row">
                    <MapLogo
                      city="Chiatura"
                      link={"https://map.google.com"}
                    ></MapLogo>{" "}
                    <div className="column mt-2 ">
                      <h3 className="color-emg">ჭიათურა</h3>
                      <p>საქართველო, ჭიათურა 5500 ნინოშვილის ქ. N5</p>
                      <p>
                        <img alt="mail" className="pr-1" src={mailFooter} />
                        <a href="mailto:imereti@emg.ge">imereti@emg.ge</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 row">
                    <MapLogo
                      city="Telavi"
                      link={"https://map.google.com"}
                    ></MapLogo>{" "}
                    <div className="column mt-2">
                      <h3 className="color-emg">თელავი</h3>
                      <p>საქართველო, თელავი 2200 რუსთაველის ქ. N86</p>
                      <p>
                        <img alt="mail" className="pr-1" src={mailFooter} />
                        <a href="mailto:kakheti@emg.ge">kakheti@emg.ge</a>
                      </p>
                    </div>
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

export default Branches;
