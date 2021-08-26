import { checkPropTypes } from 'prop-types';
import React from 'react';
import './Input.css';


const Input = props => {
  const inputType = props.type,
        cls = ["Input"],
        htmlFor = `${inputType}-${Math.random()}`;
  


    return (
        <div className = {cls.join(' ')}> 
        <label htmlFor = {htmlFor}></label>
        <input 
        id = {htmlFor}
        type = {inputType }
        value = {props.value}
        onChange = {props.onChange}
        
        
        />
        </div>
        
    );
}
export default Input