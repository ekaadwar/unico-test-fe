import React from "react";
import { BiShow } from "react-icons/bi";

export const InputAuth = ({
  label = "",
  placeholder = "",
  type = "text",
  alert = "",
  onChange = () => {},
}) => {
  return (
    <div className="flex flex-col w-full ">
      <p className="mb-2 text-gray-500">{label}</p>
      <div className="relative w-full">
        <input
          className={`pl-3 ${
            type === "password" ? "pr-12" : "pr-3"
          } py-2 w-full rounded-md border border-gray-500 bg-white focus:outline-none`}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
        />
        {type === "password" && (
          <div className="absolute top-2 right-3">
            <BiShow color="rgb(107 114 128)" size={28} />
          </div>
        )}
      </div>
      {alert && <p className="text-red-700 text-sm mt-1">{alert}</p>}
    </div>
  );
};
