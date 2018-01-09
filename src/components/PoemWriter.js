import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
    const arrayOfLines = (event.target.value.split(/\n/g)||[]);
    if (arrayOfLines.length === 3){
      // console.log(arrayOfLines[0].trim().split(/[ ]+/).length === 5)
      // console.log(arrayOfLines[1].trim().split(/[ ]+/).length === 3)
      // console.log(arrayOfLines[2].trim().split(/[ ]+/).length === 5)
      if(arrayOfLines[0].trim().split(/[ ]+/).length === 5 && arrayOfLines[1].trim().split(/[ ]+/).length === 3 && arrayOfLines[2].trim().split(/[ ]+/).length === 5){
        this.setState({
          valid: true
        });
      }
      else{
        this.setState({
          valid: false
        });
      }
    }
    else{
      this.setState({
        valid: false
      });
    }


  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.state.valid ? '' :
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
