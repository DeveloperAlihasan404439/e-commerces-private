"use client ";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
React.createElement(Rating)
function RatingProduct({ rating }) {
  return (
    <div>
      <Rating
        placeholderRating={3.5}
        emptySymbol={<img src="assets/images/star-grey.png" className="icon" />}
        placeholderSymbol={
          <img src="assets/images/star-red.png" className="icon" />
        }
        fullSymbol={
          <img src="assets/images/star-yellow.png" className="icon" />
        }
      />
    </div>
  );
}

export default RatingProduct;
