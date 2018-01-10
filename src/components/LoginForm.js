import React from 'react';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState(prevState => {
      return { [name]: value };
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username.length && this.state.password.length) {
      this.props.onSubmit(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input

              onChange={this.handleInputChange}
              id="test-username"
              type="text"
              name="username"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input

              onChange={this.handleInputChange}
              id="test-password"
              type="password"
              name="password"
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
          >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
