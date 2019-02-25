import React, { Component } from "react";
import { Link } from "@reach/router";
import { Typography, Button } from "@material-ui/core";
import MediaCard from "../Components/Card";
import Dynamics from "../Images/dynamis.jpg";
import HTMLImage from "../Images/html.png";
import CSSImage from "../Images/css.png";
import JSImage from "../Images/javascript.png";
import ReactImage from "../Images/react.png";
import AngularImage from "../Images/angular.png";
import NodeImage from "../Images/node.png";

class Skills extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: -100
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            margin: 20,
            flexWrap: "wrap"
          }}
        >
          <MediaCard image={Dynamics} title="MICROSOFT DYNAMICS CRM" />
          <MediaCard image={HTMLImage} title="HTML 5" />
          <MediaCard image={CSSImage} title="CSS 3" />
          <MediaCard image={JSImage} title="JAVASCRIPT" />
          {/*<MediaCard image={ReactImage} title="REACT JS" />
          <MediaCard image={AngularImage} title="ANGULAR 2+" />
        <MediaCard image={NodeImage} title="NODE JS" />*/}
        </div>
      </div>
    );
  }
}

export default Skills;
