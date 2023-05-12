import "./all.css";

function Filter(props) {
  return (
    <>
      <div className="fil">
        <div className="filter">{props.filterText[0]}</div>
      </div>
    </>
  );
}

export default Filter;
