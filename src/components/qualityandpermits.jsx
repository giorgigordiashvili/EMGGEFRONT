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
                    <p className="p-2 color-emg">QUALITY AND PERMITS</p>
                    <p>
                      Engineering Monitoring Group LLC is A type inspection
                      company, which is accredited by LEPL “The Unified National
                      Body of Accreditation, Accreditation Center” by SST ISO /
                      IEC 17020: 2012/2013 according to the international
                      standards, and is recognised by the EA (European
                      Accreditation) General Assembly. Accreditation certificate
                      ID : GAC-IB-0274. Accreditation of the company’s ISO
                      standards is a guarantee, that our inspection reports are
                      in compatible with international standards, and is
                      acceptable for both Georgian governmental structures, as
                      well as for international organisations.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 min-vh-25 ">
                  <div className="column text-center">
                    <img src={employeeQualification} alt="" />
                    <p className="p-2 color-emg">EMPLOYEE QUALIFICATION</p>
                    <p>
                      The company is staffed by accredited, professional and
                      highly qualified local and foreign specialists with
                      several years of working experience: Engineers, technical
                      managers, experts, supervisors, quality control managers.
                      The company is also staffed with a range of professionals
                      and service companies, such as risk management,
                      information technology, marketing, business development,
                      public relations, legal and financial services, etc.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 min-vh-25">
                  <div className="column text-center">
                    <img src={qualityManagement} alt="" />
                    <p className="p-2 color-emg">Quality management</p>
                    <p className="text-left">
                      The company’s aim is to cooperate with strong
                      international companies working in similar spheres.
                      Intensive sharing of experience increases and deepens the
                      knowledge of the organization and personnel and helps to
                      accumulate the knowledge of high international standards.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 min-vh-25">
                  <div className="column text-center">
                    <img src={healthAndSafetyManagement} alt="" />
                    <p className="p-2 color-emg">
                      Health and Safety Management
                    </p>
                    <p>
                      A health and safety management system is a systematic
                      approach put in place by an employer to minimize the risk
                      of injury and illness. It involves identifying, assessing,
                      and controlling risks to workers in all workplace
                      operations. Engineering Monitoring Group is following to
                      the European standard Directive 2013/35/EU: The minimum
                      health and safety requirements regarding the exposure of
                      workers to the risks.
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
