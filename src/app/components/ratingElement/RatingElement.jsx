import React from "react";
import filledStarIcon from "../../assets/filledStarIcon.svg";
import emptyStarIcon from "../../assets/emptyStarIcon.svg";

export const RatingElement = ({ rating }) => {
  const TOP_RATING = 5;
  const score = [];

  for (let i = 1; i <= TOP_RATING; i++) {
    let src = filledStarIcon;
    let alt = "filled star icon";

    if (i > rating) {
      src = emptyStarIcon;
      alt = "empty star icon";
    }
    score.push(<img key={i} src={src} alt={alt} />);
  }

  return <div className="rating-element">{score}</div>;
};
