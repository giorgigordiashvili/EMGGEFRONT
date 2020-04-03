import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getCategory, saveCategory } from "../services/categoryService";

class EditStyle extends Form {
  state = {
    data: { name: "", image: "" },
    errors: {}
  };
  schema = {
    name: Joi.string()
      .required()
      .label("Title"),
    image: Joi.string()
      .required()
      .label("Image"),
    _id: Joi.string().label("ID")
  };

  async populateStyle() {
    try {
      const styleId = this.props.match.params.id;
      if (styleId === "new") return;
      const { data: style } = await getCategory(styleId);

      this.setState({ data: this.mapToViewModel(style) });
    } catch (error) {
      if (error.response && error.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateStyle();
  }

  mapToViewModel(style) {
    return { _id: style._id, name: style.name, image: style.image };
  }

  doSubmit = async () => {
    await saveCategory(this.state.data);

    this.props.history.push("/projects");
  };

  render() {
    return (
      <div className="pt-8 container">
        <h1>Edit Category</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("image", "Image")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default EditStyle;
