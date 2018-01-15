import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      isValid: false,
    };
  }

  handleChange = event => {
    this.setState({
      text : event.target.value
    }, this.poemValid)

  }

  lineFilterNumber = (string) => {
    return string.split(/\s+/).filter(word => word).length
  }

  poemValid = () => {
    const linesArr = this.state.text.split(/\r|\r\n|\n/)
    const lineCount = linesArr.length
    console.log(linesArr)
    if (lineCount === 3) {
      const lineOne = this.lineFilterNumber(linesArr[0])
      const lineTwo = this.lineFilterNumber(linesArr[1])
      const lineThree = this.lineFilterNumber(linesArr[2])
      console.log(lineThree)
      if (lineOne === 5 && lineTwo === 3 && lineThree === 5) {
        return this.setState({
          isValid: true
        })
      }
    }
    return this.setState({
      isValid: false
    })
  }




  render() {
    console.log(this.state.isValid)
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value = {this.state.text}
          onChange={this.handleChange}
        />
        {this.state.isValid ? '' : <div
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
