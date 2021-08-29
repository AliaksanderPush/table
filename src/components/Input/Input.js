import React from 'react';
import './Input.css';

 function isInvalid({valid, touched, shouldValidate}) {
    return !valid && touched && shouldValidate;
 }

const Input = props => {
  const inputType = props.type || 'text',
        cls = ['Input'],
        htmlFor = `${inputType}-${Math.random()}`;
   if (isInvalid(props)) {
       cls.push('invalid');
   }
      console.log(props);

    return (
        <div className = {cls.join(' ')}> 
        <label htmlFor = {htmlFor}>{props.label}</label>
        <br/>
        <input 
        id = {htmlFor}
        name = {htmlFor}
        type = {inputType }
        value = {props.value}
        onChange = {props.onChange}
          
        />
         {isInvalid(props)?<p>{props.errorMessage}</p> : null}
        </div>
       
        
    );
}
export default Input