import RestInfo from "../RestInfo";
import DealSection from "../DealSection";
import Topicksection from "../Topicksection";
import Recommended from "../Recommend";
import { useState, useEffect } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";

const RestaurantInfoSection = () => {

  const [restInfo, setRestInfo] = useState(null);
  const [dealsInfo, setDealsInfo] = useState([]);
  const [topicks, setTopicks] = useState([]);
  const [recommendedHeading, setRecommendedHeading] = useState("");
  const [recommended, setRecommended] = useState([]);
  const {resId}=useParams()
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      MENU_API+resId
    );
    const json = await response.json();
    setRestInfo(json?.data?.cards?.[2]);
    setDealsInfo(
      json?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers ||
        []
    );
    setTopicks(
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
        ?.card?.card?.carousel || []
    );
    setRecommended(
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
        ?.card?.card?.itemCards || []
    );
    setRecommendedHeading(
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
        ?.card?.card?.title
    );
  };

  if (restInfo === null) return <Shimmer />;

  return (
    <div className="RestInfo-section">
      <RestInfo restdata={restInfo} />
      <h2>Deals for you</h2>
      <div className="Deals-for-you">
        {dealsInfo.map((deal) => (
          <DealSection key={deal.info.offerIds[0]} DealsData={deal} />
        ))}
      </div>
      <h2>Topicks</h2>
      <div className="topicks">
        {topicks.map((pick) => (
          <Topicksection key={pick.bannerId} picks={pick} />
        ))}
      </div>
      <div className="recommended">
        <details open>
          <summary>{recommendedHeading}</summary>
          {recommended.map((item) => (
            <Recommended key={item.card.info.id} item={item} />
          ))}
        </details>
      </div>
    </div>
  );
};

export default RestaurantInfoSection;
