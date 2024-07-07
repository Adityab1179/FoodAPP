import { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import BannerSection from "./Bannersection";

const Restaurants = () => {
  const [restdata, setRestdata] = useState([]);
  const [filteredrest, setFilteredRest] = useState([]);
  const [searchbox, setSearchbox] = useState('');

  const Ratingfilter = () => {
    const filteredData = restdata.filter((res) => res.info.avgRating > 4.1);
    setFilteredRest(filteredData);
  };

  const Vegfilter = () => {
    const filteredData = restdata.filter((res) => res.info.veg === true);
    setFilteredRest(filteredData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9680035&lng=77.55520659999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setRestdata(restaurants);
    setFilteredRest(restaurants);
  };

  const searchHandler = () => {
    const filteredData = restdata.filter((res) => 
      res.info.name.toLowerCase().includes(searchbox.toLowerCase())
    );
    setFilteredRest(filteredData);
  };

  return (
    <div className="section-2">
      <BannerSection/>
      <div className="res-card-heading">
        <h1>Top Restaurant Chain in Saharanpur</h1>
        <div className="search-box">
          <input 
            type="text" 
            value={searchbox} 
            onChange={(e) => setSearchbox(e.target.value)} 
          />
          <button onClick={searchHandler}>
            Search
          </button>
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
      {filteredrest.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurants-section">
          {filteredrest.map((restaurant) => (
            <RestaurantCards key={restaurant.info.id} resdata={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Restaurants;
