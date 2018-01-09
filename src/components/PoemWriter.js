import React from "react";

const isValidPoem = poem => {
  const splitPoem = poem.split("\n").filter(l => l);
  const rightAmountOfLines = splitPoem.length === 3;
  if (rightAmountOfLines) {
    const hasRightWords =
      splitPoem[0].split(" ").filter(l => l).length === 5 &&
      splitPoem[1].split(" ").filter(l => l).length === 3 &&
      splitPoem[2].split(" ").filter(l => l).length === 5;
    if (hasRightWords) {
      return true;
    }
    return false;
  }
};

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      isValid: true
    };
  }

  handleChange = event => {
    const content = event.target.value;

    this.setState({
      value: content,
      isValid: isValidPoem(content)
    });
  };

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {!this.state.isValid && (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        )}
      </div>
    );
  }
}

export default PoemWriter;
