import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getPartner, savePartner } from "../services/partnerService";

class EditCareer extends Form {
  state = {
    data: {
      name: "",
      logo: ""
    },
    errors: {}
  };
  schema = {
    _id: Joi.string(),
    name: Joi.string()
      .required()
      .label("Name"),

    logo: Joi.string()
      .required()
      .label("Logo")
  };

  async populateShoe() {
    try {
      const shoeId = this.props.match.params.id;
      if (shoeId === "new") return;
      const { data: shoe } = await getPartner(shoeId);
      this.setState({ data: this.mapToViewModel(shoe) });
    } catch (error) {
      if (error.response && error.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateShoe();
  }

  mapToViewModel(shoe) {
    return {
      _id: shoe._id,
      name: shoe.name,
      logo: shoe.logo
    };
  }

  doSubmit = async () => {
    await savePartner(this.state.data);
    this.props.history.push("/about");
  };

  render() {
    return (
      <div className="pt-8 container">
        <h1>Edit Partner</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("logo", "Logo")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default EditCareer;
