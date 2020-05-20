import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../services/authService";
import Moment from "react-moment";

class ProjectFlex extends Component {
  render() {
    const { newss, onDelete, category } = this.props;
    const isAdmin = auth.isAdmin();
    return (
      <div>
        {newss.map((project) => (
          <div key={project._id} className="pb-2">
            <div className="card card-emg ">
              {isAdmin && (
                <React.Fragment>
                  <Link
                    to={
                      category === "Ongoing"
                        ? "/editProjectOngoing/" + project._id
                        : "/editProjectDone/" + project._id
                    }
                    className="mt-auto card-btn btn btn-primary"
                  >
                    რედაქტირება
                  </Link>

                  <Button
                    onClick={() => onDelete(project)}
                    variant="btn card-btn btn-danger"
                    className="mt-auto"
                  >
                    წაშლა
                  </Button>
                  <br />
                </React.Fragment>
              )}
              <Link
                className="home-news-link"
                to={
                  category === "Ongoing"
                    ? "/projects/ongoing/" + project._id
                    : "/projects/done/" + project._id
                }
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
                      to={
                        category === "Ongoing"
                          ? "/projects/ongoing/" + project._id
                          : "/projects/done/" + project._id
                      }
                    >
                      {project.title}
                    </Link>
                  </span>
                </h5>
                <p className="card-text text-justify">{project.shortDesc}</p>
              </div>
              <div className="card-body d-flex justify-content-between">
                <div></div>

                <div className="color-emg-dark minimal-date">
                  <Moment format="DD MM YYYY" withTitle>
                    {project.publishDate}
                  </Moment>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectFlex;
