import React, { Component } from "react";
import Canvas from "../components/Canvas";
import Container from "../components/Container";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/users";
import { ListCard } from "../components/Card";
import { CircleLg } from "../components/Circle";

import { MdPermIdentity as Account } from "react-icons/md";

class List extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.auth.token);
  }
  render() {
    return (
      <Canvas
        content={
          <Container
            content={
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pb-24">
                {this.props.users.data.map((item, id) => (
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
                            <p className="text-2xl">{`${item.firstName} ${item.lastName}`}</p>
                            <p className="text-gray-500">{item.email}</p>
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
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
});

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
