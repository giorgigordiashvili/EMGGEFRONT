import React, { Component } from "react";
import { Link } from "react-router-dom";

class Services extends Component {
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
              to="/activities/engineering"
            >
              საინჟინრო მიმართულება
            </Link>
            <Link
              className="nav-item nav-link nav-link-emg active"
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
                მომსახურება
              </h1>
            </div>
            <div className="fluid-container highlight p-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 pl-04">
                    <span className="text-justify dejavu">
                      <ul className="management">
                        <li className="text-justify special">
                          პროექტის ინსპექტირება, ექსპერტიზა;
                        </li>
                        <li className="text-justify special">
                          ობიექტის ხარჯთაღრიცხვის ინსპექტირება, ექსპერტიზა;
                        </li>
                        <li className="text-justify special">
                          შესრულებული სამუშაოების ინსპექტირება, ექსპერტიზა;
                        </li>
                        <li className="text-justify special">
                          ტექნიკური პირობების ინსპექტირება, ექსპერტიზა;
                        </li>
                        <li className="text-justify special">
                          სახანძრო უსაფრთხოების ინსპექტირება, ექსპერტიზა;
                        </li>
                        <li className="text-justify special">ენერგეტიკა;</li>
                        <li className="text-justify special">
                          საგზაო უსაფრთხოების ინსპექტირება, ექსპერტიზა;
                        </li>
                        <li className="text-justify special">
                          შრომითი უსაფრთხოების HSE ინსპექტირება, ექსპერტიზა;
                        </li>
                        <li className="text-justify special">
                          სამშენებლო სამუშაოების ტექნიკური ზედამხედველობა;
                        </li>
                        <li className="text-justify special">
                          მშენებლობის მენეჯმენტი:
                        </li>
                        <li className="text-justify ml-5 deph">
                          სამშენებლო სამუშაოების ხარისხის, მოცულობების,
                          ხარჯების, ვადების მართვა (კონტროლი, მონიტორინგი,
                          შეფასება);
                        </li>
                        <li className="text-justify ml-5 deph">
                          პროექტის მართვა;
                        </li>
                        <li className="text-justify ml-5 deph">
                          კონტრაქტის მართვა;
                        </li>
                        <li className="text-justify ml-5 deph">
                          რისკების მართვა;
                        </li>
                        <li className="text-justify ml-5 deph">
                          სამშენებლო ლოგისტიკის წარმოება;
                        </li>
                        <li className="text-justify ml-5 deph">
                          მონაცემთა აღრიცხვა, მართვა და კონტროლი.
                        </li>

                        <li className="text-justify special">
                          საკონსულტაციო მომსახურება:
                        </li>
                        <li className="text-justify ml-5 deph">
                          სამშენებლო ლოგისტიკის მართვა და კონტროლი;
                        </li>
                        <li className="text-justify ml-5 deph">
                          სამშენებლო-საექსპლოატაციო კონსულტაციები;
                        </li>
                        <li className="text-justify ml-5 deph">
                          სამშენებლო ლოგისტიკისა და შესასრულებელი სამუშაოების
                          მოცულობების გეგმა-გრაფიკების შემუშავება, სამუშაოების
                          შესრულების გეგმის მართვა და მონაცემთა აღრიცხვა;
                        </li>
                        <li className="text-justify ml-5 deph">
                          სამშენებლო ხარჯების მართვა, აღრიცხვა და კონტროლი;
                        </li>
                        <li className="text-justify ml-5 deph">
                          ხარჯთაღრიცხვებისა და შესრულებული სამუშაოების
                          ანგარიშების წარმოება;
                        </li>
                        <li className="text-justify ml-5 deph">
                          სამშენებლო ლოგისტიკური ინსტრუქციების შემუშავება;
                        </li>
                        <li className="text-justify ml-5 deph">
                          უსაფრთხოების სისტემების დანერგვა და მართვა;
                        </li>
                        <li className="text-justify ml-5 deph">
                          სამშენებლო სამუშაოების წარმოებისთვის პროექტების
                          შერჩევა და შეფასება.
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

export default Services;
