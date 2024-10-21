import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestaurantCards = (props) => {
  const { resdata } = props;
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    lastMileTravelString,
    cloudinaryImageId,
  } = resdata?.info;
  const data = useContext(UserContext);
  return (
    <div className="overflow-hidden w-[15rem] min-h-[12rem] hover:scale-90 transition-transform duration-500 font-figtre pb-5">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="w-full h-40 object-cover rounded-xl"
      />
      <div>
        <h1 className="font-bold text-2xl  pl-2">
          {name.length > 15 ? `${name.slice(0, 15)}...` : name}
        </h1>
        <div className="w-full flex items-center gap-5">
          <img
            className="h-5"
            src="https://img.freepik.com/free-vector/3d-metal-star-isolated_1308-117760.jpg"
          />
          <h2>{avgRating}</h2>
          <h3 className="text-sm">{costForTwo}</h3>
        </div>

        <h3>
          {cuisines.length > 5
            ? `${cuisines.slice(0, 5).join(", ")}...`
            : cuisines.join(", ")}
        </h3>
      </div>
    </div>
  );
};

export function WithPRomoted(RestaurantCards) {
  return function (props) {
    return <div>
      <h3>Promoted</h3>
      <RestaurantCards {...props} />
    </div>;
  };
}
export default RestaurantCards;
