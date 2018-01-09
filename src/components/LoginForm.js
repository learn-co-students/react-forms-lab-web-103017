import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

  }

  handleChange = (event) => {
    if (event.target.id === 'test-username'){
      this.setState({
        username: event.target.value,
      });
    }
    else{
      this.setState({
        password: event.target.value,
      });
    }

  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username !== '' && this.state.username !== ''){
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
