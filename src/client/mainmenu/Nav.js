import React from 'react'
import { NavLink } from 'react-router-dom'
//import 'scss/nav.scss'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.buttons = [{
            name: 'Home',
            param: '/'
        }, {
            name: 'About',
            param: '/about'
        }, {
            name: 'Consulting',
            param: '/consulting'
        }, {
            name: 'Spec Dev',
            param: '/specdev'
        }];
    }

    render() {

        const NavBar = this.buttons.map(({ name, param }) => (
            <p className="nav" key={param}>
              <NavLink activeStyle={{fontWeight: 'bold'}} to={param}>
                {name}
              </NavLink>
            </p>
        ))

        return (
            NavBar
        )
    }
}

export default Nav;