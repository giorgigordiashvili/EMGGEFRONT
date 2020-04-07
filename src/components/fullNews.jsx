import React, { Component } from "react";

class FullNews extends Component {
  state = {};

  render() {
    const test = { title: "", longDesc: "", longImage: "" };
    const news =
      this.props.newss.filter((s) => s._id === this.props.match.params.id)[0] ||
      test;

    return (
      <React.Fragment>
        <div className="container pt-5">
          <h5 className="mt-5 mb-3 pl-04 color-emg pb-4">{news.title}</h5>
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
