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
              className="nav-item nav-link nav-link-emg active "
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
          id="nav-governance"
          role="tabpanel"
          aria-labelledby="nav-governance-tab"
        >
          <div className="container p-3"></div>
          <div className="container">
            <h1 className="currentPageTitle mt-3 col-12 col-md-12 pl-04">
              მენეჯმენტი
            </h1>
          </div>
          <div className="fluid-container ">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-12 pl-04">
                  <p>
                    კომპანიის მენეჯმენტი:{" "}
                    <ul>
                      <li>
                        • ეყრდნობა ორგანიზაციის კორპორაციული მართვის საუკეთესო
                        საერთაშორისო პრაქტიკას;{" "}
                      </li>
                      <li>
                        • აძლიერებს კორპორაციულ კულტურას და მიზნების შესაბამისად
                        სრულყოფს ორგანიზაციის სტრუქტურას;
                      </li>
                      <li>
                        {" "}
                        • თანამშრომლობს როგორც ადგილობრივ, ისე უცხოელ
                        პარტნიორებთან;
                      </li>
                      <li>
                        {" "}
                        • აფართოებს საქმიანობის სექტორულ და გეოგრაფიულ არეალს;{" "}
                      </li>
                      <li>
                        • საერთაშორისო გამოცდილების გათვალისწინებით საქართველოში
                        ნერგავს საინჟინრო და სამშენებლო სფეროში მსოფლიოში
                        აპრობირებულ თანამედროვე ტექნოლოგიებსა და ინოვაციებს.
                        მუდმივი ზრდა და განვითარება – ეს ჩვენი გუნდის მთავარი
                        პრინციპია.
                      </li>
                    </ul>
                  </p>
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

export default Governance;
