import React from "react";
import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
} from "@material-ui/core";
import { ButtonElement } from "../buttonElement/ButtonElement";
import filledStarIcon from "../../assets/filledStarIcon.svg";

const useStyles = makeStyles({
  root: {
    width: 288,
    maxHeight: 400,
    borderRadius: "8px",
    marginBottom: "2.4rem",
  },
  description: {
    // marginBottom: "1rem",
  },
  pagination: {
    maxWidth: 288,
  },
});

export const ProductCard = (props) => {
  const classes = useStyles();
  const { active, name, description, image, rating } = props.props;

  const isActive = active;
  // const stars =

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="170"
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>

          <Typography className="rating">
            <img src={filledStarIcon} alt="filled star icon" />
            <img src={filledStarIcon} alt="filled star icon" />
            <img src={filledStarIcon} alt="filled star icon" />
            <img src={filledStarIcon} alt="filled star icon" />
            <img src={filledStarIcon} alt="filled star icon" />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isActive ? (
          <ButtonElement name="Show details" type="details"></ButtonElement>
        ) : (
          <ButtonElement name="Unavailable" type="disabled"></ButtonElement>
        )}
      </CardActions>
    </Card>
  );
};
