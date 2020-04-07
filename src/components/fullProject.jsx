import React, { Component } from "react";
import { Link } from "react-router-dom";

class FullProject extends Component {
  state = {};
  render() {
    const test = {
      title: "",
      client: "",
      duration: "",
      longDesc: "",
      longImage: "",
    };
    const project =
      this.props.projects.filter(
        (s) => s._id === this.props.match.params.id
      )[0] || test;
    return (
      <div className="container pt-8">
        {/* Page Heading/Breadcrumbs */}
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/projects">პროექტები</Link>
          </li>
          <li className="breadcrumb-item active">{project.title}</li>
        </ol>
        {/* Portfolio Item Row */}
        <div className="row">
          <div className="col-md-8">
            <img
              className="img-fluid"
              src={project.longImage}
              alt={project.title}
            />
          </div>
          <div className="col-md-4">
            <h3 className="my-3">პროექტის აღწერა</h3>
            <p className="text-justify  ">{project.longDesc}</p>
            <h3 className="my-3">პროექტის დეტალები</h3>
            <ul>
              <li>კლიენტი: {project.client}</li>
              <li>ხანგრძლივობა: {project.duration} დღე</li>
            </ul>
          </div>
        </div>
        {/* /.row */}
        {/* Related Projects Row */}
        <h3 className="my-4">სხვა პროექტები</h3>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <Link to="#">
              <img
                className="img-fluid"
                src="http://placehold.it/500x300"
                alt=""
              />
            </Link>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <Link to="#">
              <img
                className="img-fluid"
                src="http://placehold.it/500x300"
                alt=""
              />
            </Link>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <Link to="#">
              <img
                className="img-fluid"
                src="http://placehold.it/500x300"
                alt=""
              />
            </Link>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <Link to="#">
              <img
                className="img-fluid"
                src="http://placehold.it/500x300"
                alt=""
              />
            </Link>
          </div>
        </div>
        {/* /.row */}
      </div>
    );
  }
}

export default FullProject;
