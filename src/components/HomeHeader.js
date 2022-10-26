import React from "react";
import Container from "./Container";

import { BiMenu } from "react-icons/bi";
import { logoApps } from "../assets";

const HomeHeader = () => {
  return (
    <header className="absolute top-0 z-50 w-full h-16">
      <Container
        content={
          <div className="grid grid-cols-3 h-full ">
            <button>
              <BiMenu color={"rgb(107 114 128)"} size={35} />
            </button>
            <div className="flex justify-center items-center justify-self-center w-20">
              <img src={logoApps} alt={"Logo Unico Apss"} />
            </div>
          </div>
        }
      />
    </header>
  );
};

export default HomeHeader;
