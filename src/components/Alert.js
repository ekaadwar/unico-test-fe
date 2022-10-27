import React from "react";
import { DangerButton, PrimaryButton } from "./Button";

export const FailAlert = ({
  setOpenAlert,
  btnText = "Oke",
  msg = [],
  type = "success",
}) => {
  return (
    <div className="fixed z-50 top-0 flex flex-row items-center justify-center h-screen w-screen py-40">
      <div className="shadow-1 sm:left-10 top-12 z-20 bg-white p-5 rounded-lg space-y-5">
        <div>
          {msg.map((item, id) => (
            <p key={id} className="text-gray-500 text-lg">
              {item}
            </p>
          ))}
        </div>

        {type === "success" && (
          <PrimaryButton
            onClick={() => setOpenAlert(false)}
            content={<p className="text-center">{btnText}</p>}
          />
        )}

        {type === "danger" && (
          <DangerButton
            onClick={() => setOpenAlert(false)}
            content={<p className="text-center">{btnText}</p>}
          />
        )}
      </div>
      <div
        onClick={() => setOpenAlert(false)}
        className="z-10 absolute inset-0 modal-close h-full w-full"
      />
    </div>
  );
};
