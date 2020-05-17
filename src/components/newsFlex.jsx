import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../services/authService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Moment from "react-moment";

class NewsFlex extends Component {
  render() {
    const { newss, onDelete } = this.props;
    const isAdmin = auth.isAdmin();
    return (
      <div className="card-deck">
        {newss.map((news) =>
          news.type === "hidden" ? (
            <div
              className="card highlight"
              key={news._id}
              style={{ border: "none" }}
            ></div>
          ) : (
            <div key={news._id} className="card card-emg news-card">
              <Link className="home-news-link" to={"/news/" + news._id}>
                <img
                  className="card-img-top home-card-img inner-shadow-emg"
                  src={news.shortImage}
                  alt="Alt"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <span className="inner-shadow-emg">
                    <Link className="home-news-link" to={"/news/" + news._id}>
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
          )
        )}
      </div>
    );
  }
}

export default NewsFlex;
