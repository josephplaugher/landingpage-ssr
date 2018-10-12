import React from 'react'
import './../scss/nav.scss'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render() {
      return (
      <div id="nav-container">
        <p className="nav" onClick={(e) => this.props.switch('home',e)} >Home</p>
        <p className="nav" onClick={(e) => this.props.switch('about',e)} >About</p>
        <p className="nav" onClick={(e) => this.props.switch('consulting',e)} >Consulting</p>
        <p className="nav" onClick={(e) => this.props.switch('specdev',e)} >Spec Development</p>
      </div>
      )
    }
}

export default Nav;