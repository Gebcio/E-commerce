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
import { RatingElement } from "../ratingElement/RatingElement";
import { ButtonElement } from "../buttonElement/ButtonElement";

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    height: 400,
    borderRadius: "8px",
    marginBottom: "2.4rem",
    position: "relative",
  },
  promoLabel: {
    alignItems: "center",
    backgroundColor: "#F9A52B",
    color: "#fff",
    display: "flex",
    height: "2.4rem",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "1.4rem",
    justifyContent: "center",
    lineHeight: "1.6rem",
    width: "7.5rem",
    position: "absolute",
    top: "2.7rem",
    left: 0,
    zIndex: 10,
  },
  content: {
    padding: "1.6rem",
    height: "16.8rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    color: "#1A1B1D",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "1.8rem",
    lineHeight: "1.6rem",
  },
  description: {
    color: "#9194A5",
    height: "6.4rem",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "1.4rem",
    lineHeight: "1.6rem",
  },
  button: {
    padding: "0 1.6rem 2.4rem",
  },
});

export const ProductCard = (props) => {
  const classes = useStyles();
  const {
    product: { active, description, image, name, promo, rating },
  } = props;

  const isActive = active;
  const isPromo = promo;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt={name}
          height="170"
          image={image}
          title={name}
        />
        {isPromo ? (
          <Typography className={classes.promoLabel}>Promo</Typography>
        ) : (
          <div></div>
        )}

        <CardContent className={classes.content}>
          <Typography className={classes.title}>{name}</Typography>
          <Typography className={classes.description} component="p">
            {description}
          </Typography>

          <RatingElement rating={rating} />
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        {isActive ? (
          <>
            <ButtonElement name="Show details" type="details"></ButtonElement>
          </>
        ) : (
          <ButtonElement name="Unavailable" type="disabled"></ButtonElement>
        )}
      </CardActions>
    </Card>
  );
};
