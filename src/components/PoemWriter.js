import React from 'react';




class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      valid: true
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
    }, this.isValid)
  }

  isValid = () => {

    let lineArray = this.state.content.split("\n")
    // let lineArray = [" I have a good dog ", "she is grey", "she likes to eat kibble"]
    if (lineArray.length === 3) {
      let newLineOne = []
      let lineOne = lineArray[0].split(" ")
      for (let i = 0; i < lineOne.length; i++) {
        if (lineOne[i].length) {
          newLineOne.push(lineOne[i])
        }
      }
      let newLineTwo = []
      let lineTwo = lineArray[1].split(" ")
      for (let i = 0; i < lineTwo.length; i++) {
        if (lineTwo[i].length) {
          newLineTwo.push(lineTwo[i])
        }
      }
      let newLineThree = []
      let lineThree = lineArray[2].split(" ")
      for (let i = 0; i < lineThree.length; i++) {
        if (lineThree[i].length) {
          newLineThree.push(lineThree[i])
        }
      }


      if (newLineOne.length === 5 && newLineTwo.length === 3 && newLineThree.length === 5) {
        console.log('success!');
        return this.setState({valid: true})
      }
      console.log(lineArray);
      console.log("1", newLineOne);
      console.log("2", newLineTwo);
      console.log("3", newLineThree);
    }
    this.setState({valid: false})
  }

  render() {
    // this.isValid()
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.handleChange}
          value={this.state.content}
        />
      {!this.state.valid && (
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      )}
      </div>
    );
  }
}

export default PoemWriter;
