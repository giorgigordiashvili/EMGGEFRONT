import React, { Component } from "react";
import { Link } from "react-router-dom";

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
              ხარისხი და ნებართვა
            </Link>

            <Link
              className="nav-item nav-link nav-link-emg"
              to="/about/partners"
            >
              პარტნიორები
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
          <div className="container p-3"></div>
          <div className="container">
            <h1 className="currentPageTitle mt-3 pl-04">სტრატეგიული ხედვა</h1>
          </div>
          <div className="fluid-container highlight">
            <div className="container">
              <div className="row p-5">
                <div className="col-sm-12 col-md-6 min-vh-25 ">
                  <div className="column text-center">
                    <img src="https://emg.groot.ge/1.png" alt="" />
                    <p className="p-2 color-emg">ძირითადი პრინციპები</p>
                    <ul className="str">
                      <li>
                        სამართლებრივი მოთხოვნებისა და რეგულაციების დაცვა;{" "}
                      </li>
                      <li>პრინციპულობა;</li>
                      <li>დამოუკიდებლობა;</li>
                      <li>ობიექტურობა</li>
                      <li>საერთაშორისო სტანდარტებით ხელმძღვანელობა.</li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 min-vh-25 ">
                  <div className="column text-center">
                    <img src="https://emg.groot.ge/2.png" alt="" />
                    <p className="p-2 color-emg">მიზნები</p>
                    <ul className="str">
                      <li>მუდმივი პროფესიული განვითარება</li>
                      <li>მომსახურების სფეროს გაფართოება</li>
                      <li>კვალიფიციური მომსახურების შეთავაზება</li>
                      <li>სანდო და საიმედო კომპანიის რეპუტაციის შენარჩუნება</li>
                      <li>საქართველოს ბაზრის ლიდერობა</li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 min-vh-25">
                  <div className="column text-center">
                    <img src="https://emg.groot.ge/3.png" alt="" />
                    <p className="p-2 color-emg">მისია</p>

                    <ul className="str">
                      <li>
                        საერთაშორისო სტანდარტების დამკვიდრება ადგილობრივ ბაზარზე
                      </li>
                      <li>
                        საუკეთესო საინჟინრო გადაწყვეტილებების მიღების სწორი
                        პრაქტიკის დანერგვა
                      </li>
                      <li>
                        ინსპექტირების, ზედამხედველობისა და ზოგადად, სამშენებლო
                        სექტორის განვითარება მსოფლიოს ინოვაციური ტენდენციების
                        შესაბამისად
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 min-vh-25">
                  <div className="column text-center">
                    <img src="https://emg.groot.ge/4.png" alt="" />
                    <p className="p-2 color-emg">პრიორიტეტები</p>
                    <ul className="str">
                      <li>მიუკერძოებლობა</li>
                      <li>სანდოობა</li>
                      <li>მომსახურების უმაღლესი ხარისხი</li>
                      <li>გუნდური მუშაობა</li>
                      <li>მუდმივი ზრდა და განვითარება</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container p-5"></div>
        </div>
      </div>
    );
  }
}

export default StrategicVision;
