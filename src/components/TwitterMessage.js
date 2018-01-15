import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event => {
    const valid = event.target.value.length < this.props.maxChars + 1
    if (valid) {
      this.setState({
        value: event.target.value
      });
    }
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <span>{this.props.maxChars - this.state.value.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
