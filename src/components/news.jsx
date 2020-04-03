import React, { Component } from "react";
import { deleteNews } from "../services/newsService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import _ from "lodash";
import NewsFlex from "./newsFlex";

class News extends Component {
  state = {
    newss: [],
    categories: [],
    branches: [],
    pageSize: 6,
    currentPage: 1,
    searchQuery: "",
    selectedStyle: null,
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    const { newss } = this.props;
    this.setState({ newss });
  }

  handleDelete = async project => {
    const originalProjects = this.state.newss;
    const projects = originalProjects.filter(s => s._id !== project._id);
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

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleStyleSelect = style => {
    this.setState({ selectedStyle: style, searchQuery: "", currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedStyle: null, currentPage: 1 });
  };

  renderSortIcon = column => {
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
      searchQuery
    } = this.state;
    const { newss: allProjects } = this.props;
    let filtered = allProjects;

    if (searchQuery)
      filtered = allProjects.filter(s =>
        s.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedStyle && selectedStyle._id)
      filtered = allProjects.filter(m => m.style._id === selectedStyle._id);

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
        <div className="pt-8">
          <Link
            style={{ marginBottom: "10px" }}
            className="btn btn-primary ml-1"
            to="/editnews/new"
          >
            New News
          </Link>
          <p className="pt-8">There are no news in the database</p>;
        </div>
      );
    const { totalCount, data: newss } = this.getPagedData();

    return (
      <div className="pt-8">
        {isAdmin && (
          <Link
            style={{ marginBottom: "10px" }}
            className="btn btn-primary ml-1"
            to="/editnews/new"
          >
            New News
          </Link>
        )}
        <div className="container  pt-5">
          <h1 className="currentPageTitle ">NEWS & MEDIA</h1>
        </div>
        {/* <SearchBox value={searchQuery} onChange={this.handleSearch} /> */}
        <NewsFlex
          count={this.props.count}
          onRenewBag={this.props.onRenewBag}
          newss={newss}
          onDelete={this.handleDelete}
        />
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default News;
