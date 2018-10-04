import * as ReactForm from 'reactform-appco'
import React from 'react'
import EB from 'Util/EB'
import checkLoginState from 'Util/CheckLoginState'
import Home from './mainmenu/home'
import 'css/main.css'
import 'css/userNotify.css'

const Form = ReactForm.Form;
const Input = ReactForm.Input;
const Button = ReactForm.Button;

class AppreciateCo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoggedIn: true,
      userData: {}
    }
    this.setLoginState();
  }

  setLoginState = () => {
    let auth = checkLoginState();
    auth.then((userData) => {
      if (userData === 'not logged in') {
        this.setState({
          // isLoggedIn:false,
          // userData: {} 
        });
      } else {
        this.setState({
          isLoggedIn: true,
          userData: userData
        });
      }
    });
  }

  render() {

    return (
      <div id="container">
        <div>
          <EB comp="Home">
            <Home userData={this.state.userData} />
          </EB>
        </div>
      </div>
    )
  }

}

export default AppreciateCo;