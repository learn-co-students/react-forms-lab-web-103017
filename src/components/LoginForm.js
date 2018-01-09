import React from ‘react’;

class LoginForm extends React.Component {
 constructor() {
   super();

   this.state = {
     username:"",
     password:"",
   };
 }

 handleUsernameChange = (event) => {
   this.setState({
     username: event.target.value
   })
 }

 handlePasswordChange = (event) => {
   this.setState({
     password: event.target.value
   })
 }

 clickHandler = (event) => {
   event.preventDefault()
   if (this.state.username && this.state.password) {
     this.props.onSubmit(this.state.username, this.state.password)
   } else {
     alert("nah")
   }
 }

 render() {
   return (
     <form onSubmit={this.clickHandler}>
       <div>
         <label>
           Username
           <input name="username" id="test-username" type="text" value={this.state.login} onChange={this.handleUsernameChange}/>
         </label>
       </div>
       <div>
         <label>
           Password
           <input name="password" id="test-password" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
         </label>
       </div>
       <div>
         <button type="submit">Log in</button>
       </div>
     </form>
   );
 }
}

export default LoginForm;
