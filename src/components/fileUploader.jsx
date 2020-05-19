import React, { Component } from "react";
import { apiUrl } from "../config.json";

export default class FileUploader extends Component {
  state = {
    uploadPercentage: 0,
  };
  render() {
    return (
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
    );
  }
}
