import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ""
    };
  }

  handleText = (event) => {
    this.setState({poem: event.target.value})
  }

  isPoemValid = () => {
    let lines = this.state.poem.split("\n")
    if (lines.length !== 3) {
      return false
    }

    let first = lines[0].trim().split(/\s+/)
    let second = lines[1].trim().split(/\s+/)
    let third = lines[2].trim().split(/\s+/)

    if (first.length !== 5) {
      return false
    }
    if (second.length !== 3) {
      return false
    }
    if (third.length !== 5) {
      return false
    }
    return true
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
        value={this.state.poem} onChange={this.handleText}/>
      {this.isPoemValid() ? <p>Valid Poem!</p> : <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
