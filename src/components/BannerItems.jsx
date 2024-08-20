import { CDN_URL } from "../utils/constants";
const BannerItems = (props) => {
  return (
    <div className="banneritems">
      <img src={CDN_URL + props.data.imageId} className="restaurant-img" />
      <div className="restaurant-info">
        <h1>{props.data.name}</h1>
      </div>
    </div>
  );
};
export default BannerItems;
