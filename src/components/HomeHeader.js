import React, { useState } from "react";
import Container from "./Container";
// import Modal from "./Modal";

import { BiMenu } from "react-icons/bi";
import { logoApps } from "../assets";

const HomeHeader = ({ buttonFunction = () => {} }) => {
  const [linkModal, setLinkModal] = useState(false);
  return (
    <header className="absolute top-0 z-50 w-full h-16 bg-white">
      <Container
        content={
          <div className="relative grid grid-cols-3 h-full ">
            {/* <button onClick={() => setLinkModal(true)}> */}
            <button onClick={buttonFunction}>
              <BiMenu color={"rgb(107 114 128)"} size={35} />
            </button>
            <div className="flex justify-center items-center justify-self-center w-20">
              <img src={logoApps} alt={"Logo Unico Apss"} />
            </div>

            {/* {linkModal === true && (
              <Modal setOpenModal={() => setLinkModal(false)} />
            )} */}
          </div>
        }
      />
    </header>
  );
};

export default HomeHeader;
