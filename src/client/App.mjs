import React from 'react'
//import EB from 'Util/EB'
//import checkLoginState from 'Util/CheckLoginState'
import Home from './mainmenu/Home'
import logo from './logo.png'
import './scss/logo.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (
      <div id="container">
        <div>
        <div id="logoBox"><img src={logo} alt="Appreciate Logo" /></div>
            <Home />
        </div>
      </div>
    )
  }

}

export default App;