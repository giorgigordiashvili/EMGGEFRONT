import React, { Component } from "react";
import { deleteNews } from "../services/newsService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import _ from "lodash";
import NewsFlex from "./newsFlex";
import SearchBox from "./searchBox";

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

  handleDelete = async (project) => {
    const originalProjects = this.state.newss;
    const projects = originalProjects.filter((s) => s._id !== project._id);
    this.setState({ projects });
    try {
      await deleteNews(project._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("This project has already been deleted");
        this.setState({ newss: originalProjects });
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
    let { newss: allProjects } = this.props;
    let number = allProjects.length % pageSize;
    // if (number !== 0) {
    //   number = pageSize - (allProjects.length % pageSize);
    //   let objs = [];
    //   for (let i = 0; i < number; i++) {
    //     objs.push({
    //       type: "hidden",
    //       title: "",
    //       shortDesc: "",
    //       longDesc: "",
    //       _id: `${Math.random()}`,
    //     });
    //   }
    //   allProjects = allProjects.concat(objs);
    // }
    let filtered = allProjects;

    if (searchQuery)
      filtered = allProjects.filter(
        (s) =>
          (s.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            s.type !== "hidden") ||
          (s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) &&
            s.type !== "hidden") ||
          (s.longDesc.toLowerCase().includes(searchQuery.toLowerCase()) &&
            s.type !== "hidden")
      );
    else if (selectedStyle && selectedStyle._id)
      filtered = allProjects.filter((m) => m.style._id === selectedStyle._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], sortColumn.order);

    const projects = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: projects };
  };

  render() {
    const { length: count } = this.props.newss;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { user } = this.props;
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
          <h1 className="currentPageTitle mt-3 col-12 col-md-12 pl-04">
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

            {/* <SearchBox value={searchQuery} onChange={this.handleSearch} /> */}
            <NewsFlex
              count={this.props.count}
              onRenewBag={this.props.onRenewBag}
              newss={newss}
              onDelete={this.handleDelete}
            />
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
