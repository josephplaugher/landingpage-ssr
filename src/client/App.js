import React from 'react'
import { Route } from 'react-router-dom'
import EB from 'Util/EB'
import Request from './mainmenu/Request'
import Nav from './mainmenu/Nav'
import Routes from './Routes'
import logo from './logo.png'
import clock from './clock.jpg'
import 'scss/logo.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (
      <div id="container" style={{ 
        backgroundImage: `url(${clock})`, 
        width: "auto",
        height: "100%", 
        padding: 0,
        top: 0,
        left: 0,
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover", 
        backgroundPosition: "center"  
        }} >
        <div>
          <div id="logoBox"><img src={logo} alt="Appreciate Logo" /></div>
          <EB comp="Request in App.mjs">
            <div><Request formState={this.state.formState}/></div>
          </EB>
          <EB comp="Nave in App.js">
            <div id="nav-container">
            <Nav />
            </div>
          </EB>
          <EB comp="Router in App.js">
            <div>
              {Routes.map(({ path, exact, component: C, ...rest }) => (
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  render={(props) => (
                    <C {...props} {...rest} />
                  )}
                />
              ))}
            </div>
          </EB>
        </div>
      </div>
    )
  }
}

export default App;