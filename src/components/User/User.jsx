import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import AddUser from "../AddUser/AddUser";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
    };
  }
  user = this.props.user;
  render() {
    return (
      <div className="user" key={this.user.id}>
        <div className="row border">
          <div className="col-1 border">{this.user.id}</div>
          <div className="col-3 border">{this.user.name}</div>
          <div className="col-3 border">{this.user.email}</div>
          <div className="col-3 border">{this.user.age}</div>
          <div className="col-2 border">
            <IoCloseCircleSharp
              onClick={() => this.props.onDeleteUser(this.user.id)}
            />{" "}
            <IoHammerSharp
              onClick={() => {
                this.setState({ editForm: !this.state.editForm });
              }}
            />
            {this.state.editForm && (
              <AddUser user={this.user} onAddUser={this.props.onEditUser} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default User;
