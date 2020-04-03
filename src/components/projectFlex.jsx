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
        {projects.map(project => (
          <div key={project._id} className="card m-2">
            {isAdmin && (
              <React.Fragment>
                <Link
                  to={"/project/" + project._id}
                  className="mt-auto card-btn btn btn-primary"
                >
                  Edit
                </Link>

                <Button
                  onClick={() => onDelete(project)}
                  variant="btn card-btn btn-danger"
                  className="mt-auto"
                >
                  Delete
                </Button>
                <br />
              </React.Fragment>
            )}
            <div className="card-body project-body">
              <div className="project vh-50 d-flex column align-items-end">
                <h5 className="card-title project-title-container pr-4 pl-4 pt-1 pb-2">
                  <span className="inner-shadow-emg ">TITLE</span>
                </h5>
              </div>
              <p className="card-text p-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi laborum cum doloribus dignissimos, minus necessitatibus
                officia.
                <br />
                <span className="color-emg">Client: </span> ???
                <br />
                <span className="color-emg">Size/Area: </span> ???
                <br />
                <span className="color-emg">
                  Number of employed people:{" "}
                </span>{" "}
                ???
                <br />
                <span className="color-emg">Duration: </span> ???
                <br />
                <span className="color-emg">Conducted works: </span> ???
                <br />
                <span className="color-emg">Partners: </span> ???
                <br />
                <span className="color-emg">
                  Total cost of the project:{" "}
                </span>{" "}
                ???
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted row justify-content-between">
                <div>
                  <a href="#" className="card-link color-emg">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#" className="card-link color-emg">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
                <button className="emg-button p-1">Make Feedback</button>
                <div className="color-emg">
                  <Moment format="DD MM YYYY" withTitle>
                    {project.publishDate}
                  </Moment>
                </div>
              </small>
            </div>
          </div>
          // <div  className="card m-2">

          //   <div className="card-body project-body">
          //     <div className="project vh-50 d-flex column align-items-end">
          //       <h5 className="card-title project-title-container pr-4 pl-4 pt-1 pb-2">
          //         <span className="inner-shadow-emg ">TITLE</span>
          //       </h5>
          //     </div>
          //     <p className="card-text p-2">
          //       Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          //       Commodi laborum cum doloribus dignissimos, minus necessitatibus
          //       officia.
          //       <br />
          //       <span className="color-emg">Client: </span> ???
          //       <br />
          //       <span className="color-emg">Size/Area: </span> ???
          //       <br />
          //       <span className="color-emg">
          //         Number of employed people:{" "}
          //       </span>{" "}
          //       ???
          //       <br />
          //       <span className="color-emg">Duration: </span> ???
          //       <br />
          //       <span className="color-emg">Conducted works: </span> ???
          //       <br />
          //       <span className="color-emg">Partners: </span> ???
          //       <br />
          //       <span className="color-emg">
          //         Total cost of the project:{" "}
          //       </span>{" "}
          //       ???
          //     </p>
          //   </div>
          //   <div className="card-footer">
          //     <small className="text-muted row justify-content-between">
          //       <div>
          //         <a href="#" className="card-link color-emg">
          //           <i className="fab fa-facebook-f" aria-hidden="true" />
          //         </a>
          //         <a href="#" className="card-link color-emg">
          //           <i className="fab fa-twitter" aria-hidden="true" />
          //         </a>
          //       </div>
          //       <button className="emg-button p-1">Make Feedback</button>
          //       <div className="color-emg">01.20.2019</div>
          //     </small>
          //   </div>
          // </div>

          // //   <div className="card h-100">
          // //     <Link to={"/project/" + project._id}>
          // //       <img
          // //         className="card-img-top"
          // //         src={project.shortImage}
          // //         alt={project.shortDesc}
          // //       />
          // //     </Link>
          // //     <div className="card-body">
          // //       <h4 className="card-title">
          // //         <Link to={"/project/" + project._id}>{project.title}</Link>
          // //       </h4>
          // //       <p className="card-text">{project.shortDesc}</p>
          // //       <p className="card-text">
          // //         <b>Duration:</b> {project.duration} Hours
          // //       </p>
          // //       <p className="card-text">
          // //         <b>Client:</b> {project.client}
          // //       </p>
          // //       {!isAdmin && (
          // //         <Button
          // //           onClick={() => onDelete(project)}
          // //           variant="btn emg-btn"
          // //           className="mt-auto card-btn btn btn-primary"
          // //         >
          // //           Make Feedback
          // //         </Button>
          // //       )}

          // //     </div>
          // //   </div>
          // // </div>
        ))}
      </div>
    );
  }
}

export default ProjectFlex;
