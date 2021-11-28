import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import { RatingElement } from "../ratingElement/RatingElement";
import { ButtonElement } from "../buttonElement/ButtonElement";
import { ModalElement } from "../modalElement/ModalElement";

export const ProductCard = ({
  product: { active, description, image, name, promo, rating },
}) => {
  const isActive = active;
  const isPromo = promo;

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        alt={name}
        height="170"
        image={image}
        title={name}
      />
      {isPromo ? (
        <Typography className="product-card__promo-label">Promo</Typography>
      ) : (
        <></>
      )}

      <CardContent className="product-card__content">
        <Typography className="product-card__title">{name}</Typography>
        <Typography className="product-card__description" component="p">
          {description}
        </Typography>

        <RatingElement rating={rating} />
      </CardContent>
      <CardActions className="product-card__button">
        {isActive ? (
          <>
            <ButtonElement
              name="Show details"
              type="contained"
              onMouseUp={handleOpen}
            ></ButtonElement>
            <ModalElement
              image={image}
              title={name}
              description={description}
              state={open}
              onMouseUp={handleClose}
            />
          </>
        ) : (
          <ButtonElement name="Unavailable" type="disabled"></ButtonElement>
        )}
      </CardActions>
    </Card>
  );
};
