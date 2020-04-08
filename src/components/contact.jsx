import React, { Component } from "react";
import { getBranches } from "../services/branchService";
import contactImageOne from "../res/ccc1.jpg";
import contactImageTwo from "../res/ccc2.jpg";
import contactImageThree from "../res/ccc3.jpg";
import MapLogo from "./map";

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
      </React.Fragment>
    );
  }
}

export default Contact;
