import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      error: false,
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = event => {
    this.setState({
      value: event.target.value
    });
    //console.log(event.target.value)
    let poemArray = (event.target.value).split(/\r\n|\r|\n/);
    if (poemArray.length === 3) {
      let firstLine = poemArray[0].replace(/\s+/g,' ').trim().split(' ').length;
      let secondLine = poemArray[1].replace(/\s+/g,' ').trim().split(' ').length;
      let thirdLine = poemArray[2].replace(/\s+/g,' ').trim().split(' ').length;
      //console.log(firstLine, secondLine, thirdLine)
      if (firstLine === 5 && secondLine === 3 && thirdLine === 5) {
        this.setState({
          error: true,
        });
      } else {
        this.setState({
          error: false,
        });
      }
    } else {
      this.setState({
        error: false,
      });
    }
    //console.log((this.state.value).split(/\r\n|\r|\n/))
  }


  render() {
    let errorMessage;
    this.state.error ? errorMessage = '' : errorMessage = <div id="poem-validation-error"
      style={{color: "red"}}>
      This poem is not written in the right structure!
    </div>
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.handleInput}
          value={this.state.value}
        />
      {errorMessage}
      </div>
    );
  }
}

export default PoemWriter;
