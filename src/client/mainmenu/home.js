import React from 'react'
//import 'css/main.css'
//import 'css/logo.css'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  render() {
    return (
      <div id="home-container">
       <div id="main-content">
          <p>Solving Business Process Problems Through Software</p>
          <p>You and your staff are probably doing a lot of things manually that can be automated.
        <br/>Which means you have inefficiencies in your workflow that you are not aware of.
        <br/>If you're not fully leveragng software, you are losing money. Let us help.</p>
        </div>
      </div>
    )
  }

}

export default Home;