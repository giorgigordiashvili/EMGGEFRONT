import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getNew, saveNews } from "../services/newsService";
import axios from "axios";
import { apiUrl } from "../config.json";
class EditStyle extends Form {
  state = {
    uploadPercentage: 0,
    pictureLink: "",
    data: {
      title: "",
      shortDesc: "",
      longDesc: "",
      shortImage: "",
      longImage: "",
      fbLink: "",
      twLink: "",
    },
    errors: {},
  };
  schema = {
    title: Joi.string().required().label("Title"),
    shortDesc: Joi.string().required().label("Short Description"),
    longDesc: Joi.string().required().label("Long Description"),
    shortImage: Joi.string().required().label("Outside image"),
    longImage: Joi.string().required().label("Inside image"),
    fbLink: Joi.string().required().label("Facebook link"),
    twLink: Joi.string().required().label("Twitter link"),
    _id: Joi.string().label("ID"),
  };

  async populateStyle() {
    try {
      const styleId = this.props.match.params.id;
      if (styleId === "new") return;
      const { data: style } = await getNew(styleId);
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
      shortDesc: style.shortDesc,
      longDesc: style.longDesc,
      shortImage: style.shortImage,
      longImage: style.longImage,
      fbLink: style.fbLink,
      twLink: style.twLink,
    };
  }

  doSubmit = async () => {
    await saveNews(this.state.data);

    this.props.history.push("/news");
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
      console.log(res);

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
          {this.renderInput("title", "Title")}
          {this.renderInput("shortImage", "Outside image")}
          {this.renderInput("longImage", "Inside image")}
          {this.renderInput("shortDesc", "Short Description")}
          {this.renderInput("longDesc", "Long Description")}

          {this.renderInput("fbLink", "Facebook link")}
          {this.renderInput("twLink", "Twitter link")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default EditStyle;
