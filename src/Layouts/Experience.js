import React, { Component } from "react";
import { Link } from "@reach/router";
import { Typography, Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import { Timeline, TimelineEvent } from "react-event-timeline";
import VerticalTimeLine from "../Components/VerticalTimeLine";

class Experience extends Component {
  componentDidMount() {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  }
  render() {
    return (
      <div>
        <div style={{ paddingTop: 20, marginBottom: 90 }}>
          <Timeline lineColor="#fff" lineStyle={{ width: 5 }}>
            <VerticalTimeLine
              date="2018-PRESENT"
              title="POST GRADUATE CERTIFICATE"
              details="HUMBER COLLEGE"
              icon="school"
            />
            <VerticalTimeLine
              date="2016-2018"
              title="SYSTEMS DEVELOPER, INFOSYS"
              details="MICROSOFT CRM DYNAMICS 365"
              icon="domain"
            />
            <VerticalTimeLine
              date="2012-2016"
              title="BACHELOR OF TECHNOLOGY"
              details="ELECTRICAL AND ELECTRONICS ENGINEERING"
              icon="school"
            />
          </Timeline>
        </div>
      </div>
    );
  }
}

export default Experience;
