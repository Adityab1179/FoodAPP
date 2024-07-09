import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Restaurants from "./src/components/Restaurants";
import Offers from "./src/components/routes/Offer";
import Error from "./src/components/routes/Error";
import Help from "./src/components/routes/Help";
import Cart from "./src/components/routes/Cart";

import RestaurantInfoSection from "./src/components/routes/RestaurantInfoSection";

const AppLayout = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

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
