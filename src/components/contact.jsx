import React from "react";
import { getBranches } from "../services/branchService";
import phoneFooter from "../res/phoneFooter.png";
import mailFooter from "../res/mailFooter.png";
import homeFooter from "../res/home.png";
import Form from "./common/form";
import Joi from "joi-browser";
import MapLogo from "./map";
import { saveContact } from "../services/contactService";
class Contact extends Form {
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
    data: {
      name: "",
      email: "",
      letter: "",
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().required().label("სახელი"),
    letter: Joi.string().required().label("წერილი"),
    email: Joi.string().required().label("ელფოსტა"),
  };
  async componentDidMount() {
    const { data: branches } = await getBranches();
    this.setState({ branches });
  }

  doSubmit = async () => {
    await saveContact(this.state.data);
    this.props.history.push("/contact");
  };

  render() {
    return (
      <React.Fragment>
        <div className="thumbnail" />
        <div className="container ">
          <h1 className="currentPageTitle ">ფილიალები</h1>
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
                    <h3 className="color-emg">სათავო ოფისი: თბილისი</h3>

                    <p>საქართველო, თბილისი 0101 კ. ქუთათელაძის ქ. N8</p>
                    <p>
                      <img alt="phone" className="p-1 pl-5" src={homeFooter} />
                      <a href="tel:+995322709709" className="pr-5 ">
                        (+995 32) 2 709 709
                      </a>
                    </p>
                    <p>
                      <img alt="phone" className="p-1 pl-5" src={phoneFooter} />
                      <a href="tel:+995591599292" className="pr-5">
                        (+995) 591 59 92 92
                      </a>
                    </p>
                    <p>
                      {" "}
                      <img alt="mail" className="p-1 pl-5" src={mailFooter} />
                      <a href="mailto:info@emg.ge" className="pr-5">
                        info@emg.ge
                      </a>
                    </p>
                  </div>
                </div>

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

        <div className="container">
          <h1 className="currentPageTitle pl-04">კონტაქტი</h1>
        </div>
        <div className="fluid-container highlight">
          <div className="container ">
            <div className="container pt-5">
              <form onSubmit={this.handleSubmit}>
                <div className="form-row ">
                  <div className="form-group col-md-6 ">
                    {this.renderInput("name", "სახელი")}
                  </div>
                  <div className="form-group col-md-6">
                    {this.renderInput("email", "ელფოსტა")}
                  </div>
                </div>
                <div className="form-group">
                  {this.renderInput("letter", "წერილი")}
                </div>
                {this.renderButton("გაგზავნა")}
              </form>
            </div>
            <div className="container pt-5"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
