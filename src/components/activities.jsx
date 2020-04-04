import React, { Component } from "react";

class Activities extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="container pt-8">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link nav-link-emg active p-04"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-governance"
              aria-selected="true"
            >
              MARKETS
            </a>
            <a
              className="nav-item nav-link nav-link-emg p-04"
              id="nav-strategic-vision-tab"
              data-toggle="tab"
              href="#nav-strategic-vision"
              role="tab"
              aria-controls="nav-strategic-vision"
              aria-selected="false"
            >
              SERVICES
            </a>
            <a
              className="nav-item nav-link nav-link-emg p-04"
              id="nav-quality-and-permits-tab"
              data-toggle="tab"
              href="#nav-quality-and-permits"
              role="tab"
              aria-controls="nav-quality-and-permits"
              aria-selected="false"
            >
              PRICES
            </a>
          </div>
        </nav>
        {/* NAV END */}
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="container ">
              <h1 className="currentPageTitle pl-04">ACTIVITIES</h1>
              <h5 className="color-emg pb-4 pl-04">FIELD OF ACTIVITIES</h5>
            </div>
            <div className="fluid-container highlight p-3">
              <div className="container">
                <h5 className="pt-2 pb-2 pl-04">
                  COMPANY ACTIVITY SECTORS AND INDUSTRIES
                </h5>
                <div className="row pl-03">
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        alt="Highways and roads"
                        src="https://emg.groot.ge/activities/1.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        alt="Cooling heating ventilation"
                        src="https://emg.groot.ge/activities/2.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        alt="railway"
                        src="https://emg.groot.ge/activities/3.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        alt="water and sewage systems"
                        src="https://emg.groot.ge/activities/4.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        alt="electrification systems"
                        src="https://emg.groot.ge/activities/5.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        alt="energy"
                        src="https://emg.groot.ge/activities/6.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        alt="bridges, tunnels, underground"
                        src="https://emg.groot.ge/activities/7.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        alt="geotechnical engineering"
                        src="https://emg.groot.ge/activities/8.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        alt="communication, it systems"
                        src="https://emg.groot.ge/activities/9.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        alt="civil and industrial engineering"
                        src="https://emg.groot.ge/activities/10.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        alt="cities, urban engineering"
                        src="https://emg.groot.ge/activities/11.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        alt="aviation engineering airports"
                        src="https://emg.groot.ge/activities/12.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        alt="marine engineering"
                        src="https://emg.groot.ge/activities/13.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        alt="gas and oil systems"
                        src="https://emg.groot.ge/activities/14.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-strategic-vision"
            role="tabpanel"
            aria-labelledby="nav-strategic-vision-tab"
          >
            <div className="container">
              <h1 className="currentPageTitle pl-04">ACTIVITIES</h1>
              <h5 className="color-emg pb-4 pl-04">SERVICES</h5>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h6>SHORT DESCRIPTION</h6>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Totam quibusdam aspernatur minus assumenda voluptate,
                    voluptatibus explicabo, deserunt provident quis ipsa placeat
                    numquam nobis quam ratione vel atque velit voluptatem ullam.
                    Quae, eum. Dolores aperiam debitis, cupiditate, repellendus
                    ab officia dolor quae tempora, voluptatem blanditiis nihil
                    voluptas quas? Est dolore molestiae omnis asperiores porro
                    facere possimus! Saepe suscipit sint ipsam nisi! Impedit,
                    cum asperiores ipsam eius beatae nobis, inventore minima
                    cumque est omnis tempora eveniet aperiam explicabo maxime.
                    Est eum iusto voluptas? Nesciunt corporis tenetur non natus
                    quos saepe perspiciatis
                  </p>
                </div>
                <div className="col-6">
                  <img
                    src="http://emg.ge/wp-content/uploads/2018/11/struktura.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <h6 className="pl-04">LIST OF SERVICES</h6>
              <div className="row">
                <div className="col-6">
                  <div className="col" style={{ height: "50vh" }}>
                    <div className="row border border-dark m-2 h-50 justify-content-center">
                      <h3 className="color-emg ">
                        <img
                          src="/img/11.png"
                          alt=""
                          className="img-fluid p-1"
                        />
                        Inspection
                      </h3>
                    </div>
                    <div className="row border border-dark m-2 h-50 justify-content-center ">
                      <h3 className="color-emg ">
                        <img
                          src="/img/11.png"
                          alt=""
                          className="img-fluid p-1"
                        />
                        Inspection
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-6" style={{ height: "50vh" }}>
                  <div className="row border border-dark m-2 h-25 justify-content-center ">
                    <h3 className="color-emg ">
                      <img src="/img/11.png" alt="" className="img-fluid p-1" />
                      Inspection
                    </h3>
                  </div>
                  <div className="row border border-dark m-2 h-75 justify-content-center">
                    <h3 className="color-emg ">
                      <img src="/img/11.png" alt="" className="img-fluid p-1" />
                      Inspection
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-quality-and-permits"
            role="tabpanel"
            aria-labelledby="nav-quality-and-permits-tab"
          >
            <div className="container">
              <h1 className="currentPageTitle pl-04">ACTIVITIES</h1>
              <h5 className="color-emg pb-4 pl-04">PRICES</h5>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h6>SHORT DESCRIPTION</h6>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Totam quibusdam aspernatur minus assumenda voluptate,
                    voluptatibus explicabo, deserunt provident quis ipsa placeat
                    numquam nobis quam ratione vel atque velit voluptatem ullam.
                    Quae, eum. Dolores aperiam debitis, cupiditate, repellendus
                    ab officia dolor quae tempora, voluptatem blanditiis nihil
                    voluptas quas? Est dolore molestiae omnis asperiores porro
                    facere possimus! Saepe suscipit sint ipsam nisi! Impedit,
                    cum asperiores ipsam eius beatae nobis, inventore minima
                    cumque est omnis tempora eveniet aperiam explicabo maxime.
                    Est eum iusto voluptas? Nesciunt corporis tenetur non natus
                    quos saepe perspiciatis
                  </p>
                </div>
                <div className="col-6">
                  <img
                    src="http://emg.ge/wp-content/uploads/2018/11/struktura.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-5"></div>
      </React.Fragment>
    );
  }
}

export default Activities;
