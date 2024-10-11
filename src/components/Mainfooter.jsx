import React from "react";
import app_store from "../utils/mockImages/app_store.avif";
import play_store from "../utils/mockImages/play_store.avif";
import RBG from "../utils/mockImages/RBG_Logo_72ppi.png";
const Mainfooter = () => {
  return (
    <div className="w-full pb-10">
      <div className="w-4/5 flex justify-between py-5">
        <div>
          <h1 className="text-2xl">For better experience,download the Swiggy app now</h1>
        </div>
        <div className="w-1/5 flex justify-between">
          <img className="w-full" src={play_store}></img>
          <img  className="w-full" src={app_store}></img>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="w-1/5">
          <img className="w-full" src={RBG}></img>
        </div>
        <div>
          <h2 className="font-bold text-xl">Company</h2>
          <p>About US</p>
          <p>Swiggy Corporate</p>
          <p>Career</p>
          <p>Team</p>
          <p>Swiggy One</p>
          <p>Swiggy Instamart</p>
          <p>Swiggy Dineout</p>
          <p>Swiggy Genie</p>
        </div>
        <div>
          <h3 className="font-bold text-xl">Contact us</h3>
          <p>Help & support</p>
          <p>Partner with us</p>
          <p>Ride with us</p>
        </div>
        <div>
          <h3 className="font-bold text-xl">Available In</h3>
          <p>Mumbai</p>
          <p>Banglore</p>
          <p>Gurgaon</p>
          <p>Hydrebad</p>
          <p>Delhi</p>
          <p>Pune</p>
        </div>
        <div>
          <h3 className="font-bold text-xl">Life at Swiggy</h3>
          <p>Explore the Swiggy</p>
          <p>Swiggy News</p>
          <p>Snackables</p>
        </div>
      </div>
    </div>
  );
};

export default Mainfooter;
