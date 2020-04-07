import React, { Component } from "react";
import { Link } from "react-router-dom";
import qualityAndPermits from "../res/qualityandpermits.png";
import employeeQualification from "../res/employeequalification.png";
import qualityManagement from "../res/qualitymanagement.png";
import healthAndSafetyManagement from "../res/healthandsafetymanagement.png";

class QualityAndPermits extends Component {
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
              className="nav-item nav-link nav-link-emg active"
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
          id="nav-quality-and-permits"
          role="tabpanel"
          aria-labelledby="nav-quality-and-permits-tab"
        >
          <div className="container">
            <h1 className="currentPageTitle mt-3 pl-04">
              ხარისხი და პასუხისმგებლობა
            </h1>
          </div>
          <div className="fluid-container highlight">
            <div className="container">
              <div className="row p-5">
                <div className="col-sm-12 col-md-6 min-vh-25 ">
                  <div className="column text-center">
                    <img src={qualityAndPermits} alt="" />
                    <h5 className="p-2 color-emg">
                      ხარისხი და პასუხისმგებლობა
                    </h5>
                    <p className="text-justify">
                      საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი
                      სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა
                      მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი
                      დაბეჭდა. მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა,
                      არამედ მან დღემდე, ელექტრონული ტიპოგრაფიის დრომდეც
                      უცვლელად მოაღწია.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 min-vh-25 ">
                  <div className="column text-center">
                    <img src={employeeQualification} alt="" />
                    <h5 className="p-2 color-emg">
                      თანამშრომლების კვალიფიკაცია
                    </h5>
                    <p className="text-justify">
                      საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი
                      სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა
                      მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი
                      დაბეჭდა. მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა,
                      არამედ მან დღემდე, ელექტრონული ტიპოგრაფიის დრომდეც
                      უცვლელად მოაღწია.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 min-vh-25">
                  <div className="column text-center">
                    <img src={qualityManagement} alt="" />
                    <h5 className="p-2 color-emg">ხარისხის კონტროლი</h5>
                    <p className="text-justify">
                      საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი
                      სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა
                      მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი
                      დაბეჭდა. მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა,
                      არამედ მან დღემდე, ელექტრონული ტიპოგრაფიის დრომდეც
                      უცვლელად მოაღწია.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 min-vh-25">
                  <div className="column text-center">
                    <img src={healthAndSafetyManagement} alt="" />
                    <h5 className="p-2 color-emg">
                      ჯანმრთელობის და უსაფრთხოების მენეჯმენტი
                    </h5>
                    <p className="text-justify">
                      საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი
                      სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა
                      მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი
                      დაბეჭდა. მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა,
                      არამედ მან დღემდე, ელექტრონული ტიპოგრაფიის დრომდეც
                      უცვლელად მოაღწია.
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

export default QualityAndPermits;
