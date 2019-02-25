import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { Timeline, TimelineEvent } from "react-event-timeline";
import color from "@material-ui/core/colors/purple";

class VerticalTimeLine extends Component {
  render() {
    return (
      <TimelineEvent
        title={this.props.title}
        createdAt={this.props.date}
        contentStyle={{ backgroundColor: "#fff" }}
        container="card"
        cardHeaderStyle={{ backgroundColor: "#01011C" }}
        icon={<i className="material-icons md-18">{this.props.icon}</i>}
        iconStyle={{ width: 50 }}
        bubbleStyle={{
          width: 55,
          height: 55,
          marginLeft: -10,
          borderColor: "#01011C",
          color: "#01011C"
        }}
        style={{
          minWidth: 450,
          textAlign: "center",
          fontWeight: 200,
          fontStyle: "Roboto",
          fontSize: 18
        }}
      >
        {this.props.details}
      </TimelineEvent>
    );
  }
}

export default VerticalTimeLine;
