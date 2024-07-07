import RestInfo from "../RestInfo";
import DealSection from "../DealSection";
import Topicksection from "../Topicksection";
import { useState, useEffect } from "react";
import Shimmer from "../Shimmer";

const RestaurantInfoSection = () => {
  const [restInfo, setrestInfo] = useState(null);
  const [dealsInfo, setdealsInfo] = useState([]);
  const [Topicks, setTopicks] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.9680035&lng=77.55520659999999&restaurantId=383490&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();

      setrestInfo(json?.data?.cards?.[2]);
      setdealsInfo(
        json?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers || []
      );
      setTopicks(
        json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.carousel || []
      );
  };

  if (restInfo === null) return <Shimmer />;

  return (
    <div className="RestInfo-section">
      <RestInfo restdata={restInfo} />
      <h2>Deals for you</h2>
      <div className="Deals-for-you">
      {dealsInfo.map((Deals) => (
        <DealSection key={Deals.info.offerIds[0]} DealsData={Deals} />
      ))}
      </div>
      <h2>Topicks</h2>

      <div className="topicks">
      {Topicks.map((pick) => (
        <Topicksection key={pick.bannerId} picks={pick} />
      ))}
      </div>
    </div>
  );
};

export default RestaurantInfoSection;
