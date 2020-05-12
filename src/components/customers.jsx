import React, { Component } from "react";
import { Link } from "react-router-dom";

class Customers extends Component {
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
              className="nav-item nav-link nav-link-emg "
              to="/activities/services"
            >
              მომსახურება
            </Link>
            <Link
              className="nav-item nav-link nav-link-emg active"
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
                დამკვეთები
              </h1>
            </div>
            <div className="fluid-container highlight p-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 pl-04">
                    <span className="text-justify dejavu">
                      <p>
                        „საინჟინრო მონიტორინგის ჯგუფი“ ემსახურება სამშენებლო
                        სფეროში წარმოდგენილ სხვადასხვა ტიპის ადგილობრივ და
                        საერთაშორისო ორგანიზაციებს.
                      </p>
                      <p>
                        კომპანიამ, დაარსების დღიდან, 1000-ზე მეტ დამკვეთთან
                        ითანამშრომლა და 4000-ზე მეტი პროექტი განახორციელა.
                      </p>
                      <p>
                        ბოლო ერთი წლის განმავლობაში შესრულებული პროექტების
                        ჯამურმა ღირებულებამ შეადგინა 800 მლნ ლარი.
                      </p>
                      <p>„საინჟინრო მონიტორინგის ჯგუფი“ თანამშრომლობს:</p>
                      <ul className="management">
                        <li className="text-justify special">
                          სხვადასხვა სახელმწიფო სტრუქტურებთან და ფონდებთან,
                          ესენია:
                        </li>
                        <li className="text-justify ">
                          - საქართველოს გარემოს დაცვისა და სოფლის მეურნეობის
                          სამინისტრო;
                        </li>
                        <li className="text-justify ">
                          - საქართველოს საავტომობილო გზების დეპარტამენტი;
                        </li>
                        <li className="text-justify ">
                          - საქართველოს თანაინვესტირების ფონდი;
                        </li>
                        <li className="text-justify ">
                          - საქართველოს ენერგეტიკის განვითარების ფონდი;
                        </li>
                        <li className="text-justify ">
                          - საქართველოს მუნიციპალური განვითარების ფონდი;
                        </li>
                        <li className="text-justify ">
                          - საქართველოს ტურიზმის განვითარების ფონდი;
                        </li>
                        <li className="text-justify ">
                          - სოფლის მეურნეობის განვითარების საერთაშორისო ფონდი;
                        </li>
                        <li className="text-justify ">- საპარტნიორო ფონდი.</li>
                        <li className="text-justify special">
                          იმერეთისა და კახეთის რეგიონების 20 მუნიციპალიტეტთან,
                          ესენია:
                        </li>
                        <li className="text-justify ">
                          - ქუთაისის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - ვანის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - თერჯოლის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - საჩხერის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - ტყიბულის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - წყალტუბოს მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - ხონის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - ბაღდათის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - ზესტაფონის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - სამტრედიის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - ჭიათურის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - ხარაგაულის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - თელავის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - ახმეტის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - გურჯაანის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - დედოფლისწყაროს მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - ლაგოდეხის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - საგარეჯოს მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - სიღნაღის მუნიციპალიტეტი;
                        </li>
                        <li className="text-justify ">
                          - ყვარლის მუნიციპალიტეტი.
                        </li>
                        <li className="text-justify special">
                          ადგილობრივ და საერთაშორისო სამშენებლო, საპროექტო და
                          საფინანსო ორგანიზაციებთან.
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

export default Customers;
