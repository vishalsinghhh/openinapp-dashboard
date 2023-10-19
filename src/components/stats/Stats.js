import React from "react";

const Stats = (props) => {
  return (
    <div className="statsMain">
    <div className="statsMain1">
      <div style={{ background: props.color }} className="statsImg">
        <img src={props.img} alt="img" />
      </div>

      <div className="statName">Total {props.name}</div>
      <div className="flexStats">
        <div className="statsData">{props.data}</div>
        <div className="inc">{props.inc}</div>
      </div>
      </div>
    </div>
  );
};

export default Stats;
