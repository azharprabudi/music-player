import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { searchArtist } from "actions/artist/artist";
import "./homepage.css";

class Homepage extends PureComponent {
  onSubmit = e => {
    e.preventDefault();
  };

  onChange = e => {
    const { value: search } = e.target;
    this.props.searchArtist(search);
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
            <h1>Feel free to listen music at kosic</h1>
            <input
              type="text"
              className="search-music"
              placeholder="type to search your favorite artist at here ..."
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {
    searchArtist
  }
)(Homepage);
