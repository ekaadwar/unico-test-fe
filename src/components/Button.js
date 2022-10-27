import React from "react";

export const PrimaryButton = ({ content = <div />, onClick = () => {} }) => {
  return (
    <div
      className="px-5 py-2 bg-blue-500 text-white rounded-md w-full"
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export const DangerButton = ({ content = <div />, onClick = () => {} }) => {
  return (
    <div
      className="px-5 py-2 bg-red-100 border border-red-500 text-red-500 rounded-md w-full"
      onClick={onClick}
    >
      {content}
    </div>
  );
};
