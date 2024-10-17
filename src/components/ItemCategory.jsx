import ItemList from "./ItemList";
import { useState } from "react";

const ItemCategory = ({ data,showItems,setshowIndex}) => {
function handledisplay(){
  setshowIndex();
}
  return (
    <div className="p-2">
      <div className=" p-4 cursor-pointer"> 
        <div className="flex justify-between shadow-gray-300 shadow-md p-4" onClick={handledisplay} >
          <span className="text-lg font-extrabold">{data.title}({data.itemCards.length}) </span>
          <span>🔽</span>
        </div>
        <div>
          {showItems&&<ItemList  data={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default ItemCategory;
