import download from '../utils/mockImages/download.png'
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
    <div className="RestInfo">
      <h1>{name}</h1>
      <div className="RestRating">
        <img src={download} className='RatingImg'></img>
        <p>{avgRating}</p>
        <p>({totalRatingsString})</p>
        <p>{costForTwoMessage}</p>
      </div>
      <p>{cuisines.join(",")}</p>
      <p>Outlet:{locality}</p>
    </div>
  );
};
export default RestInfo;
