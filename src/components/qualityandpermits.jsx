import React, { Component } from "react";
import qualityAndPermits from "../res/qualityandpermits.png";
import employeeQualification from "../res/employeequalification.png";
import qualityManagement from "../res/qualitymanagement.png";
import healthAndSafetyManagement from "../res/healthandsafetymanagement.png";
import AboutHeader from "./shared/aboutHeader";

class QualityAndPermits extends Component {
  render() {
    return (
      <div>
        <div className="thumbnail" />
        <AboutHeader active="qualityandpermits" />

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
              <div className="row pt-5 pb-5">
                <div className="col-sm-12 col-md-6 min-vh-25 ">
                  <div className="column text-center">
                    <img src={qualityAndPermits} alt="" />
                    <h5 className="p-2 color-emg">აკრედიტაცია</h5>
                    <p className="text-justify">
                      შპს „საინჟინრო მონიტორინგის ჯგუფი“ არის A ტიპის
                      ინსპექტირების ორგანო, რომელიც აკრედიტირებულია სსიპ
                      "აკრედიტაციის ერთიანი ეროვნული ორგანოს, აკრედიტაციის
                      ცენტრის" მიერ SST ISO / IEC 17020: 2012/2013 საერთაშორისო
                      სტანდარტების შესაბამისად და აღიარებულია EA (ევროპული
                      აკრედიტაცია) გენერალური ასამბლეას მიერ. აკრედიტაციის
                      მოწმობის ს/კ: GAC-IB-0320
                    </p>
                    <p className="text-justify">
                      ასევე, კომპანიამ წარმატებით გაიარა ISO სერტიფიკაციის ყველა
                      მოთხოვნა 2021 წლის ივლისში და 2021 წლის 9 აგვისტოს მიიღო
                      სერტიფიკატი TÜV SÜD Management Service GmbH–გან.
                      (სერტიფიკატის რეგისტრაციის ნომერი: 12 100 62504 TMS.)
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 min-vh-25 ">
                  <div className="column text-center">
                    <img src={employeeQualification} alt="" />
                    <h5 className="p-2 color-emg">საერთაშორისო ურთიერთობები</h5>
                    <p className="text-justify">
                      ორგანიზაცია მჭიდროდ თანამშრომლობს როგორც ანალოგიური
                      პროფილის, ისე მომიჯნავე სფეროების მოწინავე საერთაშორისო
                      კომპანიებთან. გამოცდილების ინტენსიური გაზიარება ცოდნის
                      გაღრმავების, მომსახურების სრულყოფისა და თანამშრომლების
                      პროფესიული განვითარების საშუალებას იძლევა.
                    </p>
                    <p className="text-justify">
                      „საინჟინრო მონიტორინგის ჯგუფი“, უცხოელი და ადგილობრივი
                      პარტნიორების კოორდინაციის შედეგად, წარმატებით ახორციელებს
                      ლოკალური და საერთაშორისო ინვესტიციებით დაფინანსებულ
                      მასშტაბურ პროექტებს და მონაწილეობს მსხვილ ინფრასტრუქტურულ
                      ტენდერებში.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 min-vh-25">
                  <div className="column text-center">
                    <img src={qualityManagement} alt="" />
                    <h5 className="p-2 color-emg">
                      თანამშრომლების კვალიფიკაცია
                    </h5>
                    <p className="text-justify">
                      „საინჟინრო მონიტორინგის ჯგუფი“ დაკომპლექტებულია
                      მრავალწლიანი სამუშაო სტაჟისა და მდიდარი გამოცდილების
                      მქონე, მაღალკვალიფიციური, აკრედიტებული ადგილობრივი და
                      უცხოელი სპეციალისტებით: ინჟინრებით, არქიტექტორებით,
                      ექსპერტებით, ზედამხედველებით, ტექნიკური და ხარისხის
                      კონტროლის მენეჯერებით.
                    </p>
                    <p className="text-justify">
                      კომპანიაში ასევე ფუნქციონირებს რისკების მართვის,
                      ბიზნესგანვითარების, იურიდიული და საფინანსო მომსახურების,
                      საინფორმაციო ტექნოლოგიების, მარკეტინგისა და
                      საზოგადოებასთან ურთიერთობის სამსახურები.
                    </p>
                    <p className="text-justify">
                      ამჟამად ორგანიზაციაში დასაქმებულია 350-ზე მეტი
                      თანამშრომელი, რომელთა რაოდენობა მუდმივად იზრდება.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 min-vh-25">
                  <div className="column text-center">
                    <img src={healthAndSafetyManagement} alt="" />
                    <h5 className="p-2 color-emg">
                      ჯანმრთელობა და უსაფრთხოება
                    </h5>
                    <p className="text-justify">
                      თანამშრომლების ჯანმრთელობისა და უსაფრთხოების
                      უზრუნველსაყოფად ორგანიზაციაში დანერგილია ჯანმრთელობისა და
                      უსაფრთხოების მართვის სისტემა. კომპანია ხელმძღვანელობს
                      ევროპული სტანდარტების დირექტივით 2013/35/EU, რომელიც
                      გულისხმობს რისკების იდენტიფიკაციას, შეფასებასა და კონტროლს
                      დასაქმებულთა სამუშაო გარემოში.
                    </p>
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

export default QualityAndPermits;
