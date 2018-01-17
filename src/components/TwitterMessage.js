import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      textVal: ""
    };
  }

  updateText = (event) => {
    this.setState({textVal: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.textVal} onChange={this.updateText}/>
        <p> remaining characters is: {this.props.maxChars - this.state.textVal.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
