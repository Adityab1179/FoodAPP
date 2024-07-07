const RestInfo=(props)=>{
    const { name, avgRating,totalRatingsString,costForTwoMessage,locality
        ,    cuisines } =
            props.restdata.card.card.info;
    return(
        <div className="RestInfo">
            <h1>{name}</h1>
          <div className="RestRating">
          <p>{avgRating}</p>
          <p>({totalRatingsString})</p>
          <p>{costForTwoMessage}</p>
          </div>
        <p>{cuisines.join(",")}</p>
        <p>Outlet:{locality}</p>
        </div>
    )
}
export default RestInfo