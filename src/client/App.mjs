import React from 'react'
import EB from 'Util/EB'
import Nav from './mainmenu/Nav'
import Content from './mainmenu/Content'
import Request from './mainmenu/Request'
import logo from './logo.png'
import 'scss/logo.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        home: true,
        about: false,
        consulting: false,
        specdev: false
    }}
    this.switch = this.switch.bind(this)
    this.hideAllContent = this.hideAllContent.bind(this)
    this.showSelectedContent = this.showSelectedContent.bind(this)
  }

  switch = (content, e) => {
    this.hideAllContent()
    this.showSelectedContent(content)
  }

  hideAllContent = () => {
    this.setState({
      content: {
        home: false,
        about: false,
        consulting: false,
        specdev: false
      }
    })
  }

  showSelectedContent = (content) => {
    this.setState({
      content: {
        [content]: true
      }
    })
  }

  render() {

    return (
      <div id="container">
        <div>
        <div id="logoBox" onClick={(e) => this.switch('home',e)}>
          <img src={logo} alt="Appreciate Logo" />
        </div>
          <EB comp="Request in App.mjs">
            <div><Request formState={this.state.formState}/></div>
          </EB>
          <EB comp="Nav in App.mjs">
            <Nav switch={this.switch} />
          </EB> 
          <EB comp="Home in App.mjs">
            <Content content={this.state.content}/>
          </EB>
        </div>
      </div>
    )
  }

}

export default App;