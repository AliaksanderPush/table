import React from 'react';
import './Registration.css';
import Input from '../components/Input/Input';



export default class  Registration extends React.Component {
  render() {
      return (
      <div className = "Registration" >
          <h2>Регистрация</h2>
        <form>
        <Input/>
        <Input/>
        <Input/>


         <button className = "btn">Зарегистрироваться</button>
        </form>
       

      </div>
      
      );
  }


}