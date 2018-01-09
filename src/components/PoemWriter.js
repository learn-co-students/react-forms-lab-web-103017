import React from ‘react’;

class PoemWriter extends React.Component {
 constructor() {
   super();

   this.state = {
     value:""
   };
 }

 eventHandler = (event) => {
   this.setState({
     value: event.target.value
   }, this.validity() )
 }

 validity = () => {
   document.querySelector("#poem-validation-error").innerHTML = "This poem is not written in the right structure!"
   let lines = this.state.value.split("\n");
   if (lines.length !== 3) {
     return
   }
   let line1 = lines[0].trim().split(/\s+/);
   let line2 = lines[1].trim().split(/\s+/);
   let line3 = lines[2].trim().split(/\s+/);
   if (line1.length !== 5 || line2.length !== 3 || line3.length !== 5) {
     return
   }
   document.querySelector("#poem-validation-error").innerHTML = ""
 }

 render() {
   return (
     <div>
       <textarea
         rows="3"
         cols="60"
         value={this.state.value}
         onChange={this.eventHandler}
       />
       <div
         id="poem-validation-error"
         style={{color: ‘red’}}
       >
         This poem is not written in the right structure!
       </div>
     </div>
   );
 }
}

export default PoemWriter;

// The poem has three lines.
// The first line has five words.
// The second line has three words.
// The third line has five words.
