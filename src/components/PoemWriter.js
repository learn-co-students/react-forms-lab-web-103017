import React from 'react';

const wordsCount = line => line.split(' ').filter(l => l).length;

const checkValidity = content => {
  if (content) {
    const lines = content.split('\n').filter(l => l);
    if (lines.length === 3) {
      if (wordsCount(lines[0]) === 5 && wordsCount(lines[1]) === 3 && wordsCount(lines[2]) === 5) {
        return content;
      } else {
        return false;
      }
    }
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: true
    };
  }

  getContent = e => {
    const content = e.target.value;
    this.setState({
      content,
      isValid: checkValidity(content)
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.getContent}
        />
        {!this.state.isValid &&
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      }
      </div>

    );
  }
}

export default PoemWriter;
