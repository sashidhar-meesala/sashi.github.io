import React, { Component } from "react";
import { Link } from "@reach/router";
import { Typography, Button } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            flex: 1,
            marginTop: -100
          }}
        >
          <Typography
            variant="h4"
            noWrap
            style={{ color: "#fff", fontWeight: "200" }}
          >
            {this.props.name}
          </Typography>
          <Typography
            variant="h6"
            noWrap
            gutterBottom
            style={{ color: "#fff", fontWeight: "200" }}
          >
            {this.props.title}
          </Typography>
          <Button variant="contained" color="secondary">
            <a
              href={this.props.Resume}
              target="_blank"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              DOWNLOAD RESUME
            </a>
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
