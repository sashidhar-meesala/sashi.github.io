import React, { Component } from "react";
import { Link } from "@reach/router";
import { Typography, Button } from "@material-ui/core";

class Contact extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: -100
        }}
      >
        <Typography
          variant="h4"
          noWrap
          style={{ color: "#fff", fontWeight: "200" }}
        >
          You may contact me via-
          <br />
          <br />
          Mobile : {this.props.mobile}
          <br />
          <br />
          Email : {this.props.email}
        </Typography>
      </div>
    );
  }
}

export default Contact;
