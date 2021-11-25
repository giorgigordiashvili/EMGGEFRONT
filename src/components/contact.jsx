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

                    <p>საქართველო, თბილისი 0177, ალექსანდრე ყაზბეგის #47</p>
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
                    <label htmlFor="inputEmail4" className="color-emg">
                      სახელი გვარი
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="სახელი გვარი"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4" className="color-emg">
                      ელ-ფოსტა
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="ელ-ფოსტა"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="color-emg"
                  >
                    შეტყობინება
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue="შეტყობინება"
                  />
                </div>
                {this.renderButton("გაგზავნა")}
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
                      <p style={{ margin: 0, fontSize: 25 }}>
                        ალექსანდრე ყაზბეგის #47
                      </p>
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
