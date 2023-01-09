import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./Components/Redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./Layout/SharedLayout";
import Booking from "./Pages//Booking";
import Recommended from "./Pages/Recommended";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/booking", element: <Booking /> },
      {
        path: "/recommended",
        element: <Recommended />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
