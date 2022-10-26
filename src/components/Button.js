import React from "react";

export const SmallPrimaryButton = ({
  content = <div />,
  onClick = () => {},
}) => {
  return (
    <div
      className="px-5 py-2 bg-blue-500 text-white rounded-md"
      onClick={onClick}
    >
      {content}
    </div>
  );
};
