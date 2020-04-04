import React, { Component } from "react";
import locationImage from "../res/location.png";
import Partner from "./partner";

class About extends Component {
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
            <a
              className="nav-item nav-link nav-link-emg active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-info"
              aria-selected="true"
            >
              ვინ ვართ ჩვენ
            </a>
            <a
              className="nav-item nav-link nav-link-emg "
              id="nav-governance-tab"
              data-toggle="tab"
              href="#nav-governance"
              role="tab"
              aria-controls="nav-governance"
              aria-selected="true"
            >
              მმართველობა
            </a>
            <a
              className="nav-item nav-link nav-link-emg"
              id="nav-strategic-vision-tab"
              data-toggle="tab"
              href="#nav-strategic-vision"
              role="tab"
              aria-controls="nav-strategic-vision"
              aria-selected="false"
            >
              სტრატეგიული ხედვა
            </a>
            <a
              className="nav-item nav-link nav-link-emg"
              id="nav-quality-and-permits-tab"
              data-toggle="tab"
              href="#nav-quality-and-permits"
              role="tab"
              aria-controls="nav-quality-and-permits"
              aria-selected="false"
            >
              ხარისხი და ნებართვა
            </a>
            {/* <a
              className="nav-item nav-link nav-link-emg"
              id="nav-training-tab"
              data-toggle="tab"
              href="#nav-training"
              role="tab"
              aria-controls="nav-training"
              aria-selected="false"
            >
              TRAINING
            </a> */}
            <a
              className="nav-item nav-link nav-link-emg"
              id="nav-partners-tab"
              data-toggle="tab"
              href="#nav-partners"
              role="tab"
              aria-controls="nav-partners"
              aria-selected="false"
            >
              პარტნიორები
            </a>
            <a
              className="nav-item nav-link nav-link-emg"
              id="nav-branches-tab"
              data-toggle="tab"
              href="#nav-branches"
              role="tab"
              aria-controls="nav-branches"
              aria-selected="false"
            >
              ფილიალები
            </a>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="container p-3"></div>
            <div className="container ">
              <h1 className="currentPageTitle mt-3 col-12 col-md-12 pl-04">
                ჩვენ შესახებ
              </h1>
              <h5 className="color-emg pb-4 col-12 col-md-12 pl-04">
                „საინჟინრო მონიტორინგის ჯგუფი“
              </h5>
            </div>
            <div className="fluid-container">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 pl-04">
                    <p className="text-justify">
                      „საინჟინრო მონიტორინგის ჯგუფი“ 2016 წელს დაფუძნდა.
                      კომპანია A ტიპის ინსპექტირების აკრედიტებული ორგანოა და
                      საინჟინრო-საკონსულტაციო მომსახურებას უწევს სამშენებლო
                      სფეროს თითქმის ყველა დარგს. საერთაშორისო სტანდარტების
                      მკაცრი დაცვით, პრინციპულობითა და პროფესიული ღირებულებების
                      ერთგულებით კომპანიამ დაარსების დღიდან დაიმკვიდრა
                      ინსპექტირების წამყვანი ორგანოს სტატუსი ქართულ ბაზარზე.
                      სამშენებლო სექტორის ნდობა და პატივისცემა „საინჟინრო
                      მონიტორინგის ჯგუფმა“ პროფესიონალიზმითა და მომსახურების
                      ხარისხით დაიმსახურა. მუდმივ განვითარებაზე ორიენტაციამ,
                      ადგილობრივი და საერთაშორისო ინტელექტუალური რესურსების
                      მოზიდვამ და გუნდურმა მუშაობამ სტაბილური წინსვლა
                      განაპირობა. ეს ყველაფერი, საბოლოოდ, ბაზრის წილისა და
                      კონკურენტუნარიანობის მკვეთრ ზრდაზე აისახა. „საინჟინრო
                      მონიტორინგის ჯგუფის“ თბილისის სათავო და რეგიონული ოფისები
                      შეუზღუდავად ემსახურება სამშენებლო ობიექტებს საქართველოს
                      მთელ ტერიტორიაზე.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container p-3"></div>
          </div>

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
                          • აძლიერებს კორპორაციულ კულტურას და მიზნების
                          შესაბამისად სრულყოფს ორგანიზაციის სტრუქტურას;
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
                          • საერთაშორისო გამოცდილების გათვალისწინებით
                          საქართველოში ნერგავს საინჟინრო და სამშენებლო სფეროში
                          მსოფლიოში აპრობირებულ თანამედროვე ტექნოლოგიებსა და
                          ინოვაციებს. მუდმივი ზრდა და განვითარება – ეს ჩვენი
                          გუნდის მთავარი პრინციპია.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container p-3"></div>
          </div>

          <div
            className="tab-pane fade"
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
                        <li>
                          სანდო და საიმედო კომპანიის რეპუტაციის შენარჩუნება
                        </li>
                        <li>საქართველოს ბაზრის ლიდერობა</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 min-vh-25">
                    <div className="column text-center">
                      <img src="https://emg.groot.ge/3.png" alt="" />
                      <p className="p-2 color-emg">მისია</p>
                      <p className="text-left">
                        <ul className="str">
                          <li>
                            საერთაშორისო სტანდარტების დამკვიდრება ადგილობრივ
                            ბაზარზე
                          </li>
                          <li>
                            საუკეთესო საინჟინრო გადაწყვეტილებების მიღების სწორი
                            პრაქტიკის დანერგვა
                          </li>
                          <li>
                            ინსპექტირების, ზედამხედველობისა და ზოგადად,
                            სამშენებლო სექტორის განვითარება მსოფლიოს ინოვაციური
                            ტენდენციების შესაბამისად
                          </li>
                        </ul>
                      </p>
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
          <div
            className="tab-pane fade"
            id="nav-quality-and-permits"
            role="tabpanel"
            aria-labelledby="nav-quality-and-permits-tab"
          >
            <div className="container">
              <h1 className="currentPageTitle mt-3 pl-04">
                QUALITY AND PERMITS
              </h1>
            </div>
            <div className="fluid-container highlight">
              <div className="container">
                <div className="row p-5">
                  <div className="col-sm-12 col-md-6 min-vh-25 ">
                    <div className="column text-center">
                      <img src="https://emg.groot.ge/5.png" alt="" />
                      <p className="p-2 color-emg">QUALITY AND PERMITS</p>
                      <p>
                        Engineering Monitoring Group LLC is A type inspection
                        company, which is accredited by LEPL “The Unified
                        National Body of Accreditation, Accreditation Center” by
                        SST ISO / IEC 17020: 2012/2013 according to the
                        international standards, and is recognised by the EA
                        (European Accreditation) General Assembly. Accreditation
                        certificate ID : GAC-IB-0274. Accreditation of the
                        company’s ISO standards is a guarantee, that our
                        inspection reports are in compatible with international
                        standards, and is acceptable for both Georgian
                        governmental structures, as well as for international
                        organisations.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 min-vh-25 ">
                    <div className="column text-center">
                      <img src="https://emg.groot.ge/6.png" alt="" />
                      <p className="p-2 color-emg">EMPLOYEE QUALIFICATION</p>
                      <p>
                        The company is staffed by accredited, professional and
                        highly qualified local and foreign specialists with
                        several years of working experience: Engineers,
                        technical managers, experts, supervisors, quality
                        control managers. The company is also staffed with a
                        range of professionals and service companies, such as
                        risk management, information technology, marketing,
                        business development, public relations, legal and
                        financial services, etc.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 min-vh-25">
                    <div className="column text-center">
                      <img src="https://emg.groot.ge/7.png" alt="" />
                      <p className="p-2 color-emg">Quality management</p>
                      <p className="text-left">
                        The company’s aim is to cooperate with strong
                        international companies working in similar spheres.
                        Intensive sharing of experience increases and deepens
                        the knowledge of the organization and personnel and
                        helps to accumulate the knowledge of high international
                        standards.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 min-vh-25">
                    <div className="column text-center">
                      <img src="https://emg.groot.ge/8.png" alt="" />
                      <p className="p-2 color-emg">
                        Health and Safety Management
                      </p>
                      <p>
                        A health and safety management system is a systematic
                        approach put in place by an employer to minimize the
                        risk of injury and illness. It involves identifying,
                        assessing, and controlling risks to workers in all
                        workplace operations. Engineering Monitoring Group is
                        following to the European standard Directive 2013/35/EU:
                        The minimum health and safety requirements regarding the
                        exposure of workers to the risks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container p-5"></div>
          </div>
          {/* <div
            className="tab-pane fade"
            id="nav-training"
            role="tabpanel"
            aria-labelledby="nav-training-tab"
          >
            training
          </div> */}
          <div
            className="tab-pane fade"
            id="nav-partners"
            role="tabpanel"
            aria-labelledby="nav-partners-tab"
          >
            <Partner
              onDeletePartner={this.props.onDeletePartner}
              user={this.props.user}
              partners={this.props.partners}
            ></Partner>
            <div className="container p-5"></div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-branches"
            role="tabpanel"
            aria-labelledby="nav-branches-tab"
          >
            <div className="fluid-container">
              <div className="container">
                <h1 className="currentPageTitle pl-04">ფილიალები</h1>
                <div className="row">
                  <div className="col-12 row">
                    <div
                      className="col-12"
                      style={{ margin: 0, fontSize: 40, textAlign: "center" }}
                    >
                      <img className="location" src={locationImage} alt="" />
                      <div className="column">
                        <p className="color-emg" style={{ margin: 0 }}>
                          სათაო ოფისი: თბილისი
                        </p>
                        <p style={{ margin: 0, fontSize: 25 }}>
                          კ. ქუთათელაძე 8
                        </p>
                      </div>
                    </div>
                    <div className="container p-5"></div>
                    <div className="col-6 col-md-4 row">
                      <img className="location" src={locationImage} alt="" />
                      <div className="column mt-3">
                        <p className="color-emg" style={{ margin: 0 }}>
                          ქუთაისი
                        </p>
                        <p>თამარ მეფე #66/68</p>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 row">
                      <img className="location" src={locationImage} alt="" />
                      <div className="column mt-3">
                        <p className="color-emg" style={{ margin: 0 }}>
                          თერჯოლა
                        </p>
                        <p>რუსთველსის ქუჩა #99</p>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 row">
                      <img className="location" src={locationImage} alt="" />
                      <div className="column mt-3">
                        <p className="color-emg" style={{ margin: 0 }}>
                          ზესტაფონი
                        </p>
                        <p>გ. ნიკოლაძე #36</p>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 row">
                      <img className="location" src={locationImage} alt="" />
                      <div className="column mt-3">
                        <p className="color-emg" style={{ margin: 0 }}>
                          ჭიათურა{" "}
                        </p>
                        <p>ნინოშვილის ქუჩა #5</p>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 row">
                      <img className="location" src={locationImage} alt="" />
                      <div className="column mt-3">
                        <p className="color-emg" style={{ margin: 0 }}>
                          თელავი
                        </p>
                        <p>რუსთაველის ქუჩა #86</p>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 row">
                      <img className="location" src={locationImage} alt="" />
                      <div className="column mt-3">
                        <p className="color-emg" style={{ margin: 0 }}>
                          წნორი
                        </p>
                        <p>თავისუფლების ქუჩა #74</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container p-5"></div>
            </div>
          </div>
          <div className="container p-5"></div>
        </div>
      </div>
    );
  }
}

export default About;
