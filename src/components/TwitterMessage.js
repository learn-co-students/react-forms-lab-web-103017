import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      maxChars: this.props.maxChars
    };
  }

  handleChange = event => {
    let chars = this.state.maxChars - 1

    this.setState({
      value: event.target.value,
      maxChars: chars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>{this.state.maxChars} characters remaining.</p>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          maxchars={this.state.maxChars}
        />

      </div>
    );
  }
}

export default TwitterMessage;
