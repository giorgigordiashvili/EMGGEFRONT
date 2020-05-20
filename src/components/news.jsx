import React, { Component } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import { Link } from "react-router-dom";
import NewsFlex from "./newsFlex";

class News extends Component {
  state = {
    newss: [],
    categories: [],
    branches: [],
    pageSize: 4,
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
    let { newss: allProjects } = this.props;

    const projects = paginate(allProjects, currentPage, pageSize);
    return { totalCount: allProjects.length, data: projects };
  };

  render() {
    const { length: count } = this.props.newss;
    const { pageSize, currentPage } = this.state;
    const { user, onNewsDelete } = this.props;
    let isAdmin = false;
    if (user) isAdmin = user.isAdmin;

    if (count === 0)
      return (
        <div className="container pt-8">
          <Link
            style={{ marginBottom: "10px" }}
            className="btn btn-primary ml-1"
            to="/editnews/new"
          >
            სიახლის დამატება
          </Link>
          <p>ბაზაში სიახლეები არ არის დამატებული</p>
        </div>
      );
    const { totalCount, data: newss } = this.getPagedData();

    return (
      <React.Fragment>
        <div className="thumbnail" />

        <div className="container">
          <h1 className="currentPageTitle  col-12 col-md-12 pl-04">
            სიახლეები
          </h1>
        </div>
        <div className="fluid-container highlight  p-5">
          <div className="container ">
            {isAdmin && (
              <Link
                style={{ marginBottom: "10px" }}
                className="btn btn-primary ml-1"
                to="/editnews/new"
              >
                სიახლის დამატება
              </Link>
            )}

            <NewsFlex newss={newss} onDelete={onNewsDelete} />
            <div className="p-4"></div>
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
