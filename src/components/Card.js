import React from "react";

export const ListCard = ({ content = <div>This is content</div> }) => {
  return (
    <div className="drop-shadow-lg w-full bg-white px-6 py-5">{content}</div>
  );
};
