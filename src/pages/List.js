import React from "react";
import Canvas from "../components/Canvas";
import Container from "../components/Container";
import { ListCard } from "../components/Card";
import { CircleLg } from "../components/Circle";

import { MdPermIdentity as Account } from "react-icons/md";

const List = () => {
  return (
    <Canvas
      content={
        <Container
          content={
            <div className="space-y-5">
              {[...Array(3)].map((id) => (
                <div key={id}>
                  <ListCard
                    content={
                      <div className="flex items-center space-x-5">
                        <div>
                          <CircleLg
                            content={<Account color="white" size={40} />}
                          />
                        </div>
                        <div>
                          <p className="text-2xl">Steve Job</p>
                          <p className="text-gray-500">steve@uapps.com</p>
                        </div>
                      </div>
                    }
                  />
                </div>
              ))}
            </div>
          }
        />
      }
    />
  );
};

export default List;
