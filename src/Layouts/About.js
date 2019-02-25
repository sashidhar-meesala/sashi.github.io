import React, { Component } from "react";
import { Link } from "@reach/router";
import { Typography, Button } from "@material-ui/core";

class About extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: -100,
            marginLeft: 80
          }}
        >
          <Typography
            variant="h4"
            noWrap
            gutterBottom
            style={{ color: "#fff", fontWeight: "200", letterSpacing: 6 }}
          >
            {this.props.title}
          </Typography>
          <Typography
            variant="h4"
            noWrap
            gutterBottom
            style={{ color: "#fff", fontWeight: "200", letterSpacing: 6 }}
          >
            {this.props.title1}
          </Typography>
          <Typography
            variant="h6"
            noWrap
            gutterBottom
            style={{ color: "#fff", fontWeight: "200", letterSpacing: 2 }}
          >
            {this.props.subtitle}
            <Typography
              variant="h6"
              noWrap
              gutterBottom
              style={{ color: "#fff", fontWeight: "200", letterSpacing: 2 }}
            >
              {this.props.caption}
            </Typography>
            <Typography
              variant="h6"
              noWrap
              gutterBottom
              style={{ color: "#fff", fontWeight: "200", letterSpacing: 2 }}
            >
              {this.props.email}
            </Typography>
          </Typography>
        </div>
      </div>
    );
  }
}

export default About;
