import { Link } from "react-router-dom";

const Icon = (props) => {
  console.log("Hello");
  return (
    <>
      <div className={props.IconClass}>
        <Link to={props.link}>
          <img src={props.IconPic} alt="Image" />
        </Link>
      </div>
    </>
  );
};

export default Icon;
