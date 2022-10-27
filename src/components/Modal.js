import React from "react";

const Modal = ({ setOpenModal, content = <div /> }) => {
  return (
    <div className="fixed z-50 top-0 flex flex-row items-center justify-center h-screen w-screen py-40">
      <div className="absolute left-7 sm:left-10 top-12 z-20 bg-white p-5 rounded-lg drop-shadow-lg">
        {content}
      </div>
      <div
        onClick={() => setOpenModal(false)}
        className="z-10 absolute inset-0 modal-close h-full w-full"
      />
    </div>
  );
};

export default Modal;
