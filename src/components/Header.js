import React from "react";
import Container from "./Container";

import { useHistory } from "react-router-dom";
import { MdChevronLeft as Back } from "react-icons/md";

const Header = ({ title = "Tittle", path = "/" }) => {
  let history = useHistory();
  const back = (path) => {
    history.push(path);
  };
  return (
    <header className="absolute top-0 left-0 z-50 w-full h-16 bg-white">
      <Container
        content={
          <div className="grid grid-cols-7 h-full ">
            <div className="w-full flex justify-start items-center">
              <button onClick={() => back(path)}>
                <Back color={"rgb(107 114 128)"} size={35} />
              </button>
            </div>
            <div className="col-span-5 flex justify-center items-center justify-self-center">
              <p className="text-xl">{title}</p>
            </div>
          </div>
        }
      />
    </header>
  );
};

export default Header;
