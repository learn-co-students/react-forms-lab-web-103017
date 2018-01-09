import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUserChange = e => {
    this.setState({
      username: e.target.value,
    });
  }

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const username = this.state.username
    const password = this.state.password

    if (username !== '' && password !== '') {
      this.props.onSubmit;
    }else {
    }

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleUserChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

// LoginForm.propTypes = {
//   onSubmit: PropTypes.func,
// }

export default LoginForm;
