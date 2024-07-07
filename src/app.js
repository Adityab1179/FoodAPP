import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Restaurants from "./components/Restaurants";
import Offers from "./components/routes/Offer";
import Error from "./components/routes/Error";
import Help from "./components/routes/Help";
import Cart from "./components/routes/Cart";

import RestaurantInfoSection from "./components/routes/RestaurantInfoSection";

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
        path: "restaurant",
        element: <RestaurantInfoSection />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter} />);
