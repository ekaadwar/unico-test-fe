import React from "react";

export const PrimaryButton = ({ content = <div />, onClick = () => {} }) => {
  return (
    <div
      className="px-5 py-2 bg-blue-500 active:bg-blue-700 text-white rounded-md w-full cursor-pointer"
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export const DangerButton = ({ content = <div />, onClick = () => {} }) => {
  return (
    <div
      className="px-5 py-2 bg-red-100 active:bg-red-300 border border-red-500 text-red-500 rounded-md w-full cursor-pointer"
      onClick={onClick}
    >
      {content}
    </div>
  );
};
