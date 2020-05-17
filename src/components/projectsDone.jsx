import React, { Component } from "react";
import { deleteProjectDone } from "../services/projectDoneService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import _ from "lodash";
import ProjectFlex from "./projectFlex";
import SearchBox from "./searchBox";

class ProjectsDone extends Component {
  state = {
    projectsDone: [],
    categories: [],
    branches: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedStyle: null,
    sortColumn: { path: "title", order: "asc" },
  };

  handleDelete = async (project) => {
    const originalProjects = this.state.projectsDone;
    const projects = originalProjects.filter((s) => s._id !== project._id);
    this.setState({ projects });
    try {
      await deleteProjectDone(project._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("This project has already been deleted");
        this.setState({ projectsDone: originalProjects });
      }
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleStyleSelect = (style) => {
    this.setState({ selectedStyle: style, searchQuery: "", currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedStyle: null, currentPage: 1 });
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.state;

    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedStyle,
      sortColumn,
      searchQuery,
    } = this.state;
    let { projectsDone: allProjects } = this.props;
    let filtered = allProjects;

    if (searchQuery) {
      console.log(allProjects);

      filtered = allProjects.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.longDesc.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (selectedStyle && selectedStyle._id)
      filtered = allProjects.filter((m) => m.style._id === selectedStyle._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], sortColumn.order);

    const projects = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: projects };
  };

  render() {
    const { length: count } = this.props.projectsDone;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { user } = this.props;
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
              დასრულებული პროექტის დამატება
            </Link>
            <p>ბაზაში პროექტები არ არის დამატებული</p>
          </div>
        </React.Fragment>
      );
    const { totalCount, data: projectsDone } = this.getPagedData();

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
              className="nav-item nav-link nav-link-emg "
              to="/projects/ongoing"
            >
              მიმდინარე პროექტები
            </Link>
            <Link
              className="nav-item nav-link nav-link-emg active "
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
                დასრულებული პროექტები
              </h1>
            </div>
            <div className="fluid-container highlight p-5">
              <div className="container ">
                {isAdmin && (
                  <Link
                    style={{ marginBottom: "10px" }}
                    className="btn btn-primary ml-1"
                    to="/editProjectDone/new"
                  >
                    დასრულებული პროექტის დამატება
                  </Link>
                )}

                {/* <SearchBox value={searchQuery} onChange={this.handleSearch} /> */}
                <ProjectFlex
                  category={"Done"}
                  count={this.props.count}
                  onRenewBag={this.props.onRenewBag}
                  newss={projectsDone}
                  onDelete={this.handleDelete}
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

export default ProjectsDone;
