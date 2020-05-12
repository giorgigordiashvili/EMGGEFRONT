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
              ტრენინგი
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
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1252.0587038363265!2d44.74250873038433!3d41.722369434856326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447310d0442439%3A0x741ac75e14ceafaa!2zOCDhg5nhg5Dhg5rhg5jhg6Hhg6Lhg6Dhg5Dhg6Lhg5Qg4YOl4YOj4YOX4YOQ4YOX4YOU4YOa4YOQ4YOr4YOY4YOhIOGDpeGDo-GDqeGDkCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOYIDAxNzc!5e0!3m2!1ska!2sge!4v1589286394214!5m2!1ska!2sge"
                      }
                    ></MapLogo>
                    <div className="column">
                      <span className="color-emg" style={{ margin: 0 }}>
                        სათავო ოფისი: თბილისი
                      </span>
                      <br />
                      <p style={{ margin: 0, fontSize: 25 }}>
                        საქართველო, თბილისი 0101 კ. ქუთათელაძის ქ. N8
                      </p>
                    </div>
                  </div>
                  <div className="container p-5"></div>
                  <div className="col-6 col-md-6 row">
                    <MapLogo
                      city="Kutaisi"
                      link={
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.4626013782088!2d42.70996369598854!3d42.26331570989194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8ce290e6ff11%3A0xb585f80979398b3f!2zNjYg4YOX4YOQ4YOb4YOQ4YOgIOGDm-GDlOGDpOGDmOGDoSDhg6UuLCDhg6Xhg6Phg5fhg5Dhg5jhg6Hhg5g!5e0!3m2!1ska!2sge!4v1589286721952!5m2!1ska!2sge"
                      }
                    ></MapLogo>
                    <div className="column mt-3 p-3">
                      <h3 className="color-emg" style={{ margin: 0 }}>
                        საქართველო, ქუთაისი 4600
                      </h3>
                      <p> თამარ მეფის ქ. N66/68</p>
                    </div>
                  </div>

                  <div className="col-6 col-md-6 row">
                    <MapLogo
                      city="Zestafoni"
                      link={
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.044330124875!2d43.05033733884799!3d42.101025798616476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405cb8edcdabcc89%3A0x9f1c63e277a0c83!2z4YOc4YOY4YOZ4YOd4YOa4YOQ4YOr4YOY4YOhIOGDpeGDo-GDqeGDkCwg4YOW4YOU4YOh4YOi4YOQ4YOk4YOd4YOc4YOY!5e0!3m2!1ska!2sge!4v1589286811065!5m2!1ska!2sge"
                      }
                    ></MapLogo>{" "}
                    <div className="column mt-3 p-3">
                      <h3 className="color-emg" style={{ margin: 0 }}>
                        საქართველო, ზესტაფონი 2000
                      </h3>
                      <p>გ. ნიკოლაძის ქ. N36</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 row">
                    <MapLogo
                      city="Chiatura"
                      link={
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1043.4750447828521!2d43.28689934878282!3d42.29147646069525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405ca091fddd4615%3A0x35cf35f931949f56!2z4YOc4YOY4YOc4YOd4YOo4YOV4YOY4YOa4YOY4YOhIOGDpeGDo-GDqeGDkCwg4YOt4YOY4YOQ4YOX4YOj4YOg4YOQ!5e0!3m2!1ska!2sge!4v1589286841193!5m2!1ska!2sge"
                      }
                    ></MapLogo>{" "}
                    <div className="column mt-3 p-3">
                      <h3 className="color-emg" style={{ margin: 0 }}>
                        საქართველო, ჭიათურა 5500
                      </h3>
                      <p>ნინოშვილის ქ. N5</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-6 row">
                    <MapLogo
                      city="Telavi"
                      link={
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d262.407061641641!2d45.481464467300384!3d41.91872238112212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404432cfb196223b%3A0x8f7684f32c0f20d7!2zUnVzdGF2ZWxpIFN0LCDhg5fhg5Thg5rhg5Dhg5Xhg5g!5e0!3m2!1ska!2sge!4v1589286969217!5m2!1ska!2sge"
                      }
                    ></MapLogo>{" "}
                    <div className="column mt-3 p-3">
                      <h3 className="color-emg" style={{ margin: 0 }}>
                        საქართველო, თელავი 2200
                      </h3>
                      <p>რუსთაველის ქ. N86</p>
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
