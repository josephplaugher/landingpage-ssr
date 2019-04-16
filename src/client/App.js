import React from 'react'
import { Route } from 'react-router-dom'
import EB from 'Util/EB'
import Request from './mainmenu/Request'
import Nav from './mainmenu/Nav'
import NavMobile from './mainmenu/NavMobile'
import Routes from './Routes'
import logo from './logo.png'
import logo_mobile from './logo_mobile.png'
import 'scss/logo.scss'
import 'scss/main.scss'
import 'scss/main-desktop.scss'
import 'scss/main-mobile.scss'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { viewport: 0 }
    }

    componentDidMount() {
        let viewport = window.innerWidth
        this.setState({ viewport: viewport })
    }

    render() {
        return (
            <div id="container">
                {this.state.viewport > 701 ? (
                    <>
                        <div id="image-header-desktop">
                            <img src={logo} alt="Appreciate Logo" />
                        </div>
                        <EB comp="Nave in App.js">
                            <div className="nav" id="nav-container">
                                <Nav />
                            </div>
                        </EB>
                    </>
                ) : (
                    <>
                        <div id="image-header-mobile">
                            <img src={logo_mobile} alt="Appreciate Logo" />
                        </div>
                        <EB comp="Nave in App.js">
                            <div
                                className="nav-mobile"
                                id="nav-container-mobile"
                            >
                                <NavMobile />
                            </div>
                        </EB>
                    </>
                )}

                <EB comp="Router in App.js">
                    <div id="content">
                        {Routes.map(
                            ({ path, exact, component: C, ...rest }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    exact={exact}
                                    render={props => <C {...props} {...rest} />}
                                />
                            )
                        )}
                    </div>
                </EB>
                <EB comp="Request in App">
                    <div id="request-box">
                        <Request formState={this.state.formState} />
                    </div>
                </EB>
            </div>
        )
    }
}

export default App
