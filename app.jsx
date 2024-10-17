import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header"; // Correct path
import Restaurants from "./src/components/Restaurants"; // Correct path
import Offers from "./src/components/routes/Offer"; // Correct path
import Error from "./src/components/routes/Error"; // Correct path
import Help from "./src/components/routes/Help"; // Correct path
import Cart from "./src/components/routes/Cart"; // Correct path
import RestaurantInfoSection from "./src/components/routes/RestaurantInfoSection"; // Correct path
import UserContext from "./src/utils/UserContext";
import Mainfooter from "./src/components/Mainfooter";


const AppLayout = () => {
  const[userName,setUserName]=useState();
useEffect(()=>{
  const data={
    name:"aditya"
  }
  setUserName(data.name)
},[])
  return (
    <UserContext.Provider value={{LoggedInUser:userName,setUserName}}>
    <div>
      <Header />
      <Outlet />
      <Mainfooter/>
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
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
