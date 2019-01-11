import React from 'react'
import { Route } from 'react-router-dom'
import EB from 'Util/EB'
import Request from './mainmenu/Request'
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
          <div ><img src={logo} alt="Appreciate Logo" /></div>
          <EB comp="Request in App.mjs">
            <div><Request formState={this.state.formState}/></div>
          </EB>
          <EB comp="Nave in App.js">
            <div className="grid-child" id="nav-container">
            <Nav />
            </div>
          </EB>
          <EB className="grid-child" comp="Router in App.js">
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
    )
  }
}

export default App;