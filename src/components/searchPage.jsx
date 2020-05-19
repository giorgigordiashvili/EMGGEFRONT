import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectFlex from "./projectFlex";
import NewsFlex from "./newsFlex";

class SearchPage extends Component {
  handleData(data) {
    let search = this.props.location.search;
    search = decodeURIComponent(search);
    search = search.replace(/%20/g, " ");
    search = search.substring(1, search.length);
    data = data.filter(
      (s) =>
        s.title.includes(search) ||
        s.shortDesc.includes(search) ||
        s.longDesc.includes(search)
    );

    return Array.from(data);
  }

  render() {
    let projectsOngoing = this.handleData(this.props.projectsOngoing);
    let projectsDone = this.handleData(this.props.projectsDone);
    let newss = this.handleData(this.props.newss);

    return (
      <div className="fluid-container pt-8">
        {projectsDone.length > 0 && (
          <React.Fragment>
            <div className="container">
              <h1 className="currentPageTitle mt-3 col-12 col-md-12 pl-04">
                დასრულებული პროექტები
              </h1>
            </div>
            <div className="fluid-container highlight p-4">
              <div className="container">
                <ProjectFlex
                  category={"Done"}
                  newss={projectsDone}
                  onDelete={this.handleDelete}
                />
              </div>
            </div>
          </React.Fragment>
        )}
        {projectsOngoing.length > 0 && (
          <React.Fragment>
            <div className="container">
              <h1 className="currentPageTitle mt-3 col-12 col-md-12 pl-04">
                მიმდინარე პროექტები
              </h1>
            </div>
            <div className="fluid-container highlight p-4">
              <div className="container">
                <ProjectFlex
                  category={"Ongoing"}
                  newss={projectsOngoing}
                  onDelete={this.handleDelete}
                />
              </div>
            </div>
          </React.Fragment>
        )}
        {newss.length > 0 && (
          <React.Fragment>
            <div className="container">
              <h1 className="currentPageTitle mt-3 col-12 col-md-12 pl-04">
                სიახლეები
              </h1>
            </div>
            <div className="fluid-container highlight p-4">
              <div className="container">
                <NewsFlex newss={newss} onDelete={this.handleDelete} />
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default SearchPage;
