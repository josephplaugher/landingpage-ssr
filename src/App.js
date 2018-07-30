import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
//import Menu from './Menu'
import Button from './Util/Button'
import RequestForm from './RequestForm';

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        showRequestForm: false
      }
  }

  openRequestForm = (e) => {
    this.setState({showRequestForm: true});
  }

  render() {

    this.openRequestForm = this.openRequestForm.bind(this);

    return (
      <div className="App">
        <div className="buttondiv">
          <Button id="submit" value="Request a Free Consulation" onClick={this.openRequestForm}/>
        </div>
          { this.state.showRequestForm? 
          (
            <RequestForm />
          ):(<br/>)
          }
      </div>
    );
  }
}

export default App;
