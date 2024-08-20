import React from "react";
import { CDN_URL } from "../utils/constants";
import downloadImage from "../utils/mockImages/download.png";
const Recommended = ({ item }) => {
 
  return (
    <div className="Rest-items">
    <div className="item-left">
      <h2>{item.card.info.name}</h2>
      <div>
        <img src={downloadImage} className="RatingImg"></img>
        <p>{item.card.info.ratings.aggregatedRating.rating}</p>
        <p>({item.card.info.ratings.aggregatedRating.ratingCountV2})</p>
      </div>
      <p>Rs{item.card.info.price / 100}</p>
      <p>{item.card.info.description}</p>
    </div>
    <div className="item-right">
        <img src={CDN_URL+item.card.info.imageId} className="item-img"></img>
    </div>
    </div>
  );
};
export default Recommended;
