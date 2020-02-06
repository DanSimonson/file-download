import React, { Component } from "react";

class Download extends Component {
  handleClick = () => {
    console.log(this);
  };
  render() {
    return (
      <div>
        <h1>file download</h1>
        <form>
          <textarea>Download me as file data.</textarea>
          <a
            href="javascript:void(0)"
            download="data.txt"
            onClick={this.handleClick}
          >
            Download Text
          </a>
        </form>
      </div>
    );
  }
}

export default Download;
