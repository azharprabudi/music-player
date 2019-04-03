import React, { PureComponent } from "react";
import "./homepage.css";

class Homepage extends PureComponent {
  onSubmit = e => {
    e.preventDefault();
  };

  searchEntityMusic = e => {
    const { value: search } = e.target;
  };

  render() {
    return (
      <div className="container">
        <div className="background-image">
          <img
            alt={"music"}
            src={`${process.env.PUBLIC_URL}/assets/images/bg.jpg`}
            className="full-image"
          />
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="content">
            <h1>Music Collection</h1>
            <input
              type="text"
              className="search-music"
              placeholder="Type for search artists, albums, tracks at here ..."
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Homepage;
