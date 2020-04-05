import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer highlight">
        <div className="container pt-5 pb-5 column pl-04">
          <div className="row">
            <div className="col-md-6 col-12">
              <h5 className="color-emg pb-5">კონტაქტი</h5>
              <table className="table-contact">
                <tbody>
                  <tr>
                    <td style={{ width: "38px" }}>
                      <img alt="phone" src="https://emg.groot.ge/phone.png" />
                    </td>
                    <td>(995) 591 59 92 92 / (032) 2 709 709</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "15px 0" }}>
                      <img alt="mail" src="https://emg.groot.ge/mail.png" />
                    </td>
                    <td style={{ padding: "15px 0" }}>info@emg.ge</td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        alt="location"
                        src="https://emg.groot.ge/location.png"
                      />
                    </td>
                    <td>8 კ. ქუთათელაძე, თბილისი 0101</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6 col-12">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.9219520194015!2d44.74112131535616!3d41.72220298313488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447310d0442439%3A0x741ac75e14ceafaa!2zOCDhg5nhg5Dhg5rhg5jhg6Hhg6Lhg6Dhg5Dhg6Lhg5Qg4YOl4YOj4YOX4YOQ4YOX4YOU4YOa4YOQ4YOr4YOY4YOhIOGDpeGDo-GDqeGDkCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOYIDAxNzc!5e0!3m2!1ska!2sge!4v1568553145362!5m2!1ska!2sge"
                className="map"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="fluid-container p-3 mb-5 bg-emg-green color-white opacity-8">
          <div className="container">
            <div className="pl-04">
              გამოგვყევით
              <Link to="#" className="card-link-emg p-2 color-white">
                <FontAwesome
                  name="facebook"
                  className="fab fa-facebook-f"
                ></FontAwesome>
              </Link>
              <Link to="#" className="card-link-emg p-2 color-white">
                <FontAwesome
                  name="twitter"
                  className="fab fa-twitter"
                ></FontAwesome>
              </Link>
            </div>
          </div>
        </div>
        <div className="fluid-container d-flex justify-content-center bg-emg-blue p-4 col-sm-12 color-white">
          © 2019 ინჟინერიის მონიტორინგის ჯგუფი.
        </div>
      </footer>
    );
  }
}

export default Footer;
