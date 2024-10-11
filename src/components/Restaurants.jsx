import { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import BannerSection from "./Bannersection";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Mainfooter from "./Mainfooter";

const Restaurants = () => {
  const [restdata, setRestdata] = useState([]); // Initialize as an empty array
  const [filteredrest, setFilteredRest] = useState([]); // Initialize as an empty array
  const [searchbox, setSearchbox] = useState("");

  // Function to filter top-rated restaurants
  const Ratingfilter = () => {
    const filteredData = restdata.filter((res) => res.info?.avgRating > 4.1);
    setFilteredRest(filteredData);
  };

  // Function to filter vegetarian restaurants
  const Vegfilter = () => {
    const filteredData = restdata.filter((res) => res.info?.veg === true);
    setFilteredRest(filteredData);
  };

  // Fetch restaurant data from the API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
  
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setRestdata(restaurants);
    setFilteredRest(restaurants);
    console.log(json.data)
  };
  

  // Handler for search functionality
  const searchHandler = () => {
    const filteredData = restdata.filter((res) =>
      res.info.name.toLowerCase().includes(searchbox.trim().toLowerCase())
    );
    setFilteredRest(filteredData);
  };
  const online = useOnlineStatus();
  if (!online) {
    return <div>You are offline, please check your internet connection</div>;
  }
  return (
    <div className="h-[100%]">
      <BannerSection />
      <div className="text-2xl flex justify-between">
        <h1 className="font-bold">Top Restaurant Chain in Saharanpur</h1>
        <div className="flex gap-5">
          <div className="flex gap-3">
            <input
              className="outline"
              type="text"
              value={searchbox}
              onChange={(e) => setSearchbox(e.target.value)}
            />
            <button onClick={searchHandler}>Search</button>
          </div>
          <div className="heading-btn">
            <button className="filter-btn" onClick={Ratingfilter}>
              Top rated restaurants
            </button>
            <button className="filter-btn" onClick={Vegfilter}>
              Veg
            </button>
          </div>
        </div>
      </div>
      {filteredrest.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="w-full px-[12%] pt-5 flex gap-5 flex-wrap">
          {filteredrest.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCards resdata={restaurant} />
            </Link>
          ))}
        </div>
      )}
      <div className="w-full h-[100%] px-[12%] bg-[#F0F0F5]">
  <Mainfooter />
</div>
    </div>
  );
};

export default Restaurants;
