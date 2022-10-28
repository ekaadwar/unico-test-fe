import React from "react";
import { useHistory } from "react-router-dom";
import { SlHome as Home } from "react-icons/sl";
import {
  MdPermIdentity as Account,
  MdOutlineAddShoppingCart as Cart,
} from "react-icons/md";
import PartContainer from "./PartContainer";

const ButtonMenu = () => {
  let history = useHistory();

  const changePage = (path) => {
    history.push(path);
  };

  return (
    <div className="shadow-top absolute flex items-center bottom-0 h-20 w-full bg-white">
      <PartContainer
        content={
          <div className=" flex flex-row justify-between items-center">
            <button
              onClick={() => changePage("/")}
              className="flex flex-col items-center text-gray-500"
            >
              <Home size={30} />
              <p className="text-sm">Home</p>
            </button>
            <button className="flex flex-col items-center text-gray-500">
              <Cart size={30} />
              <p className="text-sm">Cart</p>
            </button>
            <button
              onClick={() => changePage("/profile")}
              className="flex flex-col items-center text-gray-500"
            >
              <Account size={30} />
              <p className="text-sm">Account</p>
            </button>
          </div>
        }
      />
    </div>
  );
};

export default ButtonMenu;
