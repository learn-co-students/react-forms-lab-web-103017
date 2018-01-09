import React from 'react';

const count = line => line.split(' ').filter(l => l).length;

const isValidPoem = poem => {
  if (poem) {
    const lines = poem.split('\n').filter(l => l);
    const threeLines = lines.length === 3;
    const allwor = count(lines[0]) === 5 && count(lines[1]) === 3 && count(lines[2]) === 5;
    return threeLines && allwor;
  }
  return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      isValid: true
    };
  }

  setPoemContent = event => {
    const text = event.target.value;

    this.setState({
      text,
      isValid: isValidPoem(text),
    });
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.text}
          onChange={this.setPoemContent}
        />
        {!this.state.isValid &&
          <div id="poem-validation-error" style={{color: 'red'}} >
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
