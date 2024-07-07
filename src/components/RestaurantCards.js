import { CDN_URL } from "../utils/constants";
const RestaurantCards = (props) => {
  const { resdata } = props;
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    lastMileTravelString,
    cloudinaryImageId,
  } = resdata?.info
  return (
    <div className="restaurant-card">
      <img src={CDN_URL + cloudinaryImageId} className="restaurant-img" />
      <div className="restaurant-info">
        <h1>{name}</h1>
        <div className="rating-cost">
          <img src="https://img.freepik.com/free-vector/3d-metal-star-isolated_1308-117760.jpg" />
          <h2>{avgRating}</h2>
          <h3 className="cost-of-two">{costForTwo}</h3>
        </div>
        <h3>{lastMileTravelString}</h3>
        <h3>{cuisines.join(", ")}</h3>
      </div>
    </div>
  );
};
export default RestaurantCards;
