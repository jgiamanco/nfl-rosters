import React, { ReactNode } from "react";

interface ScrollProps {
  children: ReactNode;
}

const Scroll: React.FC<ScrollProps> = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "70vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
