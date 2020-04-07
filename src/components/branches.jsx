import React, { Component } from "react";
import { Link } from "react-router-dom";
import MapLogo from "./map";

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
              ხარისხი და ნებართვა
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
              <h1 className="currentPageTitle mt-3 pl-04">ფილიალები</h1>
              <div className="row">
                <div className="col-12 row">
                  <div
                    className="col-12"
                    style={{ margin: 0, fontSize: 40, textAlign: "center" }}
                  >
                    <MapLogo
                      city="Tbilisi"
                      link={
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d381115.18266540254!2d44.55866895230048!3d41.73211894051142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2z4YOX4YOR4YOY4YOa4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1586274787887!5m2!1ska!2sge"
                      }
                    ></MapLogo>
                    <div className="column">
                      <span className="color-emg" style={{ margin: 0 }}>
                        სათაო ოფისი: თბილისი
                      </span>
                      <br />
                      <p style={{ margin: 0, fontSize: 25 }}>კ. ქუთათელაძე 8</p>
                    </div>
                  </div>
                  <div className="container p-5"></div>
                  <div className="col-6 col-md-4 row">
                    <MapLogo
                      city="Kutaisi"
                      link={
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47249.83134151659!2d42.68297709916377!3d42.2547282031695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8ce30e54af2d%3A0xfbec41b2d626656f!2z4YOl4YOj4YOX4YOQ4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1586275595956!5m2!1ska!2sge"
                      }
                    ></MapLogo>
                    <div className="column mt-3 p-3">
                      <h3 className="color-emg" style={{ margin: 0 }}>
                        ქუთაისი
                      </h3>
                      <p>თამარ მეფე #66/68</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 row">
                    <MapLogo
                      city="Terjola"
                      link={
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47249.83134151659!2d42.68297709916377!3d42.2547282031695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8ce30e54af2d%3A0xfbec41b2d626656f!2z4YOl4YOj4YOX4YOQ4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1586275595956!5m2!1ska!2sge"
                      }
                    ></MapLogo>{" "}
                    <div className="column mt-3 p-3">
                      <h3 className="color-emg" style={{ margin: 0 }}>
                        თერჯოლა
                      </h3>
                      <p>რუსთველსის ქუჩა #99</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 row">
                    <MapLogo
                      city="Zestafoni"
                      link={
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47249.83134151659!2d42.68297709916377!3d42.2547282031695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8ce30e54af2d%3A0xfbec41b2d626656f!2z4YOl4YOj4YOX4YOQ4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1586275595956!5m2!1ska!2sge"
                      }
                    ></MapLogo>{" "}
                    <div className="column mt-3 p-3">
                      <h3 className="color-emg" style={{ margin: 0 }}>
                        ზესტაფონი
                      </h3>
                      <p>გ. ნიკოლაძე #36</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 row">
                    <MapLogo
                      city="Chiatura"
                      link={
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47249.83134151659!2d42.68297709916377!3d42.2547282031695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8ce30e54af2d%3A0xfbec41b2d626656f!2z4YOl4YOj4YOX4YOQ4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1586275595956!5m2!1ska!2sge"
                      }
                    ></MapLogo>{" "}
                    <div className="column mt-3 p-3">
                      <h3 className="color-emg" style={{ margin: 0 }}>
                        ჭიათურა{" "}
                      </h3>
                      <p>ნინოშვილის ქუჩა #5</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 row">
                    <MapLogo
                      city="Telavi"
                      link={
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47249.83134151659!2d42.68297709916377!3d42.2547282031695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8ce30e54af2d%3A0xfbec41b2d626656f!2z4YOl4YOj4YOX4YOQ4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1586275595956!5m2!1ska!2sge"
                      }
                    ></MapLogo>{" "}
                    <div className="column mt-3 p-3">
                      <h3 className="color-emg" style={{ margin: 0 }}>
                        თელავი
                      </h3>
                      <p>რუსთაველის ქუჩა #86</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 row">
                    <MapLogo
                      city="Tsnori"
                      link={
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47249.83134151659!2d42.68297709916377!3d42.2547282031695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8ce30e54af2d%3A0xfbec41b2d626656f!2z4YOl4YOj4YOX4YOQ4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1586275595956!5m2!1ska!2sge"
                      }
                    ></MapLogo>{" "}
                    <div className="column mt-3 p-3">
                      <h3 className="color-emg" style={{ margin: 0 }}>
                        წნორი
                      </h3>
                      <p>თავისუფლების ქუჩა #74</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-4"></div>
      </div>
    );
  }
}

export default Branches;
