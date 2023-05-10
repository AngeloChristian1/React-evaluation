import "./all.css";

function New(props) {
  return (
    <>
      <div>
        <h3 className={props.className + " new"} id={props.id}>
          {props.text}
        </h3>
      </div>
    </>
  );
}

export default New;
