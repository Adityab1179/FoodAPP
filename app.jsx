import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header"; 
import Restaurants from "./src/components/Restaurants"; 
import Offers from "./src/components/routes/Offer";
import Error from "./src/components/routes/Error";
import Help from "./src/components/routes/Help"; 
import Cart from "./src/components/routes/Cart"
import RestaurantInfoSection from "./src/components/routes/RestaurantInfoSection";
import UserContext from "./src/utils/UserContext";
import Mainfooter from "./src/components/Mainfooter";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const AppLayout = () => {
  const[userName,setUserName]=useState();
useEffect(()=>{
  const data={
    name:"aditya"
  }
  setUserName(data.name)
},[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{LoggedInUser:userName,setUserName}}>
    <div>
      <Header />
      <Outlet />
      <Mainfooter/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Restaurants />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantInfoSection />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter} />);
