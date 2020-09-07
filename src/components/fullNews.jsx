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
        <div className="thumbnail" />
        <div className="container ">
          <h1 className="currentPageTitle ">{news.title}</h1>
        </div>
        <div className="fluid-container highlight">
          <div className="container pt-3 pb-3">
            <div className="row">
              <div className="col-lg-6 col-12 pl-03">
                <img
                  src={news.longImage}
                  alt={news.title}
                  className="img-fluid inner-shadow-emg"
                />
              </div>
              <div className="col-lg-6 col-12 text-justify">
                <p>{news.longDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FullNews;
