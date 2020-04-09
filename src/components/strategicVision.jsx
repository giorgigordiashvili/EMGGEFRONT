import React, { Component } from "react";
import { Link } from "react-router-dom";
import basicPrinciples from "../res/basicprinciples.png";
import ourGoals from "../res/ourgoals.png";
import ourMission from "../res/ourmission.png";
import priorities from "../res/priorities.png";

class StrategicVision extends Component {
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
              className="nav-item nav-link nav-link-emg"
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
              className="nav-item nav-link nav-link-emg active"
              to="/about/strategicvision"
            >
              სტრატეგიული ხედვა
            </Link>
            <Link
              className="nav-item nav-link nav-link-emg"
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
              className="nav-item nav-link nav-link-emg"
              to="/about/branches"
            >
              ფილიალები
            </Link>
          </div>
        </nav>
        <div
          className="tab-pane fade show"
          id="nav-strategic-vision"
          role="tabpanel"
          aria-labelledby="nav-strategic-vision-tab"
        >
          <div className="container">
            <h1 className="currentPageTitle mt-3 col-12 col-md-12 pl-04">
              სტრატეგიული ხედვა
            </h1>
            {/* <h5 className="color-emg pb-4 col-12 col-md-12 pl-04">
              „საინჟინრო მონიტორინგის ჯგუფი“
            </h5> */}
          </div>
          <div className="fluid-container highlight">
            <div className="container ">
              <div className="row pt-5 pb-5">
                <div className="col-sm-12 col-md-6 min-vh-25">
                  <div className="column text-center">
                    <img src={ourMission} alt="" />
                    <h5 className="p-2 color-emg">მისია</h5>
                    <div className="d-flex justify-content-center">
                      <p className="text-left" style={{ width: "300px" }}>
                        <ul className="management">
                          <li>
                            საერთაშორისო სტანდარტების დამკვიდრება ადგილობრივ
                            ბაზარზე
                          </li>
                          <li>
                            საუკეთესო საინჟინრო გადაწყვეტილებების მიღების სწორი
                            პრაქტიკის დანერგვა
                          </li>
                          <li>
                            ინსპექტირების, ზედამხედველობისა და ზოგადად,
                            სამშენებლო სექტორის განვითარება მსოფლიოს ინოვაციური
                            ტენდენციების შესაბამისად
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 min-vh-25 ">
                  <div className="column text-center">
                    <img src={ourGoals} alt="" />
                    <h5 className="p-2 color-emg">მიზნები</h5>
                    <div className="d-flex justify-content-center">
                      <p className="text-left" style={{ width: "250px" }}>
                        <ul className="management">
                          <li>მუდმივი პროფესიული განვითარება</li>
                          <li>მომსახურების სფეროს გაფართოება</li>
                          <li>კვალიფიციური მომსახურების შეთავაზება</li>
                          <li>
                            სანდო და საიმედო კომპანიის რეპუტაციის შენარჩუნება
                          </li>
                          <li>საქართველოს ბაზრის ლიდერობა</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 min-vh-25">
                  <div className="column text-center">
                    <img src={priorities} alt="" />
                    <h5 className="p-2 color-emg">პრიორიტეტები</h5>
                    <div className="d-flex justify-content-center">
                      <p className="text-left" style={{ width: "250px" }}>
                        <ul className="management">
                          <li>მიუკერძოებლობა</li>
                          <li>სანდოობა</li>
                          <li>მომსახურების უმაღლესი ხარისხი</li>
                          <li>გუნდური მუშაობა</li>
                          <li>მუდმივი ზრდა და განვითარება</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 min-vh-25 ">
                  <div className="column text-center ">
                    <img src={basicPrinciples} alt="" />
                    <h5 className="p-2 color-emg">ძირითადი პრინციპები</h5>
                    <div className="d-flex justify-content-center">
                      <p className="text-left" style={{ width: "250px" }}>
                        <ul className="management">
                          <li>
                            სამართლებრივი მოთხოვნებისა და რეგულაციების დაცვა;{" "}
                          </li>
                          <li>პრინციპულობა;</li>
                          <li>დამოუკიდებლობა;</li>
                          <li>ობიექტურობა</li>
                          <li>საერთაშორისო სტანდარტებით ხელმძღვანელობა.</li>
                        </ul>
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

export default StrategicVision;
