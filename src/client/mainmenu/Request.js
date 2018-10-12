import * as ReactForm from 'reactform-appco'
import React from 'react'
import LightBox from 'Util/LightBox'
import EB from 'Util/EB'
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
    if (typeof res.userData !== 'undefined') {
      this.setState({
        userNotify: res.userNotify,
      });
    }
    if (res.error !== 'undefined') {
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
      <div id="request-box">
      <div className="buttondiv">
        <Button value="Find out what we can do for you" onClick={this.openLightBox}/>
      </div>
        {this.state.showForm ? (
          <div id="lightbox-container" className="lightbox-background">
            <LightBox close={this.closeLightBox} >
              <Form formTitle="Request Consultation" action={`${process.env.BASE_URL}/requestConsult`} response={this.response} >
                <Input name="fname" label="First Name" className="textinput" labelClass="label" errorClass="input-error" /><br />
                <Input name="email" label="Email" className="textinput" labelClass="label" errorClass="input-error" /><br />
                <TextArea name="message"
                  label="What brought you here?"
                  className="textarea"
                  labelClass="label"
                  errorClass="input-error"
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
      </div>
    )
  }
}

  export default Request;