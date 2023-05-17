import React from "react";

export default function Filter(props) {
  return (
    <>
      <div className={props.filterClass}>{props.filterValue}</div>
    </>
  );
}
