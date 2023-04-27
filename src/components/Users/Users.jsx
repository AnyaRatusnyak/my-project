import React from "react";
import "./Users.css";
import User from "../User/User";

class Users extends React.Component {
  render() {
    if (this.props.users.length > 0)
      return (
        <div className="container">
          <div className="row border">
            <div className="col-1">
              <button
                className="btn btn-secondary"
                onClick={this.props.onSort.bind(null, "id")}
              >
                id
                {this.props.sortField === "id" ? (
                  <small>{this.props.sort}</small>
                ) : null}
              </button>
            </div>
            <div className="col-3">
              {" "}
              <button
                className="btn btn-secondary"
                onClick={this.props.onSort.bind(null, "name")}
              >
                name
                {this.props.sortField === "name" ? (
                  <small>{this.props.sort}</small>
                ) : null}
              </button>
            </div>
            <div className="col-3">
              {" "}
              <button
                className="btn btn-secondary"
                onClick={this.props.onSort.bind(null, "email")}
              >
                email{" "}
                {this.props.sortField === "email" ? (
                  <small>{this.props.sort}</small>
                ) : null}
              </button>
            </div>
            <div className="col-3">
              {" "}
              <button
                className="btn btn-secondary"
                onClick={this.props.onSort.bind(null, "age")}
              >
                age
                {this.props.sortField === "age" ? (
                  <small>{this.props.sort}</small>
                ) : null}
              </button>
            </div>
            <div className="col-2"> </div>
          </div>
          {this.props.users.map((u, index) => (
            <User
              key={index}
              user={u}
              onEditUser={this.props.onEditUser}
              onDeleteUser={this.props.onDeleteUser}
            />
          ))}
        </div>
      );
    else return <div>Користувачів немає</div>;
  }
}

export default Users;
