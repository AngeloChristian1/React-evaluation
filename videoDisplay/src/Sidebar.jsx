import "./All.css";
import Icon from "./Icon.jsx";
import Bookmark from "./assets/bookmark-black.svg";
import Film from "./assets/film-black.svg";
import Tv from "./assets/tv-black.png";
import Profile from "./assets/profile2.jpg";
import Grid from "./assets/grid-white.svg";
import Red from "./assets/red.svg";
// import MainLayout from "./MainLayout";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sideContainer">
        <div className="sideContent">
          <div>
            <Icon IconClass=" red" IconPic={Red} link="/" />
          </div>

          <div>
            <Icon IconClass=" sideIcon" IconPic={Grid} link="/settings" />
          </div>
          <div>
            <Icon IconClass="sideIcon" IconPic={Film} link="/movies" />
          </div>
          <div>
            <Icon IconClass="sideIcon" IconPic={Tv} link="/tvseries" />
          </div>
          <div>
            <Icon IconClass="sideIcon" IconPic={Bookmark} link="/bookmarked" />
          </div>

          <div>
            <Icon IconClass="profile" IconPic={Profile} link="/profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
