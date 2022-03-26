import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import phoneFooter from "../res/phoneFooter.png";
import mailFooter from "../res/mailFooter.png";
import locationFooter from "../res/locationFooter.png";
import Form from "./common/form";
import Joi from "joi-browser";
import { saveSubscribe } from "../services/subscribeService";
import { toast } from "react-toastify";

class Footer extends Form {
  state = { data: { email: "" }, errors: "" };
  schema = {
    _id: Joi.string(),
    email: Joi.string().required().label("ელფოსტა"),
  };

  doSubmit = async () => {
    await saveSubscribe(this.state.data);
    toast.success("თქვენ წარმატებით გამოიწერეთ სიახლეები.");
  };

  render() {
    return (
      <React.Fragment>
        <hr className="line-emg m-0" />
        <div className="container p-4 d-flex justify-content-center">
          <form onSubmit={this.handleSubmit} className="form-inline">
            <div className="form-group mx-sm-3 ">
              {this.renderInput("email")}
            </div>
            {this.renderButton("გამოწერა")}
          </form>
        </div>
        <hr className="line-emg m-0" />
        <footer className="footer highlight">
          <div className="container pt-5 pb-5 column pl-04">
            <div className="row">
              <div className="col-md-6 col-12">
                <h5 className="color-emg-dark pb-3">კონტაქტი</h5>
                <table className="table-contact">
                  <tbody>
                    <tr>
                      <td style={{ padding: "15px 0" }}>
                        <img alt="location" src={locationFooter} />
                      </td>
                      <td>საქართველო, თბილისი 0177, ალ. ყაზბეგის გამზ. # 47</td>
                    </tr>
                    <tr>
                      <td style={{ width: "38px" }}>
                        <img alt="phone" src={phoneFooter} />
                      </td>
                      <td>
                        <a href="tel:+995322151000">(+995) 032 2 15 10 00</a> /{" "}
                        <a href="tel:+995591599292">(+995) 591 59 92 92</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img alt="mail" src={mailFooter} />
                      </td>
                      <td style={{ padding: "15px 0" }}>
                        <a href="mailto:info@emg.ge" className="pr-5">
                          info@emg.ge
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6 col-12">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2360.7725897385476!2d44.74208798935426!3d41.72429133819524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044731a7e8fb739%3A0x148b389c0bfa08fd!2zNDcg4YOQ4YOa4YOU4YOl4YOh4YOQ4YOc4YOT4YOg4YOUIOGDp-GDkOGDluGDkeGDlOGDkuGDmOGDoSDhg5Lhg5Dhg5vhg5bhg5jhg6Dhg5gsIOGDl-GDkeGDmOGDmuGDmOGDoeGDmA!5e0!3m2!1ska!2sge!4v1648322517437!5m2!1ska!2sge"
                  className="map "
                  frameBorder={1}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className="fluid-container p-3 mb-5 bg-emg-green color-emg-dark opacity-8">
            <div className="container">
              <div className="pl-04">
                გამოგვყევით
                <a
                  href="https://www.facebook.com/EMG.Consulting.2016/"
                  className="card-link-emg opacity-1 p-2 color-emg-dark"
                >
                  <FontAwesome
                    name="facebook"
                    className="fab fa-facebook-f"
                  ></FontAwesome>
                </a>
                <Link to="#" className="card-link-emg p-2 color-emg-dark">
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
