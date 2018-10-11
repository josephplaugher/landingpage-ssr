import React from 'react'
import Route from 'react-router-dom'
import EB from 'Util/EB'
import Routes from './Routes'
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
          <EB comp="Router in App.mjs">
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
            test
          </EB>
        </div>
      </div>
    )
  }

}

export default App;