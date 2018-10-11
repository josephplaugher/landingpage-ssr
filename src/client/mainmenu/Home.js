import React from 'react'
import {
  ServerRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import About from './endpoints/About'
import Consulting from './endpoints/Consulting'
import SpecDev from './endpoints/SpecDev'
import Request from './Request'
import './../scss/main.scss'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: {},
      error: null
    };
  }

  render() {
    return (
      <div id="home-container">
          <h1 id="headline">Solving Business Process Problems Through Software</h1>
          <h2 id="subheadline">You and your staff are probably doing a lot of things manually that can be automated.
        <br/>Which means you have inefficiencies in your workflow that you are not aware of.
        <br/>If you're not fully leveragng software, you are losing money. Let us help.</h2>
          <div id="content">
          </div>
        <div><Request formState={this.state.formState}/></div>
      </div>
    )
  }

}

export default Home;