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
          <div key={project._id} className="card m-2">
            {isAdmin && (
              <React.Fragment>
                <Link
                  to={"/project/" + project._id}
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
              <div className="project vh-50 d-flex column align-items-end">
                <h5 className="card-title project-title-container pr-4 pl-4 pt-1 pb-2">
                  <span className="inner-shadow-emg ">{project.title}</span>
                </h5>
              </div>
              <p className="card-text p-2">
                {project.shortDesc}
                <br />
                <span className="color-emg">კლიენტი: </span> {project.client}
                <br />
                <span className="color-emg">ფართობი: </span> ???
                <br />
                <span className="color-emg">დასაქმებული ადამიანები: </span> ???
                <br />
                <span className="color-emg">ხანგრძლივობა: </span> ???
                <br />
                <span className="color-emg">შესრულებული სამუშაოები: </span> ???
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
        ))}
      </div>
    );
  }
}

export default ProjectFlex;
