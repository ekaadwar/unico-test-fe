import React, { Component } from "react";
import HomeHeader from "../components/HomeHeader";
import Container from "../components/Container";
import Modal from "../components/Modal";

import { connect } from "react-redux";
import { authSignOut } from "../redux/actions/auth";
import {
  MdChevronLeft as Back,
  MdCancel as Cancel,
  MdOutlineImage as Image,
  MdChevronRight as Next,
  MdOutlineSearch as Search,
  MdCardGiftcard as Material,
  MdOutlinePermDataSetting as Fitting,
  MdLayers as Acrylic,
  MdOutlineCategory as Other,
} from "react-icons/md";
import { TbTool as Tool } from "react-icons/tb";
import { IoIosSquare as Ceramic } from "react-icons/io";
import { IndicatorDot } from "../components/Dot";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MenuModal: false,
    };
  }

  onMenu = () => {
    this.setState({ MenuModal: true });
  };

  signOut = () => {
    this.props.history.push("/signin");
  };

  render() {
    return (
      <section className="scroll-indicator-none flex flex-col h-screen pt-20 overflow-y-auto">
        <HomeHeader buttonFunction={this.onMenu} />
        <Container
          content={
            <div className="space-y-10 pb-24">
              <div className="relative">
                <input
                  className="focus:outline-none w-full border border-gray-400 bg-gray-100 py-2 pl-3 pr-20 rounded-md"
                  placeholder="search"
                />

                <div className="absolute top-2 right-0 flex w-20 justify-evenly ">
                  <button>
                    <Cancel color="rgb(107 114 128)" size={25} />
                  </button>
                  <button>
                    <Search color="rgb(107 114 128)" size={25} />
                  </button>
                </div>
              </div>

              <div>
                <div className="h-40 flex items-center justify-between bg-gray-100 rounded-xl">
                  <div className="back-container flex items-center justify-center h-full">
                    <Back color="rgb(107 114 128)" size={40} />
                  </div>
                  <Image color="rgb(209 213 219)" size={100} />
                  <div className="next-container flex items-center justify-center h-full">
                    <Next color="rgb(107 114 128)" size={40} />
                  </div>
                </div>

                <div className="flex justify-center pt-3 space-x-1">
                  {[...Array(5)].map((item, id) => (
                    <div key={id}>
                      <IndicatorDot />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-10 justify-items-center">
                <div>
                  <div className="flex flex-col justify-center items-center w-20 h-20 bg-gray-100 rounded-md text-blue-500">
                    <Material size={30} />
                    <p>Material</p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col justify-center items-center w-20 h-20 bg-gray-100 rounded-md text-blue-500">
                    <Tool size={30} />
                    <p>Tools</p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col justify-center items-center w-20 h-20 bg-gray-100 rounded-md text-blue-500">
                    <Fitting size={30} />
                    <p>Fitting</p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col justify-center items-center w-20 h-20 bg-gray-100 rounded-md text-blue-500">
                    <Ceramic size={30} />
                    <p>Ceramics</p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col justify-center items-center w-20 h-20 bg-gray-100 rounded-md text-blue-500">
                    <Acrylic size={30} />
                    <p>Acrylic</p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col justify-center items-center w-20 h-20 bg-gray-100 rounded-md text-blue-500">
                    <Other size={30} />
                    <p>Other</p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        {this.state.MenuModal === true && (
          <Modal
            setOpenModal={() => this.setState({ MenuModal: false })}
            content={
              <div className="flex flex-col items-start h-32 px-2 text-gray-500 font-bold">
                <div className="flex-1 space-y-5">
                  <Link to="/list">
                    <p>User List</p>
                  </Link>
                  <button onClick={this.signOut}>
                    <p>Log Out</p>
                  </button>
                </div>
                <p className="text-xs">v1.0.0</p>
              </div>
            }
          />
        )}
      </section>
    );
  }
}

const mapDispatchToProps = {
  authSignOut,
};

export default connect(null, mapDispatchToProps)(Home);
