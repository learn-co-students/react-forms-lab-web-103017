import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      poemOk: true,
    };
  }

  handleChange = (event) => {
    this.setState({
      poem: event.target.value,
      poemOk: this.poemTight(event.target.value),
    });
  }

  poemTight = (poem) => {
    const poemTrim = poem.trim()
    if (poemTrim) {
      const lines = poemTrim.split('\n')
      if (lines.length === 3) {
        return lines[0].split(" ").filter(word => word).length === 5 && lines[1].split(" ").filter(word => word).length === 3 && lines[2].split(" ").filter(word => word).length === 5;
      }
      return false;
    }
    return false;
  }

  render() {
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.poem}
          rows="3"
          cols="60"
        />
        {!this.state.poemOk &&
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
