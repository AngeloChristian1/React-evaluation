import "./all.css";
import New from "./New.jsx";
import Filter from "./Filter";
// import Image1 from "./assets/account.svg";
// import Image2 from "./assets/bg-header-desktop.svg";
// import Image3 from "./assets/loop-studios.svg";
// import Image4 from "./assets/insure.svg";
// import Image5 from "./assets/eyecam-co.svg";
// // import Image6 from "./assets/bg-header-mobile.svg";
// import Image7 from "./assets/faceit.svg";
// // import Image8 from "./assets/icon-remove.svg";
// import Image9 from "./assets/manage.svg";
// import Image10 from "./assets/myhome.svg";

const Card = (props) => {
  const languages = ["JavaScript", "React", "HTML"];
  return (
    <>
      <div className="container2">
        <div className="wrapper" id="green">
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
                  <p className="text">{" . " + props.time + " . "}</p>
                </div>
                <div>
                  <p className="text">{props.option}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <div className="filt">
            <Filter  filterText={props.filterText} />;
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
