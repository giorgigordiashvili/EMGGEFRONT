import React, { Component } from "react";
import { Link } from "react-router-dom";

class WhoWeAre extends Component {
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
                ვინ ვართ ჩვენ
              </h1>
              <h5 className="color-emg pb-4 col-12 col-md-12 pl-04">
                „საინჟინრო მონიტორინგის ჯგუფი“
              </h5>
            </div>
            <div className="fluid-container highlight p-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 pl-04">
                    <p className="text-justify par">
                      „საინჟინრო მონიტორინგის ჯგუფი“ 2016 წელს დაფუძნდა.
                      კომპანია A ტიპის ინსპექტირების აკრედიტებული ორგანოა და
                      საინჟინრო-საკონსულტაციო მომსახურებას უწევს სამშენებლო
                      სფეროს თითქმის ყველა დარგს.
                    </p>
                    <p className="text-justify par">
                      საერთაშორისო სტანდარტების მკაცრი დაცვით, პრინციპულობითა და
                      პროფესიული ღირებულებების ერთგულებით კომპანიამ დაარსების
                      დღიდან დაიმკვიდრა ინსპექტირების წამყვანი ორგანოს სტატუსი
                      ქართულ ბაზარზე. სამშენებლო სექტორის ნდობა და პატივისცემა
                      „საინჟინრო მონიტორინგის ჯგუფმა“ პროფესიონალიზმითა და
                      მომსახურების ხარისხით დაიმსახურა. მუდმივ განვითარებაზე
                      ორიენტაციამ, ადგილობრივი და საერთაშორისო ინტელექტუალური
                      რესურსების მოზიდვამ და გუნდურმა მუშაობამ სტაბილური წინსვლა
                      განაპირობა. ეს ყველაფერი, საბოლოოდ, ბაზრის წილისა და
                      კონკურენტუნარიანობის მკვეთრ ზრდაზე აისახა.
                    </p>
                    <p className="text-justify par">
                      „საინჟინრო მონიტორინგის ჯგუფის“ თბილისის სათავო და
                      რეგიონული ოფისები შეუზღუდავად ემსახურება სამშენებლო
                      ობიექტებს საქართველოს მთელ ტერიტორიაზე.
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

export default WhoWeAre;
