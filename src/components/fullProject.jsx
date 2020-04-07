import React, { Component } from "react";
import { Link } from "react-router-dom";

class FullProject extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        {/* Page Heading/Breadcrumbs */}
        <h1 className="mt-4 mb-3">
          Portfolio Item
          <small>Subheading</small>
        </h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item active">Portfolio Item</li>
        </ol>
        {/* Portfolio Item Row */}
        <div className="row">
          <div className="col-md-8">
            <img
              className="img-fluid"
              src="http://placehold.it/750x500"
              alt=""
            />
          </div>
          <div className="col-md-4">
            <h3 className="my-3">Project Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae. Sed
              dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris
              ultricies, justo eu convallis placerat, felis enim.
            </p>
            <h3 className="my-3">Project Details</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Dolor Sit Amet</li>
              <li>Consectetur</li>
              <li>Adipiscing Elit</li>
            </ul>
          </div>
        </div>
        {/* /.row */}
        {/* Related Projects Row */}
        <h3 className="my-4">Related Projects</h3>
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