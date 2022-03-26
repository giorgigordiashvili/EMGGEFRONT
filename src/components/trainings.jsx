import React, { Component } from "react";
import AboutHeader from "./shared/aboutHeader.jsx";

class Training extends Component {
  render() {
    return (
      <div>
        <div className="thumbnail" />
        <AboutHeader active="trainings" />

        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="container">
              <h1 className="currentPageTitle mt-3 col-12 col-md-12 pl-04">
                ტრენინგები
              </h1>
            </div>
            <div className="fluid-container highlight p-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 pl-04 dejavu">
                    „საინჟინრო მონიტორინგის ჯგუფის“ ფარგლებში ფუნქციონირებს
                    ტრენინგცენტრი, ორიენტირებული კადრების მუდმივ
                    ზრდა-განვითარებაზე, კვალიფიკაციის ამაღლებაზე, ორგანიზაციის
                    მომსახურების ხარისხის გაუმჯობესებასა და კორპორაციული
                    კულტურის სრულყოფაზე. <br /> <br />
                    <span className="text-justify">
                      ჩატარებული ტრენინგები:
                      <br />
                      <br />
                      <ul className="management">
                        <li className="text-justify special">
                          ინსპექტირების პროცესის განხორციელების მეთოდები
                          (ოქტომბერი, 2019);
                        </li>
                        <li className="text-justify special">
                          ინსპექტირების პროცესის განხორციელების მეთოდები,
                          დაზუსტება-სწავლება, რესურსების, საშუალებების,
                          მოწყობილობებისა და ტექნიკური მოთხოვნების მიმოხილვა
                          (ივნისი, 2019);
                        </li>
                        <li className="text-justify special">
                          ხარისხის მართვის სისტემის დოკუმენტების გაცნობა
                          (აპრილი, 2019);
                        </li>
                        <li className="text-justify special">
                          სსტ/იეკ 17020:2012/2013 საერთაშორისო სტანდარტების
                          მოთხოვნების ზოგადი მიმოხილვა (აპრილი, 2019).
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

export default Training;
