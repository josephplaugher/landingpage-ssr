import React from 'react'
import { NavLink } from 'react-router-dom'
//import './../scss/nav.scss'

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


            /*
            <div id="nav-container">
                <NavLink activeStyle={{ fontWeight: 'bold' }} to={`/${param}`}></NavLink>
                <p className="nav" onClick={(e) => this.props.switch('home', e)} >Home</p>
                <p className="nav" onClick={(e) => this.props.switch('about', e)} >About</p>
                <p className="nav" onClick={(e) => this.props.switch('consulting', e)} >Consulting</p>
                <p className="nav" onClick={(e) => this.props.switch('specdev', e)} >Spec Development</p>
            </div>
            */
        )
    }
}

export default Nav;