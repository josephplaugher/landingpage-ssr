import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom'
import FormClass from 'Util/FormClass'
import Form from 'Util/Form'
import Input from 'Util/Input'
import Button from 'Util/Button'
import 'css/workingPane.css'
import 'css/form.css'
import 'css/userNotify.css'
import 'css/lsr.css'
import 'css/lightbox.css'

class RequestForm extends FormClass{

  closeRequestForm = (e) => {
    this.setState({showRequestForm: false});
  }

  render() {

    this.route = 'EnterDeposit';

    this.closeRequestForm = this.closeRequestForm.bind(this);

    return (
      <Router>   
        <div className="lightbox-background">
          <div id="userNotify">
          </div>
          <div className="lighbox">
            <Form formTitle="Request a Free Consultation" onSubmit={this.onSubmit}  >
              <Link to="/" className="close" onClick={this.closeRequestForm}>close</Link>
              <Input name="contact" label="Contact Name" value={this.state.contact} onChange={this.onChange} error={this.state.userNotify.contact} />
              <Input name="companyname" label="Company Name" value={this.state.companyname} onChange={this.onChange} error={this.state.userNotify.companyname} />
              <Input name="email" label="Email" value={this.state.email} onChange={this.onChange} error={this.state.userNotify.email} />
              <Input name="phone" label="Phone Number" value={this.state.phone} onChange={this.onChange} error={this.state.userNotify.phone} />
              <div className="buttondiv">
                <Button id="submit" value="Submit" />
              </div>
            </Form>
          </div>
        </div>
      </Router>
    )
  }
}

export default RequestForm;