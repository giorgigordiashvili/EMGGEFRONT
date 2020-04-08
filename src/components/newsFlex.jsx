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
              className="card m-2"
              key={news._id}
              style={{ border: "none" }}
            ></div>
          ) : (
            <div key={news._id} className="card m-2">
              {isAdmin && (
                <React.Fragment>
                  <Link
                    to={"/editnews/" + news._id}
                    className="mt-auto card-btn btn btn-primary"
                  >
                    რედაქტირება
                  </Link>

                  <Button
                    onClick={() => onDelete(news)}
                    variant="btn card-btn btn-danger"
                    className="mt-auto"
                  >
                    წაშლა
                  </Button>
                  <br />
                </React.Fragment>
              )}
              <div className="card-body project-body">
                <Link
                  to={{
                    pathname: "/news/" + news._id,
                  }}
                >
                  <div
                    className="vh-50 d-flex column align-items-end item-title"
                    style={{
                      background: `
    url(${news.shortImage}) center`,
                      backgroundSize: "cover",
                    }}
                  >
                    <h5 className="card-title project-title-container pr-4 pl-4 pt-1 pb-2">
                      <span className="inner-shadow-emg font-bebas">
                        {news.title}
                      </span>
                    </h5>
                  </div>
                </Link>
                <p className="card-text p-2 text-justify">{news.shortDesc}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted row justify-content-between">
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
                </small>
              </div>
            </div>
          )
        )}
      </div>
    );
  }
}

export default NewsFlex;
