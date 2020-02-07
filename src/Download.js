import React, { Component } from "react";

class Download extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txt: "Text to download as a file",
      linking: ""
    };
    //this.handleClick = this.handleClick.bind(this);
  }
  handleClick = e => {
    let downloadUrl = null;
    //var download = document.querySelector("a[ download ]");
    //console.log(event);
    // Create a binary representation of the plain-text input.
    let blob = new Blob(
      [this.state.txt], // Blob parts.
      {
        type: "text/plain;charset=utf-8"
      }
    );
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
    //download.setAttribute("href", downloadUrl);
    const data = window.URL.createObjectURL(blob);
    //let link = document.querySelector("a[ download ]");
    //var download = document.querySelector("a[ download ]");
    let link = document.createElement("a");
    link.href = data;
    //link.download = "file.pdf";
    link.download = "data.txt";
    link.click();
  };
  handleBlur() {
    console.log("You finished typing:", this.state.txt);
  }
  handleChange(event) {
    this.setState({ txt: event.target.value });
  }
  render() {
    return (
      <div>
        <h1>file download</h1>
        values: {this.state.txt}
        <form>
          <textarea
            placeholder="Text to download as a file"
            onChange={this.handleChange.bind(this)}
            value={this.state.txt}
            onBlur={this.handleBlur.bind(this)}
          ></textarea>
          <button onClick={e => this.handleClick(e)}>Download Text</button>
          {/*<a href="#" download="data.txt" onClick={e => this.handleClick(e)}>
            Download Text
    </a>*/}
        </form>
      </div>
    );
  }
}

export default Download;
