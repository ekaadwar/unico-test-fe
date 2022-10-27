import React from "react";

export const CircleLg = ({ content = <p>this is content</p> }) => {
  return (
    <div className="flex h-20 w-20 items-center justify-center bg-gray-500 rounded-full">
      {content}
    </div>
  );
};

export const CircleXl = ({ content = <p>this is content</p> }) => {
  return (
    <div className="flex h-32 w-32 items-center justify-center bg-gray-500 rounded-full">
      {content}
    </div>
  );
};
