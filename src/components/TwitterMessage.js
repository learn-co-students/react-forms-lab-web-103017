import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      charRemaining: this.props.maxChars,
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      charRemaining: this.state.charRemaining - event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.value} onChange={this.handleChange} type="text" />
        <p>{this.state.charRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
