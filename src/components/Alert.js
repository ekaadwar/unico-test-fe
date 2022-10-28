import React from "react";
import { DangerButton, PrimaryButton } from "./Button";

export const FailAlert = ({
  setOpenAlert,
  btnAction = () => {},
  btnText = "Oke",
  msg = [],
  type = "success",
}) => {
  return (
    <div className="fixed z-50 top-0 left-0 flex flex-row items-center justify-center h-screen w-screen py-40">
      <div className="shadow-1 sm:left-10 top-12 z-20 bg-white p-5 rounded-lg space-y-5">
        <div className="flex flex-col">
          {msg.map((item, id) => (
            <div key={id}>
              <p className="text-gray-500 text-lg text-center">{item}</p>
            </div>
          ))}
        </div>

        {type === "success" && (
          <PrimaryButton
            onClick={btnAction}
            content={<p className="text-center">{btnText}</p>}
          />
        )}

        {type === "danger" && (
          <DangerButton
            onClick={btnAction}
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
