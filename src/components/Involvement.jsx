import React from "react";

const Involvement = (props) => {
  return (
    <a href={props.link} target="_blank">
      <div class="involvement-grid-item">
        <h2>{props.company}</h2>
        <h3>{props.job}</h3>
        <p>
          {props.startDate} - {props.endDate}
        </p>
      </div>
    </a>
  );
};

export default Involvement;
