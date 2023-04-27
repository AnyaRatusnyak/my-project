import React from "react";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: null,
    };
  }
  userAdd = {};
  render() {
    return (
      <div>
        <form className="form-control" ref={(el) => (this.userForm = el)}>
          <input
            placeholder="ПІБ"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            placeholder="email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            placeholder="Вік"
            onChange={(e) => this.setState({ age: e.target.value })}
          />
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => {
              this.userForm.reset();
              this.userAdd = {
                name: this.state.name,
                email: this.state.email,
                age: this.state.age,
              };
              if (this.props.user) this.userAdd.id = this.props.user.id;
              this.props.onAddUser(this.userAdd);
            }}
          >
            Добавити
          </button>
        </form>
      </div>
    );
  }
}

export default AddUser;
