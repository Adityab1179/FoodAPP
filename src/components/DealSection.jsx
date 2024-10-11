import DealsLink from "../utils/DealsLink";

const DealSection = ({DealsData}) => {

  return (
    
          <div className="flex w-1/3">
            <img className="h-8" src={DealsLink +DealsData.info.offerLogo}></img>
            <div className="">
            <h3 className="font-bold">{DealsData.info.header}</h3>
            <p className="text-sm">{DealsData.info.description}</p>
          </div>
          </div>
  );
};
export default DealSection;
