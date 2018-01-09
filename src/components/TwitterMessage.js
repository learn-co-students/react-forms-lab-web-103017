import React from 'react';

class TwitterMessage extends React.Component {
 constructor(props) {
   super();


   this.state = {
     value: "",
     remaining: props.maxChars
   };
 }

 handleChange = (event) => {
   this.setState({
     value: event.target.value,
     remaining: this.props.maxChars - event.target.value.length
   });
 }

 render() {
   return (
     <div>
       <strong>Your message:</strong>
       <input type="text"
       value={this.state.value}
       onChange={this.handleChange}/>
       <h2>{this.state.remaining}</h2>
     </div>
   );
 }
}

export default TwitterMessage;
