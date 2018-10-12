import React from 'react'
import {
  ServerRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './endpoints/Home'
import About from './endpoints/About'
import Consulting from './endpoints/Consulting'
import SpecDev from './endpoints/SpecDev'
import 'scss/main.scss'

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const content = this.props.content;
    return (
      <div id="home-container">
          <div id="content">
          {content.home ? (
            <Home />
          ):( null)}
          {content.about ? (
            <About />
          ):( null)}
          {content.consulting ? (
            <Consulting />
          ):( null)}
          {content.specdev ? (
            <SpecDev />
          ):( null)}
          </div>
      </div>
    )
  }

}

export default Content