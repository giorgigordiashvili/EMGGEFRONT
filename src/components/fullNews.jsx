import React, { Component } from "react";
import { Link } from "react-router-dom";

class FullNews extends Component {
  state = {};

  render() {
    const test = { title: "", longDesc: "", longImage: "" };
    const news =
      this.props.newss.filter((s) => s._id === this.props.match.params.id)[0] ||
      test;

    return (
      <React.Fragment>
        <div className="container pt-8">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/news">სიახლეები</Link>
            </li>
            <li className="breadcrumb-item active">{news.title}</li>
          </ol>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 p-3">
              <img
                src={news.longImage}
                alt={news.title}
                className="img-fluid inner-shadow-emg"
              />
            </div>
            <div className="col-lg-6 col-12 p-3 text-justify">
              <h5 className=" color-emg ">{news.title}</h5>
              <p>{news.longDesc}</p>
            </div>
          </div>
        </div>
        <div className="container p-5"></div>
      </React.Fragment>
    );
  }
}

export default FullNews;
