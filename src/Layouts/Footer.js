import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Icon from "@material-ui/core/Icon";
import { loadCSS } from "fg-loadcss/src/loadCSS";

class Footer extends React.Component {
  componentDidMount() {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          bottom: 0,
          position: "fixed",
          backgroundColor: "#01011C",
          height: 50,
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: 50
        }}
      >
        <div
          position="static"
          style={{
            display: "flex",
            width: "5%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <a
            href="https://www.facebook.com/SashidharUrSweetheart"
            target="_blank"
          >
            <Icon
              className="fab fa-facebook-square"
              color="inherit"
              style={{ paddingRight: 20, fontSize: 32, color: "#fff" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sashidhar-meesala-49380685/"
            target="_blank"
          >
            <Icon
              className="fab fa-linkedin"
              color="inherit"
              style={{ fontSize: 32, color: "#fff" }}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
