import * as ReactForm from 'reactform-appco'
import React from 'react'
import LightBox from 'Util/LightBox'
import EB from 'Util/EB'
import SetUrl from 'Util/SetUrl'
import ValRules from './ValRules'
import 'scss/form.scss'

const Form = ReactForm.Form;
const Input = ReactForm.Input;
const TextArea = ReactForm.TextArea;
const Button = ReactForm.Button;

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }
    this.response = this.response.bind(this);
    this.closeLightBox = this.closeLightBox.bind(this)
    this.openLightBox = this.openLightBox.bind(this)
  }

  response = (res) => {
    if (res.success) {
      this.setState({
        userNotify: res.userNotify,
      });
    }
    else {
      console.error('submit error: ', res.error)
    }
  }

  closeLightBox = () => {
    this.setState({showForm: false})
  }

  openLightBox = () => {
    this.setState({showForm: true})
  }

  render() {

    return (
      <>
        <Button value="Find out what we can do for you" onClick={this.openLightBox}/>
     
        {this.state.showForm ? (
          <div id="lightbox-container" className="lightbox-background">
            <LightBox close={this.closeLightBox} >
            {this.state.userNotify}
              <Form formTitle="Request Consultation" 
              action={`${SetUrl()}/requestConsult`} 
              response={this.response}
              valrules={ValRules} >
                <Input name="fname" label="First Name" className="textinput" labelClass="label" errorClass="input-error" /><br />
                <Input name="email" label="Email" className="textinput" labelClass="label" errorClass="input-error" /><br />
                <TextArea name="message"
                  label="What brought you here?"
                  className="textinput"
                  labelClass="label"
                  textAreaErrorClass="textarea-error"
                  rows="5"
                  cols="12"
                />
                <div className="buttondiv">
                  <Button id="submit" value="Request Consultation" />
                </div>
              </Form>
            </LightBox>
          </div>
        ) : (null)}
      </>
    )
  }
}

  export default Request;