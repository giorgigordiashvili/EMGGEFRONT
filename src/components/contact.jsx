import React, { Component } from "react";
import { getBranches } from "../services/branchService";
import locationImage from "../res/location.png";
import contactImageOne from "../res/ccc1.jpg";
import contactImageTwo from "../res/ccc2.jpg";
import contactImageThree from "../res/ccc3.jpg";

class Contact extends Component {
  state = {
    branches: [],
    style: "mapbox://styles/mapbox/light-v9",
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      longitude: -74,
      latitude: 40.7,
      zoom: 11,
      maxZoom: 16,
    },
  };

  async componentDidMount() {
    const { data: branches } = await getBranches();
    this.setState({ branches });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container pt-5">
          <h1 className="currentPageTitle pl-04">კონტაქტი</h1>

          <div className="row">
            <div className="col-12 ">
              <iframe
                title="Big map on contact page"
                width="100%"
                height="400px"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.9221375752163!2d44.74112131543614!3d41.72219897923487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447310d0442439%3A0x741ac75e14ceafaa!2zOCDhg5nhg5Dhg5rhg5jhg6Hhg6Lhg6Dhg5Dhg6Lhg5Qg4YOl4YOj4YOX4YOQ4YOX4YOU4YOa4YOQ4YOr4YOY4YOhIOGDpeGDo-GDqeGDkCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOYIDAxNzc!5e0!3m2!1ska!2sge!4v1568564871496!5m2!1ska!2sge"
              />
            </div>
          </div>
        </div>
        <div className="container p-5"></div>
        <div>
          <div className="fluid-container highlight">
            <div className="container p-5"></div>
            <div className="container ">
              <div className="row justify-content-center">
                <img
                  className="col-sm-12 col-md-4 img-fluid"
                  src={contactImageOne}
                  alt=""
                />
                <img
                  className="col-sm-12 col-md-4 img-fluid"
                  src={contactImageTwo}
                  alt=""
                />
                <img
                  className="col-sm-12 col-md-4 img-fluid"
                  src={contactImageThree}
                  alt=""
                />
              </div>
              <form className="p-4">
                <div className="form-row ">
                  <div className="form-group col-md-6 ">
                    <label htmlFor="inputEmail4" className="color-emg">
                      სახელი
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="სახელი"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4" className="color-emg">
                      თემა
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="თემა"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="color-emg"
                  >
                    წერილი
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary emg-button pl-3 pr-3 pt-1 pb-1"
                >
                  გაგზავნა
                </button>
              </form>
            </div>
            <div className="container p-5"></div>
          </div>
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
                      <p className="color-emg" style={{ margin: 0 }}>
                        სათაო ოფისი: თბილისი
                      </p>
                      <p style={{ margin: 0, fontSize: 25 }}>კ. ქუთათელაძე 8</p>
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
      </React.Fragment>
    );
  }
}

export default Contact;
