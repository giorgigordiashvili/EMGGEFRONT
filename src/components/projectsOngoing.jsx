import React, { Component } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import { Link } from "react-router-dom";
import ProjectFlex from "./projectFlex";

class ProjectsOngoing extends Component {
  state = {
    projectsOngoing: [],
    categories: [],
    branches: [],
    pageSize: 2,
    currentPage: 1,
    searchQuery: "",
    selectedStyle: null,
    sortColumn: { path: "title", order: "asc" },
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPagedData = () => {
    const { pageSize, currentPage } = this.state;
    let { projectsOngoing: allProjects } = this.props;

    const projects = paginate(allProjects, currentPage, pageSize);
    return { totalCount: allProjects.length, data: projects };
  };

  render() {
    const { length: count } = this.props.projectsOngoing;
    const { pageSize, currentPage } = this.state;
    const { user, onDelete, fullProjectsDone } = this.props;
    let isAdmin = false;
    if (user) isAdmin = user.isAdmin;

    if (count === 0)
      return (
        <React.Fragment>
          <div className="thumbnail" />
          <div>
            <Link
              style={{ marginBottom: "10px" }}
              className="btn btn-primary ml-1"
              to="/editProjectDone/new"
            >
              მიმდინარე პროექტის დამატება
            </Link>
            <p>ბაზაში პროექტები არ არის დამატებული</p>
          </div>
        </React.Fragment>
      );
    const { totalCount, data: projectsOngoing } = this.getPagedData();

    return (
      <React.Fragment>
        <div className="thumbnail" />
        <nav className="container">
          <div
            className="nav nav-tabs justify-content-center"
            id="nav-tab"
            role="tablist"
          >
            <Link
              className="nav-item nav-link nav-link-emg active"
              to="/projects/ongoing"
            >
              მიმდინარე პროექტები
            </Link>
            <Link
              className="nav-item nav-link nav-link-emg  "
              to="/projects/done"
            >
              დასრულებული პროექტები
            </Link>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="container">
              <h1 className="currentPageTitle mt-3 col-12 col-md-12 pl-04">
                მიმდინარე პროექტები
              </h1>
            </div>
            <div className="fluid-container highlight pt-5 pb-5 ">
              <div className="container ">
                <ul className="management pl-4">
                  {fullProjectsDone.map((s) => (
                    <li className="special">
                      <Link to={"/projects/ongoing/" + s._id}>{s.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="container pl-4 pr-25">
                {isAdmin && (
                  <Link
                    style={{ marginBottom: "10px" }}
                    className="btn btn-primary ml-1"
                    to="/editProjectOngoing/new"
                  >
                    დასრულებული პროექტის დამატება
                  </Link>
                )}

                {/* <SearchBox value={searchQuery} onChange={this.handleSearch} /> */}
                <ProjectFlex
                  category={"Ongoing"}
                  count={this.props.count}
                  onRenewBag={this.props.onRenewBag}
                  newss={projectsOngoing}
                  onDelete={onDelete}
                />
                <Pagination
                  itemsCount={totalCount}
                  pageSize={pageSize}
                  onPageChange={this.handlePageChange}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectsOngoing;
