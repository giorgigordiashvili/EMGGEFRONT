import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../services/authService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Moment from "react-moment";

class ProjectFlex extends Component {
  render() {
    const { projects, onDelete } = this.props;
    const isAdmin = auth.isAdmin();

    return (
      <div className="card-deck">
        {projects.map((project) => (
          <React.Fragment key={project._id}>
            <div className="card m-2">
              {isAdmin && (
                <React.Fragment>
                  <Link
                    to={"/editProject/" + project._id}
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
              <div className="card-body project-body">
                <Link to={"/projects/" + project._id}>
                  <div className="project vh-50 d-flex column align-items-end item-title">
                    <h5 className="card-title project-title-container pr-4 pl-4 pt-1 pb-2">
                      <span className="inner-shadow-emg ">{project.title}</span>
                    </h5>
                  </div>
                </Link>
                <p className="card-text p-2 text-justify">
                  {project.shortDesc}
                  <br />
                  <span className="color-emg">კლიენტი: </span> {project.client}
                  <br />
                  <span className="color-emg">ხანგრძლივობა: </span>{" "}
                  {project.duration}
                  <br />
                  <span className="color-emg">პარტნიორები: </span> ???
                  <br />
                  <span className="color-emg">ღირებულება:</span>
                  ???
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted row justify-content-between">
                  <div>
                    <a href={project.fbLink} className="card-link color-emg">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href={project.twLink} className="card-link color-emg">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </div>
                  <div className="color-emg">
                    <Moment format="DD MM YYYY" withTitle>
                      {project.publishDate}
                    </Moment>
                  </div>
                </small>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default ProjectFlex;
