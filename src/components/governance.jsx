import React, { Component } from "react";
import { Link } from "react-router-dom";

class Governance extends Component {
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
              className="nav-item nav-link nav-link-emg active"
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
              to="/about/branches"
            >
              ფილიალები
            </Link>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="container">
              <h1 className="currentPageTitle mt-3 col-12 col-md-12 pl-04">
                მმართველობა
              </h1>
              <h5 className="color-emg pb-4 col-12 col-md-12 pl-04">
                მენეჯმენტი
              </h5>
            </div>
            <div className="fluid-container highlight p-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 pl-04 par">
                    <p>
                      კომპანიის მენეჯმენტი:
                      <p></p>
                      <ul>
                        <li>
                          • ეყრდნობა ორგანიზაციის კორპორაციული მართვის საუკეთესო
                          საერთაშორისო პრაქტიკას;
                        </li>
                        <li>
                          • აძლიერებს კორპორაციულ კულტურას და მიზნების
                          შესაბამისად სრულყოფს ორგანიზაციის სტრუქტურას;
                        </li>
                        <li>
                          • თანამშრომლობს როგორც ადგილობრივ, ისე უცხოელ
                          პარტნიორებთან;
                        </li>
                        <li>
                          • აფართოებს საქმიანობის სექტორულ და გეოგრაფიულ არეალს;
                        </li>
                        <li>
                          • საერთაშორისო გამოცდილების გათვალისწინებით
                          საქართველოში ნერგავს საინჟინრო და სამშენებლო სფეროში
                          მსოფლიოში აპრობირებულ თანამედროვე ტექნოლოგიებსა და
                          ინოვაციებს.
                        </li>
                      </ul>
                      მუდმივი ზრდა და განვითარება – ეს ჩვენი გუნდის მთავარი
                      პრინციპია.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container p-4"></div>
        </div>
      </div>
    );
  }
}

export default Governance;
