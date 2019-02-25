import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Typography, Hidden } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "@reach/router";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    fontWeight: "200"
  },
  search: {
    position: "relative",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    },
    display: "flex",
    flexDirection: "row",
    flex: 0.8,
    justifyContent: "space-evenly"
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#01011C", display: "flex" }}
      >
        <Toolbar style={{ display: "flex" }}>
          <Typography
            className={classes.title}
            variant="title"
            color="inherit"
            noWrap
            style={{ marginRight: 10 }}
          >
            SASHIDHAR MEESALA
          </Typography>
          <div className={classes.grow} />
          <Hidden xsDown smDown>
            <div className={classes.search}>
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                <Typography
                  className={classes.title}
                  variant="title"
                  color="inherit"
                  noWrap
                >
                  HOME
                </Typography>
              </Link>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography
                  className={classes.title}
                  variant="title"
                  color="inherit"
                  noWrap
                >
                  ABOUT
                </Typography>
              </Link>
              <Link
                to="/experience"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography
                  className={classes.title}
                  variant="title"
                  color="inherit"
                  noWrap
                >
                  EXPERIENCE
                </Typography>
              </Link>
              <Link
                to="/skills"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography
                  className={classes.title}
                  variant="title"
                  color="inherit"
                  noWrap
                >
                  SKILLS
                </Typography>
              </Link>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography
                  className={classes.title}
                  variant="title"
                  color="inherit"
                  noWrap
                >
                  CONTACT
                </Typography>
              </Link>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
