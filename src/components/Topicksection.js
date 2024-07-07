import toppicksImg from "../utils/toppicksImg";
const Topicksection = ({ picks }) => {
  return (
           <img src={toppicksImg+picks.creativeId}className="dish-img"></img>
    
  );
};
export default Topicksection;
