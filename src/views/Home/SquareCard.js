import React from "react";

const SquareCard = ({ className, children, index }) => {
  return (
    <div className="square-item">
      <div
        className={`content ${className} ${
          index !== undefined && (index % 2 === 0 ? "even" : "odd")
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default SquareCard;
