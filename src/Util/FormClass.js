import React from 'react'
import validate from './Validate'
import Ajax from './Ajax'
import 'css/workingPane.css'
import 'css/form.css'

class FormClass extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      userNotify: '',
      formData: '',
      validForm: false,
      searchView: true
    };
    this.route = '';
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  onChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let clEr = Object.assign({}, this.state.userNotify);
    clEr[name] = '';
    this.setState({
      userNotify: clEr
    });
    //place updated data into state
    this.rebuildFormData(name,value);
  }

  rebuildFormData = (name,value) => {
    //place updated data into state
    let newVals = Object.assign({}, this.state.formData);
    newVals[name] = value;
    this.setState({
      [name]: value,
      formData: newVals
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    let val = new validate(this.state.formData);
    let prom = val.getPromise();
    prom.then( (error) => {
      console.log('the error: ',error);
        if(error.hasError){ 
          this.setState({
            userNotify: error,
            validForm: false
          })
        }
        if(!error.hasError){
          this.setState({
            validForm: true
          })
          console.log('about to submit...');
          this.submitData();
        }
      }) 
  }

  submitData = () => {
    console.log('submitting now...');
    Ajax.post("http://localhost:3004/"+ this.route + "/", this.state.formData)
    .then((res) => {
      if(res.data.success){
        this.setState({
            success: res.data.success,
            userNotify: res.data.userNotify
          })
      }
    })
  }
}

export default FormClass;