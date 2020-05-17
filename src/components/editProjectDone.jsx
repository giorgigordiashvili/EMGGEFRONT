import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import {
  getProjectDone,
  saveProjectDone,
} from "../services/projectDoneService";
import axios from "axios";
import { apiUrl } from "../config.json";
class EditProjectDone extends Form {
  state = {
    uploadPercentage: 0,
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
    client: Joi.string().required().label("ავტორი"),
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
      const { data: style } = await getProjectDone(styleId);
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
    await saveProjectDone(this.state.data);

    this.props.history.push("/projects/done");
  };

  setLink = async (link) => {
    let { data } = this.state;
    data.shortImage = link;
    this.setState(data);
  };

  uploadFile = ({ target: { files } }) => {
    console.log(files[0]);
    let data = new FormData();
    data.append("file", files[0]);

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded} lb of ${total}kb | ${percent}%`);

        if (percent < 100) {
          this.setState({ uploadPercentage: percent });
        }
      },
    };
    axios.post(`https://emg.groot.ge/api/upload`, data, options).then((res) => {
      this.setState({
        uploadPercentage: 100,
        pictureLink: `https://emg.groot.ge/image/` + res.data.file.filename,
      });
    });
  };

  render() {
    return (
      <div className="pt-8 container">
        <h1>Edit Category</h1>
        <form
          action={apiUrl + "/upload"}
          method="POST"
          encType="multipart/form-data"
        >
          File Uploader
          <div className="custom-file mb-3">
            <input
              type="file"
              name="file"
              id="file"
              className="custom-file-input"
              onChange={this.uploadFile}
            />
            <div className="mt-2 mb-2 progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: this.state.uploadPercentage + `%`,
                  transition: "width 2s",
                }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>

            <label htmlFor="file" className="custom-file-label">
              Choose File
            </label>
          </div>
          <input
            type="text"
            className="form-control"
            defaultValue={this.state.pictureLink}
            id="myInput"
          ></input>
        </form>
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

export default EditProjectDone;
