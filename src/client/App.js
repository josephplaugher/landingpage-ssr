import React from 'react'
import { Route } from 'react-router-dom'
import EB from 'Util/EB'
import Nav from './mainmenu/Nav'
import Routes from './Routes'
import logo from './logo.png'
import 'scss/logo.scss'

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
          <EB comp="Nave in App.js">
            <Nav switch="something"/>
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