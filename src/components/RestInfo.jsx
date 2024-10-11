import download from "../utils/mockImages/download.png";
const RestInfo = (props) => {
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    locality,
    cuisines,
  } = props.restdata.card.card.info;
  return (
    <div className="w-full font-figtree">
      <h1 className="font-bold text-3xl">{name}</h1>
      <div className="border-2 border-black w-full h-36 p-3">
        <div className="flex gap-3 font-bold text-xl">
          <img src={download} className="h-5"></img>
          <p  >{avgRating}</p>
          <p>({totalRatingsString})</p>
          <p>{costForTwoMessage}</p>
        </div>
        <a href="#" className="underline text-red-600 font-bold"><p>{cuisines.join(",")}</p></a>
        <p>Outlet:{locality}</p>
      </div>
    </div>
  );
};
export default RestInfo;
