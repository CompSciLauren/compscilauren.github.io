import React from "react";

const Tag = (props) => {
  return (
    <>
      <p
        style={{
          fontSize: "16px",
          backgroundColor: "#ffed4a",
          padding: "4px 12px",
          borderRadius: "12px",
          fontWeight: "600",
          margin: "16px",
        }}
      >
        #{props.title}
      </p>
    </>
  );
};

export default Tag;
