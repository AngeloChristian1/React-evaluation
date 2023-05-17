import "./All.css";
import Icon from "./Icon.jsx";
import Bookmark from "./assets/bookmark-black.svg";

const MovieCard = (props) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${props.backImage})` }}
        className={props.movieClass + " default "}
      >
        <div className="feedLogo">
          <Icon IconClass="sideIcon" IconPic={Bookmark} />
        </div>
      </div>
      <div className={" cardContent " + props.cardContentClass}>
        <div className="movieDetails">
          <div>
            <h4>{props.year}</h4>
          </div>
          <div>
            <h4>{props.category}</h4>
          </div>
          <div>
            <h4>{props.pg}</h4>
          </div>
        </div>
        <div>
          <h3 className="movieName">{props.movieName}</h3>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
