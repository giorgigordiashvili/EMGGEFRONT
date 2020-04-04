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
              WHO WE ARE
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
              GOVERNANCE
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
              STRATEGIC VISION
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
              QUALITY AND PERMITS
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
              PARTNERS
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
              BRANCHES
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
            <div className="container ">
              <h1 className="currentPageTitle mt-3 col-12 col-md-12 pl-04">
                ABOUT US
              </h1>
              <h5 className="color-emg pb-4 col-12 col-md-12 pl-04">
                ENGINEERING MONITORING GROUP
              </h5>
            </div>
            <div className="fluid-container p-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 pl-04">
                    <p>
                      Engineering Monitoring Group LLC as A type accredited
                      inspection body, over the last few years, has been
                      actively working on Georgian Market. By attracting local
                      and international intellectual resources, adamant
                      protection of internationally recognized rules,
                      regulations and values of Inspecting bodies and team work
                      allowed company to find itself on Georgian market as one
                      of the leading inspection organizations. For the high
                      quality, professionalism and constant development of
                      services, Engineering Monitoring Group has gained on
                      Georgia's construction sector trust and respect, which
                      reflected a sharp rise in market share and
                      competitiveness. Engineering Monitoring Group LLC operates
                      in all sectors of infrastructural construction sphere in
                      Georgia. Apart from the head office located in Tbilisi,
                      our company is represented by several regional offices and
                      serves the construction site in any region of Georgia
                      without restriction. The company management is focused on
                      the best international practice of organizational
                      corporate management systems, cooperating with
                      international and local partners, on the expansion of
                      sectoral and geographical area of services and activities,
                      introduction of international experience and technologies
                      in engineering in Georgia. A number of projects have
                      already been implemented with partners in this direction.
                      Much more is planned to do. Permanent growth and
                      development is the main priority of our company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container p-5"></div>
          </div>

          <div
            className="tab-pane fade show"
            id="nav-governance"
            role="tabpanel"
            aria-labelledby="nav-governance-tab"
          >
            <div className="container">
              <h1 className="currentPageTitle mt-3 col-12 col-md-12 pl-04">
                Structure
              </h1>
              <h5 className="color-emg pb-4 col-12 col-md-12 pl-04">
                ENGINEERING MONITORING GROUP
              </h5>
            </div>
            <div className="fluid-container p-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-12 pl-04">
                    <p>
                      Engineering Monitoring Group LLC as A type accredited
                      inspection body, over the last few years, has been
                      actively working on Georgian Market. By attracting local
                      and international intellectual resources, adamant
                      protection of internationally recognized rules,
                      regulations and values of Inspecting bodies and team work
                      allowed company to find itself on Georgian market as one
                      of the leading inspection organizations. For the high
                      quality, professionalism and constant development of
                      services, Engineering Monitoring Group has gained on
                      Georgia's construction sector trust and respect, which
                      reflected a sharp rise in market share and
                      competitiveness. Engineering Monitoring Group LLC operates
                      in all sectors of infrastructural construction sphere in
                      Georgia. Apart from the head office located in Tbilisi,
                      our company is represented by several regional offices and
                      serves the construction site in any region of Georgia
                      without restriction. The company management is focused on
                      the best international practice of organizational
                      corporate management systems, cooperating with
                      international and local partners, on the expansion of
                      sectoral and geographical area of services and activities,
                      introduction of international experience and technologies
                      in engineering in Georgia. A number of projects have
                      already been implemented with partners in this direction.
                      Much more is planned to do. Permanent growth and
                      development is the main priority of our company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container p-5"></div>
          </div>

          <div
            className="tab-pane fade"
            id="nav-strategic-vision"
            role="tabpanel"
            aria-labelledby="nav-strategic-vision-tab"
          >
            <div className="container">
              <h1 className="currentPageTitle mt-3 pl-04">Strategic Vision</h1>
              <h5 className="color-emg pb-4 pl-04">ORGANIZATION'S PLANS</h5>
            </div>
            <div className="fluid-container highlight">
              <div className="container">
                <div className="row p-5">
                  <div className="col-sm-12 col-md-6 min-vh-25 ">
                    <div className="column text-center">
                      <img src="https://emg.groot.ge/1.png" alt="" />
                      <p className="p-2 color-emg">COMPANY BASIC PRINCIPLES</p>
                      <ul className="str">
                        <li>
                          Protection of legal requirements and regulations
                        </li>
                        <li>Independence</li>
                        <li>Objectivity</li>
                        <li>
                          Working in accordance with international standards and
                          best practices
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 min-vh-25 ">
                    <div className="column text-center">
                      <img src="https://emg.groot.ge/2.png" alt="" />
                      <p className="p-2 color-emg">OUR GOALS</p>
                      <ul className="str">
                        <li>Nonstop improvement of professional level</li>
                        <li>Service according to international standards</li>
                        <li>
                          Continuous maintenance of high level of credibility
                          and trust
                        </li>
                        <li>Constant extension of service spheres</li>
                        <li>Leadership of the Georgian market</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 min-vh-25">
                    <div className="column text-center">
                      <img src="https://emg.groot.ge/3.png" alt="" />
                      <p className="p-2 color-emg">OUR MISSION</p>
                      <p className="text-left">
                        Introduction and implementation of international
                        standards, best engineering solutions, and correct
                        decision making practice as in inspection and
                        supervising, as weel as in the construction sector of
                        Georgia
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 min-vh-25">
                    <div className="column text-center">
                      <img src="https://emg.groot.ge/4.png" alt="" />
                      <p className="p-2 color-emg">OUR COMPANY'S PRIORITIES</p>
                      <ul className="str">
                        <li>Impartiality</li>
                        <li>Credibility</li>
                        <li>High quality service</li>
                        <li>Teamwork</li>
                        <li>Continuous growth and development</li>
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
            <div className="container">
              <h1 className="currentPageTitle mt-3 pl-04">Branches</h1>
              <div className="row">
                <div className="col-12 row">
                  <div
                    className="col-12"
                    style={{ margin: 0, fontSize: 40, textAlign: "center" }}
                  >
                    <img className="location" src={locationImage} alt="" />
                    <div className="column">
                      <p className="color-emg" style={{ margin: 0 }}>
                        Head office: Tbilisi
                      </p>
                      <p style={{ margin: 0, fontSize: 25 }}>
                        K. Kutateladze 8
                      </p>
                    </div>
                  </div>
                  <div className="container p-5"></div>

                  <div className="col-6 col-md-4 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        Kutaisi
                      </p>
                      <p>Tamar Mepe #66/68</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        Terjola
                      </p>
                      <p>Rustvelsi Street #99</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        Zestaponi
                      </p>
                      <p>G. Nikoadze #36</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        Chiatura{" "}
                      </p>
                      <p>Ninoshvili Street #5</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        Telavi
                      </p>
                      <p>Rustaveli Street #86</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        Tsnori
                      </p>
                      <p>Freedom Street #74</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container p-5"></div>
        </div>
      </div>
    );
  }
}

export default About;
