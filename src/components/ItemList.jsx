import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/Slices/cartSlice";

const ItemList = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddItem = (itemName) => {
    dispatch(addItem(itemName));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div>
      {data.map((item) => (
        <div
          className="flex justify-between p-4 m-2 border-b-gray-200 border-b-2 h-44"
          key={item.card.info.id}
        >
          <div className="w-9/12 p-4">
            <h1 className="font-bold text-xl">{item.card.info.name}</h1>
            <h2>₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h2>
            <p className="text-s">
              {item.card.info.description.split(" ").slice(0, 20).join(" ")}
              {item.card.info.description.split(" ").length > 20 && " ..."}
            </p>
          </div>
          <div className="w-3/12 flex items-center justify-center relative">
            <img
              className="h-[90%] object-cover"
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <div className="absolute bottom-0">
              <button className="bg-black text-white p-1 rounded-r-sm" onClick={handleRemoveItem}>-</button>
              <button className="bg-black text-white p-1 rounded-r-sm">Add</button>
              <button
                className="bg-black text-white p-1 rounded-r-sm"
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
