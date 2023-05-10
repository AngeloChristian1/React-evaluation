import "./all.css";
import New from "./New.jsx";

const Card = (props) => {
  return (
    <>
      <div className="right" id={props.id}>
        <div>
          <img src={props.imageSource} alt={props.imageAlt} />
        </div>
        <div className="rightContent">
          <div className="upper">
            <div className="h3">
              {" "}
              <h3>{props.h3}</h3>
            </div>
            <div>
              {" "}
              <New text="NEW!" className={props.newClass} />
            </div>
            <div>
              {" "}
              <New
                text={"FEATURED"}
                className={props.featureClass + " featured"}
              />
            </div>
          </div>
          <div className="middle">
            <h4>{props.title}</h4>
          </div>
          <div className="lower">
            <div>
              <p className="text">{props.days}</p>
            </div>
            <div>
              <p className="text">{props.time}</p>
            </div>
            <div>
              <p className="text">{props.option}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
