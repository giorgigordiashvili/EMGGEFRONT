import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import {
  getProjectOngoing,
  saveProjectOngoing,
} from "../services/projectOngoingService";
import FileUploader from "./fileUploader";
class EditProjectOngoing extends Form {
  state = {
    pictureLink: "",
    data: {
      title: "",
      client: "",
      duration: "",
      longDesc: "",
      shortDesc: "",
      shortImage: "",
      longImage: "",
      location: "",
      serviceType: "",
      contractType: "",
      customer: "",
      generalContractor: "",
      financing: "",
      price: "",
      partner: "",
    },
    errors: {},
  };
  schema = {
    title: Joi.string().required().label("დასახელება"),
    client: Joi.string().label("ავტორი"),
    duration: Joi.string().required().label("პერიოდი"),
    longDesc: Joi.string().required().label("პროექტის გრძელი აღწერა"),
    shortDesc: Joi.string().required().label("პროექტის მოკლე აღწერა"),
    shortImage: Joi.string().required().label("გარე სურათი"),
    longImage: Joi.string().required().label("შიდა სურათი"),
    location: Joi.string().required().label("მდებარეობა"),
    serviceType: Joi.string().required().label("მომსახურების ტიპი"),
    contractType: Joi.string().required().label("კონტრაქტის ტიპი"),
    customer: Joi.string().required().label("დამკვეთი"),
    generalContractor: Joi.string().required().label("გენერალური კონტრაქტორი"),
    financing: Joi.string().required().label("დაფინანსება"),
    price: Joi.string().label("ღირებულება"),
    partner: Joi.string().label("ადგილობრივი პარტნიორი/ქვეკონტრაქტორი"),
    _id: Joi.string().label("ID"),
  };

  async populateStyle() {
    try {
      const styleId = this.props.match.params.id;
      if (styleId === "new") return;
      const { data: style } = await getProjectOngoing(styleId);
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
    return {
      _id: style._id,
      title: style.title,
      client: style.client,
      duration: style.duration,
      longDesc: style.longDesc,
      shortDesc: style.shortDesc,
      shortImage: style.shortImage,
      longImage: style.longImage,
      location: style.location,
      serviceType: style.serviceType,
      contractType: style.contractType,
      customer: style.customer,
      generalContractor: style.generalContractor,
      financing: style.financing,
      price: style.price,
      partner: style.partner,
    };
  }

  doSubmit = async () => {
    await saveProjectOngoing(this.state.data);

    this.props.history.push("/projects/ongoing");
  };

  render() {
    return (
      <div className="pt-8 container">
        <h1>Edit Category</h1>
        <FileUploader></FileUploader>
        <hr />
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "დასახელება")}
          {this.renderInput("client", "ავტორი")}
          {this.renderInput("duration", "პერიოდი")}
          {this.renderInput("longDesc", "პროექტის გრძელი აღწერა")}
          {this.renderInput("shortDesc", "პროექტის მოკლე აღწერა")}
          {this.renderInput("shortImage", "გარე სურათი")}
          {this.renderInput("longImage", "შიდა სურათი")}
          {this.renderInput("location", "მდებარეობა")}
          {this.renderInput("serviceType", "მომსახურების ტიპი")}
          {this.renderInput("contractType", "კონტრაქტის ტიპი")}
          {this.renderInput("customer", "დამკვეთი")}
          {this.renderInput("generalContractor", "გენერალური კონტრაქტორი")}
          {this.renderInput("financing", "დაფინანსება")}
          {this.renderInput("price", "ღირებულება")}
          {this.renderInput("partner", "ადგილობრივი პარტნიორი/ქვეკონტრაქტორი")}

          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default EditProjectOngoing;
