import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import phoneFooter from "../res/phoneFooter.png";
import mailFooter from "../res/mailFooter.png";
import locationFooter from "../res/locationFooter.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <hr className="line-emg m-0" />
        <div className="container p-4 d-flex justify-content-center">
          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="inputPassword2" className="sr-only">
                ელფოსტა
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder=" ელ ფოსტა"
              />
            </div>
            <button type="submit" className="btn subscribe-button mb-2">
              გამოწერა
            </button>
          </form>
        </div>
        <hr className="line-emg m-0" />
        <footer className="footer highlight">
          <div className="container pt-5 pb-5 column pl-04">
            <div className="row">
              <div className="col-md-6 col-12">
                <h5 className="color-emg pb-3">კონტაქტი</h5>
                <table className="table-contact">
                  <tbody>
                    <tr>
                      <td style={{ padding: "15px 0" }}>
                        <img alt="location" src={locationFooter} />
                      </td>
                      <td>საქართველო, თბილისი 0101, კ. ქუთათელაძის ქ. N8</td>
                    </tr>
                    <tr>
                      <td style={{ width: "38px" }}>
                        <img alt="phone" src={phoneFooter} />
                      </td>
                      <td>
                        <a href="tel:+995322709709">(+995 32) 2 709 709</a> /{" "}
                        <a href="tel:+995591599292">(+995) 591 59 92 92</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img alt="mail" src={mailFooter} />
                      </td>
                      <td style={{ padding: "15px 0" }}>info@emg.ge</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6 col-12">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.9219520194015!2d44.74112131535616!3d41.72220298313488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447310d0442439%3A0x741ac75e14ceafaa!2zOCDhg5nhg5Dhg5rhg5jhg6Hhg6Lhg6Dhg5Dhg6Lhg5Qg4YOl4YOj4YOX4YOQ4YOX4YOU4YOa4YOQ4YOr4YOY4YOhIOGDpeGDo-GDqeGDkCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOYIDAxNzc!5e0!3m2!1ska!2sge!4v1568553145362!5m2!1ska!2sge"
                  className="map "
                  frameBorder={1}
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
            © 2020 საინჟინრო მონიტორინგის ჯგუფი
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
