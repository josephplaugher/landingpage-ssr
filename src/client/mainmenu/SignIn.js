import * as ReactForm from 'reactform-appco'
import React from 'react'
import EB from 'Util/EB'
//import 'css/userNotify.css'

const Form = ReactForm.Form;
const Input = ReactForm.Input;
const Button = ReactForm.Button;

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.response = this.response.bind(this);
  }

  response = (res) => {
    if(typeof res.userData !== 'undefined') {
      this.setState({
          userNotify: res.userNotify,
          userData: res.userData,
          isLoggedIn: true
      });
    }
    if(res.error !== 'undefined') {
      console.error('submit error: ', res.error);
    }
  }

  render() {

    return (
<div id="sign-in">
                <div id="logoBox"><img src={require('./AppreciateLogo.png')} alt="Appreciate Logo" /></div>
                <Form formTitle="Sign In" action="http://localhost:3004/users/login" response={this.response} >
                  <Input name="email" label="Email" /><br />
                  <Input name="password" label="Password" />
                  <div className="buttondiv">
                    <Button id="submit" value="Sign In" />
                  </div>

                </Form>
              </div>
    )
    }
}

export default SignIn;