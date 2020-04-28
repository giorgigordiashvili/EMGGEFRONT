import React, { Component } from "react";
import { Link } from "react-router-dom";
import Manager from "./manager";
import managerOne from "../../src/res/pavle.png";
import managerTwo from "../../src/res/tamaz.png";
import managerThree from "../../src/res/mikheil.png";
import managerFour from "../../src/res/gia.png";

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
                  <div className="col-12 col-md-12 pl-04">
                    <span className="text-justify dejavu">
                      კომპანიის მენეჯმენტი:
                      <br />
                      <br />
                      <ul className="management">
                        <li className="text-justify ">
                          ეყრდნობა ორგანიზაციის კორპორაციული მართვის საუკეთესო
                          საერთაშორისო პრაქტიკას;
                        </li>
                        <li className="text-justify">
                          აძლიერებს კორპორაციულ კულტურას და მიზნების შესაბამისად
                          სრულყოფს ორგანიზაციის სტრუქტურას;
                        </li>
                        <li className="text-justify">
                          თანამშრომლობს როგორც ადგილობრივ, ისე უცხოელ
                          პარტნიორებთან;
                        </li>
                        <li className="text-justify">
                          აფართოებს საქმიანობის სექტორულ და გეოგრაფიულ არეალს;
                        </li>
                        <li className="text-justify">
                          საერთაშორისო გამოცდილების გათვალისწინებით საქართველოში
                          ნერგავს საინჟინრო და სამშენებლო სფეროში მსოფლიოში
                          აპრობირებულ თანამედროვე ტექნოლოგიებსა და ინოვაციებს.
                        </li>
                      </ul>
                      მუდმივი ზრდა და განვითარება – ეს ჩვენი გუნდის მთავარი
                      პრინციპია.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fluid-container highlight">
            <div className="container highlight pb-5 pt-3 pr-5 pl-5">
              <div className="row">
                <Manager
                  name="იოვანე სიხარულიძე"
                  img={
                    "https://www.hbwealthadvisors.com/sites/default/files/imagecache/team-sm/users/hbwealthadvisors/images/Generic_Placeholder_-_Profile2.jpg"
                  }
                  position="გენერალური დირექტორი"
                  id="manager1"
                  profession="მათემატიკოსი, ფინანსისტი"
                  education={[
                    "საქართველოს ტექნიკური უნივერსიტეტი - მაგისტრი, საბანკო საქმე",
                    "თბილისის სახელმწიფო უნივერსიტეტი - მაგისტრი, გამოყენებითი მათემატიკა და კომპიუტერული მეცნიერება",
                  ]}
                  experience="საბანკო სექტორში წამყვან პოზიციებზე მუშაობის 17-წლიანი სტაჟი"
                  work={{
                    pretext: "საქმიანობის სფერო",
                    text:
                      "5 წელზე მეტია მუშაობს ტექნოლოგიების, პროექტების მართვის, ინვესტირებისა და საკონსულტაციო მომსახურების, ბოლო 3 წელი კი - ინსპექტირების, ექსპერტიზისა და ზედამხედველობის მიმართულებით",
                  }}
                ></Manager>
                <Manager
                  name="გია ჩანტლაძე"
                  position="დირექტორი"
                  img={managerFour}
                  id="manager2"
                  profession="ინჟინერი"
                  education={[
                    "საქართველოს პოლიტექნიკური ინსტიტუტი - მაგისტრი, საავტომობილო გზების ინჟინერია",
                  ]}
                  experience="სახელმწიფო თუ კერძო სტრუქტურებში წამყვან პოზიციებზე მუშაობის 40-წლიანი სტაჟი"
                  work={{
                    pretext: "განხორციელებული პროექტები",
                    text:
                      "მისი უშუალო ზედამხედველობით განხორციელდა გზების, ხიდებისა და გვირაბების მშენებლობა-რეაბილიტაციისა და მოვლა-შენახვის 20-მდე მასშტაბური პროექტი საქართველოში",
                  }}
                ></Manager>
                <Manager
                  name="მიხეილ კიკოლაშვილი"
                  position="დირექტორი"
                  id="manager3"
                  img={managerThree}
                  profession="ინჟინერი"
                  education={[
                    "საქართველოს ტექნიკური უნივერსიტეტი – მაგისტრი, ინჟინერია",
                    "საქართველოს ტექნიკური უნივერსიტეტის სამშენებლო ფაკულტეტი – დოქტორანტი",
                    "საქართველოს ტექნიკური უნივერსიტეტის სამთო-გეოლოგიური ფაკულტეტი – სტუდენტი",
                  ]}
                  experience="სამშენებლო სფეროში მუშაობის 10-წლიანი სტაჟი როგორც საქართველოში, ისე მის საზღვრებს გარეთ"
                  work={{
                    pretext: "განხორციელებული პროექტები",
                    text:
                      "მისი პორტფოლიო მოიცავს საქართველოში,საფრანგეთსა და იტალიაში აშენებულ მრავალფუნქციურ სასტუმროებსა და საცხოვრებელ კორპუსებს (მთავარი კონსტრუქტორი), სხვადასხვა ფუნქციური დანიშნულების შენობა-ნაგებობებს (ინსპექტორი)",
                  }}
                ></Manager>
                <Manager
                  name="თამაზ თხილაიშვილი"
                  position="დირექტორთა საბჭოს წევრი"
                  id="manager4"
                  img={managerTwo}
                  profession="ინჟინერ-მშენებელი"
                  education={[
                    "საქართველოს პოლიტექნიკური ინსტიტუტის სამშენებლო ფაკულტეტი, სამრეწველო და სამოქალაქო მშენებლობა",
                  ]}
                  experience="სამშენებლო სფეროში მუშაობის 50-წლიანი სტაჟი
                  როგორც სახელმწიფო, ისე კერძო ორგანიზაციებში"
                  work={{
                    pretext: "განხორციელებული პროექტები",
                    text:
                      "აქვს განსხვავებული ფუნქციური დანიშნულების ობიექტებზე მუშაობის მრავალწლიანი გამოცდილება. მის, როგორც მთავარი სპეციალისტის, პროფესიულ ანგარიშზე ათობით პროექტი ირიცხება დედაქალაქსა და რეგიონებში",
                  }}
                ></Manager>
                <Manager
                  name="პავლე სახანბერიძე"
                  position="ხარისხის მართვის დეპარტამენტის უფროსი"
                  id="manager5"
                  img={managerOne}
                  profession="არქიტექტორი"
                  education={[
                    "ტვენტეს ტექნოლოგიური უნივერსიტეტი (ჰოლანდია) – მაგისტრი, მშენებლობის მართვა",
                    "შვედეთის სამეფო ტექნოლოგიური უნივერსიტეტი (შვედეთი) – კურსდამთავრებული, მიწის მართვის სამაგისტრო პროგრამა",
                    "საქართველოს ტექნიკური უნივერსიტეტის არქიტექტურისა და ურბანული დაგეგმარების ფაკულტეტი",
                  ]}
                  experience="არქიტექტურის სფეროში მუშაობის 20-წლიანი სტაჟი"
                  work={{
                    pretext: "განხორციელებული პროექტები",
                    text:
                      "შესრულებული აქვს 15-მდე მასშტაბური პროექტი თბილისსა და რეგიონებში, მათ შორის, სასტუმრო კომპლექსები, მულტიფუნქციური შენობები, საცხოვრებელი კორპუსები, ისტორიული ნაგებობების რეკონსტრუქცია და სხვა",
                  }}
                ></Manager>
              </div>
              {/* /.row */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Governance;
