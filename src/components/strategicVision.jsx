import React, { Component } from "react";
import basicPrinciples from "../res/basicprinciples.png";
import ourGoals from "../res/ourgoals.png";
import ourMission from "../res/ourmission.png";
import priorities from "../res/priorities.png";
import AboutHeader from "./shared/aboutHeader";

class StrategicVision extends Component {
  render() {
    return (
      <div>
        <div className="thumbnail" />
        <AboutHeader active="strategicvision" />

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
                    <div className="d-flex ">
                      <p className="text-justify">
                        <ul className="management ">
                          <li className="special">
                            საერთაშორისო სტანდარტების დამკვიდრება ადგილობრივ
                            ბაზარზე
                          </li>
                          <li className="special">
                            საუკეთესო საინჟინრო გადაწყვეტილებების მიღების სწორი
                            პრაქტიკის დანერგვა
                          </li>
                          <li className="special">
                            ინსპექტირების, ზედამხედველობისა და, ზოგადად,
                            სამშენებლო სექტორის განვითარება მსოფლიოს წამყვან
                            ქვეყნებში აპრობირებული ინოვაციური ტენდენციების
                            შესაბამისად
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
                    <div className="d-flex ">
                      <p className="text-justify">
                        <ul className="management">
                          <li className="special">
                            მუდმივი პროფესიული განვითარება
                          </li>
                          <li className="special">
                            მომსახურების სფეროს გაფართოება
                          </li>
                          <li className="special">
                            კვალიფიციური მომსახურების შეთავაზება
                          </li>
                          <li className="special">
                            სანდო და საიმედო კომპანიის რეპუტაციის შენარჩუნება
                          </li>
                          <li className="special">
                            საქართველოს ბაზრის ლიდერობა
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 min-vh-25">
                  <div className="column text-center">
                    <img src={priorities} alt="" />
                    <h5 className="p-2 color-emg">პრიორიტეტები</h5>
                    <div className="d-flex ">
                      <p className="text-justify">
                        <ul className="management">
                          <li className="special">მიუკერძოებლობა</li>
                          <li className="special">სანდოობა</li>
                          <li className="special">
                            მომსახურების უმაღლესი ხარისხი
                          </li>
                          <li className="special">გუნდური მუშაობა</li>
                          <li className="special">
                            მუდმივი ზრდა და განვითარება
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 min-vh-25 ">
                  <div className="column text-center ">
                    <img src={basicPrinciples} alt="" />
                    <h5 className="p-2 color-emg">ძირითადი პრინციპები</h5>
                    <div className="d-flex ">
                      <p className="text-justify">
                        <ul className="management">
                          <li className="special">
                            სამართლებრივი მოთხოვნებისა და რეგულაციების დაცვა
                          </li>
                          <li className="special">პრინციპულობა</li>
                          <li className="special">დამოუკიდებლობა</li>
                          <li className="special">ობიექტურობა</li>
                          <li className="special">
                            ადგილობრივი და საერთაშორისო სტანდარტებით
                            ხელმძღვანელობა
                          </li>
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
