import React, { Component } from "react";
import { Link } from "react-router-dom";

class Engineering extends Component {
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
              className="nav-item nav-link nav-link-emg active"
              to="/activities/engineering"
            >
              საინჟინრო მიმართულება
            </Link>
            <Link
              className="nav-item nav-link nav-link-emg "
              to="/activities/services"
            >
              მომსახურება
            </Link>
            <Link
              className="nav-item nav-link nav-link-emg "
              to="/activities/customers"
            >
              დამკვეთები
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
                საინჟინრო მიმართულება
              </h1>
            </div>
            <div className="fluid-container highlight p-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 pl-04">
                    <span className="text-justify dejavu">
                      <ul className="management">
                        <li className="text-justify special">
                          გზები და მაგისტრალები;
                        </li>
                        <li className="text-justify special">რკინიგზა;</li>
                        <li className="text-justify special">
                          საკანალიზაციო სისტემები და წყალმომარაგება (ჩამდინარე
                          წყლების, წყლის გამწმენდი ნაგებობებისა და სისტემების
                          ჩათვლით);
                        </li>
                        <li className="text-justify special">
                          ელექტრიფიკაცია;
                        </li>
                        <li className="text-justify special">
                          გათბობა/გაგრილება/ვენტილაცია;
                        </li>
                        <li className="text-justify special">ენერგეტიკა;</li>
                        <li className="text-justify special">
                          ხიდები, გვირაბები და მიწისქვეშა სხვა კონსტრუქციები;
                        </li>
                        <li className="text-justify special">
                          გეოტექნიკური ინჟინერია;
                        </li>
                        <li className="text-justify special">
                          სამოქალაქო და საწარმოო ინჟინერია/მშენებლობა;
                        </li>
                        <li className="text-justify special">
                          საკომუნიკაციო სისტემები;
                        </li>
                        <li className="text-justify special">
                          ქალაქები და ურბანული ინჟინერია/მშენებლობა;
                        </li>
                        <li className="text-justify special">
                          საავიაციო ინჟინერია/მშენებლობა;
                        </li>
                        <li className="text-justify special">
                          საზღვაო ინჟინერია/მშენებლობა;
                        </li>
                        <li className="text-justify special">
                          გაზისა და ნავთობის სისტემები.
                        </li>
                      </ul>
                    </span>
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

export default Engineering;
