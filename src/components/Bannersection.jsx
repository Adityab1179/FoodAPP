import bannerdata from "../utils/bannerdata"
import BannerItems from "./BannerItems"

const BannerSection = () => {
  return (
    <div className="h-30 flex">
      {bannerdata.map((bannerItem) => (
        <BannerItems key={bannerItem.id} data={bannerItem} />
      ))}
    </div>
  );
};

export default BannerSection;
