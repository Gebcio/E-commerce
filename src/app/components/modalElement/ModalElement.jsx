import React from "react";
import exitIcon from "../../assets/exitIcon.svg";
import {
  Modal,
  Box,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core/";

export const ModalElement = ({
  image,
  title,
  description,
  state,
  onMouseUp,
}) => {
  const handleClose = (value) => onMouseUp(value);

  return (
    <Modal className="modal" open={state} onClose={handleClose}>
      <Box className="modal__box">
        <img
          src={exitIcon}
          alt="exit icon"
          className="modal__box--exit-icon"
          onClick={handleClose}
        />
        <CardMedia
          className="modal__box--media"
          component="img"
          alt={title}
          height="370"
          image={image}
        />

        <CardContent className="modal__box--text">
          <Typography component="h2">{title}</Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </Box>
    </Modal>
  );
};
