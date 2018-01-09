import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: 'hi', password: 'bye'};
  }

  handleChangeUsername = event => {
    if (event.target.id === "test-username") {
    this.setState({
      // ...this.state,
        username: event.target.value
      }, () => console.log(this.state))
    }
  }

  handleChangePassword = event => {
    if (event.target.id === "test-password") {
      this.setState({
        // ...this.state,
        password: event.target.value

      })
    }
  }

  onSubmitActions = (event) => {
    event.preventDefault()
    if ((this.state.username !== " ")&&(this.state.password !== " ")){
      console.log(this.state);
      this.props.onSubmit(this.state)

    }
  }


  render() {
    return (
      <form onSubmit={this.onSubmitActions}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleChangeUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleChangePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
    // console.log(this.state);
  }
}

export default LoginForm;
