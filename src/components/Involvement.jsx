import React from "react";

const Involvement = (props) => {
  return (
    <div class="involvement-grid-item">
      <h2>{props.company}</h2>
      <h3>{props.job}</h3>
      <p>
        {props.startDate} - {props.endDate}
      </p>
    </div>
  );
};

export default Involvement;
