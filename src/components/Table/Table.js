import React from "react";
import Users from "../Users/Users";
import AddUser from "../AddUser/AddUser";
import _ from "lodash";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "Сідоренко Петро Миколайович",
          email: "sidorenko@gmail.com",
          age: 51,
        },
        {
          id: 2,
          name: "Бондаренко Віктор Вікторович",
          email: "bondarenko@gmail.com",
          age: 51,
        },
      ],
      sort: "asc",
      sortField: "id",
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }
  onSort = (sortField) => {
    const cloneUsers = this.state.users.concat();
    const sortType = this.state.sort === "asc" ? "desc" : "asc";
    const orderedUsers = _.orderBy(cloneUsers, sortField, sortType);
    this.setState({
      users: orderedUsers,
      sort: sortType,
      sortField,
    });
  };

  render() {
    return (
      <div>
        <Users
          users={this.state.users}
          onEditUser={this.editUser}
          onDeleteUser={this.deleteUser}
          onSort={this.onSort}
          sort={this.state.sort}
          sortField={this.state.sortField}
        />
        <AddUser onAddUser={this.addUser} />
      </div>
    );
  }
  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, { id, ...user }] });
  }
  editUser(user) {
    let allUsers = this.state.users;
    allUsers[user.id - 1] = user;
    this.setState({ users: [] }, () => {
      this.setState({ users: [...allUsers] });
    });
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id),
    });
  }
}

export default Table;
