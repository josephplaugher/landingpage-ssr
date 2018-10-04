import * as ReactForm from 'reactform-appco'
import React from 'react'
import EB from 'Util/EB'
import 'css/workingPane.css'
import 'css/form.css'
import 'css/userNotify.css'
import 'css/lsr.css'

const Form = ReactForm.Form;
const Input = ReactForm.Input;
const Button = ReactForm.Button;

class CreateInvoice extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      dataView: false,
      table: [],
      userNotify: {}
    }
    this.response = this.response.bind(this);
  }

  response = (res) => {
    if(res.success)
    this.setState({});
  }

  
  render() {

    return (
      <div>
      <div id="userNotify">
      {this.state.userNotify.success}
      </div>
      <div id="workingPane">
      <Form formTitle="Create Invoice" 
        action={`${process.env.BASE_URL}/trans/newInvoice`} 
        lsURL={`${process.env.BASE_URL}/liveSearch/`}
        response={this.response} 
        clearOnSubmit='false' >
          <Input name="date" label="Date" />
          <Input name="description" label="Description" />
          <Input name="name" label="Customer Name" />
          <Input name="customerid" label="Customer ID" />
          <Input name="terms" label="Terms" /> 
          <Input name="acctname" label="Revenue Account Name" />
          <Input name="acctno" label="Revenue Account Number" />
          <br /><br />
          <Input name="item[]" label="Item" /><Input name="price[]" label="Price" /><Input name="quant[]" label="Quantity" /><br/>
          <Input name="item[]" label="Item" /><Input name="price[]" label="Price" /><Input name="quant[]" label="Quantity" />
          <div className="buttondiv">
          <Button id="submit" value="Create Invoice" />
          <Button id="addLine" value="Add a Line" onClick={this.addLine}/>
          </div>
      </Form>
      </div>
      </div>
    )
  }
}

export default CreateInvoice;