import React from 'react';
import './Registration.css';
import Input from '../components/Input/Input';



export default class  Registration extends React.Component {
   
   state = {
     formControls: {
      email : {
              value : '',
              type: '',
              label: '',
              errorMessage: 'Введите корректный e-mail',
              valid: false,
              touched:false,
              validation:{
              required: true,
              minlength:6
              }
            },
   password : {
              value : '',
              type: '',
              label: '',
              errorMessage: 'Введите корректный e-mail',
              valid: false,
              touched:false,
              validation:{
              required: true,
              minlength:6
              }
            },
   password2:  {
              value : '',
              type: '',
              label: '',
              errorMessage: 'Введите корректный e-mail',
              valid: false,
              touched:false,
              validation:{
              required: true,
              minlength:6
              }
           }
        }
   }
    
    checkHandler = (e, formControl) => {
       console.log(e.target.value);
       console.log(formControl);

    }


    submitHandler = e => {
      e.preventDefault();
    }

    renderhandlerImputs() {
    return Object.keys(this.state.formControls).map((formControl, index) => {
      const  inpName = this.state.formControls;  
         return (
           <Input
            key = {formControl + index}
            type = {formControl.type}
            label = {formControl.label}
            errorMessage = {formControl.errorMessage}
            valid = {formControl.valid}
            touched = {formControl.touched}
            shouldValidate = {!!formControl.validation}
            onChange = {e => this.checkHandler(e, formControl)}

           />
         );
         })}

    
  


  render() {
      return (
      <div className = "Registration" >
          <h2>Регистрация</h2>
        <form onSubmit = {e => this.submitHandler(e)} >
        {this.renderhandlerImputs()}
         <button className = "btn">Зарегистрироваться</button>
        </form>
       

      </div>
      
      );
  }


}