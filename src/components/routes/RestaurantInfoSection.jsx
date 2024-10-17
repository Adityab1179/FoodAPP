import RestInfo from "../RestInfo";
import DealSection from "../DealSection";
import Topicksection from "../Topicksection";
import ItemCategory from "../ItemCategory";
import { useState, useEffect, useCallback } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";

const RestaurantInfoSection = () => {
  const [restInfo, setRestInfo] = useState(null);
  const [dealsInfo, setDealsInfo] = useState([]);
  const [topicks, setTopicks] = useState([]);
  const [Category, setCategory] = useState([]);

  const [showIndex, setshowIndex] = useState(0);

  const { resId } = useParams();

  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
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
    setCategory(
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )||json?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  function handledisplay(index){
    setshowIndex(index)
  }
  if (restInfo === null) return <Shimmer />;

  return (
    <div className="font-figtree px-[20%] flex flex-col gap-5">
      <RestInfo restdata={restInfo} />
      <h2 className="font-bold text-2xl">Deals for you</h2>
      <div className="flex gap-10">
        {dealsInfo.map((deal) => (
          <DealSection key={deal.info.offerIds[0]} DealsData={deal} />
        ))}
      </div>
      {topicks.length !== 0 && (
        <>
          <h2 className="text-center">Topicks</h2>
          <div className="topicks">
            {topicks.map((pick) => (
              <Topicksection key={pick.bannerId} picks={pick} />
            ))}
          </div>
        </>
      )}
     <div className="">
  {Category.map((list, index) => (
    <ItemCategory key={index} data={list.card.card} showItems={index===showIndex?true:false}  setshowIndex={()=>setshowIndex(index)}/>
  ))}
</div>

    </div>
  );
};

export default RestaurantInfoSection;
