import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: 350,
    marginRight: 20,
    marginBottom: 20
  },
  media: {
    height: 180,
    display: "block",
    backgroundSize: "contain"
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea style={{ padding: 10 }}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Microsoft Dynamics"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
