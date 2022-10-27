import React from "react";
import Container from "./Container";

import { useHistory } from "react-router-dom";
import { MdChevronLeft as Back } from "react-icons/md";

const Header = ({ title = "Tittle" }) => {
  let history = useHistory();
  const back = () => {
    history.push("/");
  };
  return (
    <header className="absolute top-0 z-50 w-full h-16 bg-white">
      <Container
        content={
          <div className="grid grid-cols-5 h-full ">
            <button onClick={back}>
              <Back color={"rgb(107 114 128)"} size={35} />
            </button>
            <div className="col-span-3 flex justify-center items-center justify-self-center">
              <p className="text-xl">{title}</p>
            </div>
          </div>
        }
      />
    </header>
  );
};

export default Header;
