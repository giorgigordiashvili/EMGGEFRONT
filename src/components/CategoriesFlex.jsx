import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../services/authService";

class CategoriesFlex extends Component {
  render() {
    const { categories, onDeleteCategory, projects } = this.props;
    const isAdmin = auth.isAdmin();
    return (
      <div className="row">
        {categories.map(project => (
          <div key={project._id} className="col-md-6 col-lg-4">
            <div className="card border-0 transform-on-hover">
              <Link
                className="lightbox"
                to={{
                  pathname: "/projects/category/" + project._id,
                  state: { projects }
                }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="card-img-top"
                />
              </Link>
              <div className="card-body">
                <h6>
                  <Link
                    to={{
                      pathname: "/projects/category/" + project._id,
                      state: { projects }
                    }}
                  >
                    {project.name}
                    {` `}
                  </Link>
                  {isAdmin && (
                    <React.Fragment>
                      <Link
                        to={"/category/" + project._id}
                        className="mt-auto card-btn btn btn-primary"
                      >
                        Edit
                      </Link>
                      {` `}
                      <Button
                        onClick={() => onDeleteCategory(project)}
                        variant="btn card-btn btn-danger"
                        className="mt-auto"
                      >
                        Delete
                      </Button>
                      <br />
                    </React.Fragment>
                  )}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CategoriesFlex;
