import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    // this.handleTweet = this.handleTweet.bind(this)
  }

  handleTweet = event => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleTweet}
        />
        <div>{this.props.maxChars - this.state.value.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
