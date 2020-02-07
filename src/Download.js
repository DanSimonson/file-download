import React, { Component } from "react";
import "./Download.css";

class Download extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txt: ""
    };
    //this.handleClick = this.handleClick.bind(this);
  }
  handleClick = e => {
    //create downloadUrl
    let downloadUrl = null;

    // Create a javascript blob representation of input.
    let blob = new Blob(
      [this.state.txt], // Blob parts.
      {
        type: "application/msword"
      }
    );

    // revoke if url already exists
    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
    }
    // Create an addressable version of the blob.
    // --
    // CAUTION: At this point, the URL has been allocated and the blob will be
    // kept in the document memory space until the document is unloaded or the
    // URL is explicitly released (see above).
    downloadUrl = URL.createObjectURL(blob);

    // Tie the addressable version of the blob to the download link.
    const data = window.URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.href = data;
    link.download = "data.doc";
    link.click();
  };
  handleBlur() {}

  handleChange(event) {
    this.setState({ txt: event.target.value });
  }
  render() {
    return (
      <div>
        <h1>Macy's file download Demo</h1>
        <br />
        <br />
        <br />
        <form>
          <div className="formContent">
            <textarea
              onChange={this.handleChange.bind(this)}
              value={this.state.txt}
              onBlur={this.handleBlur.bind(this)}
            ></textarea>
            <br />
            <br />
            <button className="Button" onClick={e => this.handleClick(e)}>
              Download Data as Word Document
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Download;
