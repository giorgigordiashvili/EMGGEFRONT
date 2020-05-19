import React, { Component } from "react";
import Moment from "react-moment";
import emgLogo from "../res/logoge.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import certOne from "../res/ea.jpg";
import certTwo from "../res/gac.png";
import certThree from "../res/powerpoint.png";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

class Home extends Component {
  state = {};

  render() {
    let { projectsOngoing, newss } = this.props;
    const projectsResponsive = {
      responsive: [
        {
          breakpoint: 1210,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };
    const responsive = {
      slidesToShow: newss.length > 3 ? 4 : newss.length % 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };

    return (
      <React.Fragment>
        <div className="slider fluid-container row justify-content-center">
          <div className="certs d-flex flex-row bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <a href={certTwo}>
                <img src={certTwo} width="60vh" alt="Accreditation" />
              </a>
            </div>
            <div className="p-2 bd-highlight">
              <a href={certOne}>
                <img src={certOne} width="60vh" alt="Accreditation" />
              </a>
            </div>
            <div className="p-2 bd-highlight">
              <a href={certThree}>
                <img src={certThree} width="60vh" alt="Presentation" />
              </a>
            </div>
          </div>
          <img
            src={emgLogo}
            className="align-self-center img-fluid p-4 logo"
            alt=""
          />
        </div>

        <div className="container">
          <h2 className="currentPageTitle pl-03">სიახლეები</h2>
        </div>
        <div className="fluid-container highlight pt-3 pb-3">
          <Slider className="container" {...responsive}>
            {newss.slice(0, 8).map((news) =>
              news.type !== "hidden" ? (
                <div key={news._id}>
                  <div className="card card-emg mr-4">
                    <Link className="home-news-link" to={"/news/" + news._id}>
                      <img
                        className="card-img-top home-card-img inner-shadow-emg"
                        src={news.shortImage}
                        alt={news.title}
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">
                        <span className="inner-shadow-emg">
                          <Link
                            className="home-news-link"
                            to={"/news/" + news._id}
                          >
                            {news.title}
                          </Link>
                        </span>
                      </h5>
                      <p className="card-text text-justify">{news.shortDesc}</p>
                    </div>
                    <div className="card-body d-flex justify-content-between">
                      <div>
                        <a href={news.fbLink} className="card-link color-emg">
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href={news.twLink} className="card-link color-emg">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </div>
                      <div className="color-emg">
                        <Moment format="DD MM YYYY" withTitle>
                          {news.publishDate}
                        </Moment>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )
            )}
          </Slider>
          <div className="container p-4"></div>
        </div>

        {/* PROJECTS START */}
        <div className="container">
          <h2 className="currentPageTitle pl-03">პროექტები</h2>
        </div>
        <div className="fluid-container highlight pt-3 pb-3 ">
          <Slider className="container" {...projectsResponsive}>
            {projectsOngoing.slice(0, 4).map((project) =>
              project.type !== "hidden" ? (
                <div key={project._id}>
                  <div className="card card-emg mr-4">
                    <Link
                      className="home-news-link"
                      to={"/projects/ongoing/" + project._id}
                    >
                      <img
                        alt={project.name}
                        className="card-img-top home-card-img inner-shadow-emg"
                        src={project.shortImage}
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">
                        <span className="inner-shadow-emg">
                          <Link
                            className="home-news-link"
                            to={"/project/ongoing" + project._id}
                          >
                            {project.title}
                          </Link>
                        </span>
                      </h5>
                      <p className="card-text text-justify">
                        {project.shortDesc}
                      </p>
                    </div>
                    <div className="card-body d-flex justify-content-between">
                      <div>
                        <a href="#" className="card-link color-emg">
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="card-link color-emg">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </div>

                      <div className="color-emg minimal-date">
                        <Moment format="DD MM YYYY" withTitle>
                          {project.publishDate}
                        </Moment>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )
            )}
          </Slider>
        </div>
        {/* PROJECTS END */}
      </React.Fragment>
    );
  }
}

export default Home;
