import React from "react";

function PageHeader({ children, className, background }) {
  return (
    <header
      className={`header ${className}`}
      style={{
        backgroundImage: "url(" + background + ")",
      }}
    >
      {children}
    </header>
  );
}

export default PageHeader;
