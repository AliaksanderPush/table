import React from 'react';
import './Registration.css';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import is from 'is_js';




export default class  Registration extends React.Component {
   
   state = {
     isFormValid: false,
     formControls: {
      email : {
              value : '',
              type: 'email',
              label: 'Email',
              errorMessage: 'Введите корректный e-mail',
              valid: false,
              touched:false,
              validation:{
              required: true,
              email:true
              }
            },
   password : {
              value : '',
              type: 'password',
              label: 'Пароль',
              errorMessage: 'Введите корректный password',
              valid: false,
              touched:false,
              validation:{
              required: true,
              minlength:6
              }
            }
   
        }
   }
    
   validHandle(value, validation) {
     if (!validation) {
       return true;
     } 
     let isValid = true;
     
     if (validation.required) {
       isValid = value.trim() !== '' && isValid;
     }

     if (validation.email) {
        isValid = is.email(value) && isValid;
     }
     
     if (validation.minlength) {
       isValid = value.length >= validation.minlength && isValid;
     }
      
     return isValid;
    
   }

    checkHandler = (value, controlName) => {
     const formControls = {...this.state.formControls};
     const control = {...formControls[controlName]};
     control.value = value;
     control.touched = true;
     control.valid = this.validHandle(control.value, control.validation);
     formControls[controlName] = control;

     let isFormValid = true
     Object.keys(formControls).forEach(name => {
     isFormValid = formControls[name].valid && isFormValid
    })

     this.setState({formControls, isFormValid});

    }
    loginHandler = () => {
      console.log('dd');
    }

    submitHandler = e => {
      e.preventDefault();
    }

    renderhandlerImputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const  control = this.state.formControls[controlName];  
         return (
           <Input
            key = {controlName + index}
            type = {control.type}
            label = {control.label}
            errorMessage = {control.errorMessage}
            valid = {control.valid}
            touched = {control.touched}
            shouldValidate = {!!control.validation}
            onChange = {e => this.checkHandler(e.target.value, controlName)}

           />
         );
         })}
        

    
  


  render() {
      return (
      <div className = "Registration" >
          <h2>Регистрация</h2>
        <form onSubmit = {e => this.submitHandler(e)} >
        {this.renderhandlerImputs()}
         <Button 
         className = "btn"
         onClick={this.loginHandler}
         disabled={!this.state.isFormValid}
         >Зарегистрироваться</Button>
        </form>
       

      </div>
      
      );
  }


}