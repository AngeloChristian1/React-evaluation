import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TvSeries from "./pages/TvSeries.jsx";
import Bookmarked from "./pages/Bookmarked.jsx";
import Single from "./pages/Single.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/singleCard",
    element: <Single />,
  },
  {
    path: "/bookmarked",
    element: <Bookmarked />,
  },
  {
    path: "/tvseries",
    element: <TvSeries />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/movies",
    element: <MoviesPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
