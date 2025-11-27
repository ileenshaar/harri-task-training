import React from "react";
import "./HorizontalScroll.css";
import air from "../../images/airFreight2.jpg";

function HorizontalScroll() {
  return (
    <div className="HorizontalScroll">
      {[...Array(20)].map((e, i) => (
        <img src={air} alt={`Scroll item ${i + 1}`} key={i} />
      ))}
    </div>
  );
}

export default HorizontalScroll;
