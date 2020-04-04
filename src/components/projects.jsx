import React, { Component } from "react";
import { deleteProject } from "../services/projectService";
import { deleteCategory } from "../services/categoryService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CategoriesFlex from "./CategoriesFlex";

class Projects extends Component {
  state = {
    projects: [],
    partners: [],
    categories: [],
    branches: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedStyle: null,
    sortColumn: { path: "title", order: "asc" },
  };

  handleDelete = async (project) => {
    const originalProjects = this.state.projects;
    const projects = originalProjects.filter((s) => s._id !== project._id);
    this.setState({ projects });
    try {
      await deleteProject(project._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("This project has already been deleted");
        this.setState({ projects: originalProjects });
      }
    }
  };

  handleDeleteCategory = async (category) => {
    const originalCategories = this.state.categories;
    const categories = originalCategories.filter((s) => s._id !== category._id);
    this.setState({ categories });
    try {
      await deleteCategory(category._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("This category has already been deleted");
        this.setState({ categories: originalCategories });
      }
    }
  };

  render() {
    const { length: count } = this.props.categories;
    const { categories, projects } = this.props;
    const { user } = this.props;
    let isAdmin = false;
    if (user) isAdmin = user.isAdmin;

    if (count === 0)
      return (
        <div className="pt-8 container">
          {isAdmin && (
            <React.Fragment>
              <Link
                style={{ marginBottom: "10px" }}
                className="btn btn-primary ml-1"
                to="/category/new"
              >
                კატეგორიის შექმნა
              </Link>
              <Link
                style={{ marginBottom: "10px" }}
                className="btn btn-primary ml-1"
                to="/projects/new"
              >
                პროექტის დამატება
              </Link>
            </React.Fragment>
          )}
          <p>ბაზაში კატეგორიები არ არის დამატებული</p>
        </div>
      );
    return (
      <div className="container pt-8">
        {isAdmin && (
          <React.Fragment>
            <Link
              style={{ marginBottom: "10px" }}
              className="btn btn-primary"
              to="/projects/new"
            >
              პროექტის დამატება
            </Link>
            <span> </span>
            <Link
              style={{ marginBottom: "10px" }}
              className="btn btn-primary"
              to="/category/new"
            >
              კატეგორიის შექმნა
            </Link>
          </React.Fragment>
        )}
        <hr />
        <CategoriesFlex
          projects={projects}
          categories={categories}
          onDelete={this.handleDelete}
          onDeleteCategory={this.handleDeleteCategory}
        />
        <div className="container p-5"></div>
      </div>
    );
  }
}

export default Projects;
