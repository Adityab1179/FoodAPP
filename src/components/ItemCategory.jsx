import ItemList from "./ItemList";
import { useState } from "react";

const ItemCategory = ({ data }) => {
  console.log(data)
  const[showList,setShowList]=useState(false);
  function handledisplay(){
    setShowList(!showList);
  }
  return (
    <div className="p-2">
      <div className=" p-4 cursor-pointer"> 
        <div className="flex justify-between" onClick={handledisplay}>
          <span className="text-lg font-extrabold">{data.title}({data.itemCards.length}) </span>
          <span>🔽</span>
        </div>
        <div>
          {showList&&<ItemList  data={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default ItemCategory;
