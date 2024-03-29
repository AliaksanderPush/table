import React from 'react';
import './Header.css';
import {Route, NavLink, Switch} from 'react-router-dom';
import Registration from '../Registration/Registration';
import Auth from '../Auth/Auth';

export default class Header extends React.Component {
  render() {
   return(
  <div className= "Header" >
 <ul>
        <li className="li" ><NavLink to = "/" exact >Главная</NavLink></li>
        <li className="li" ><NavLink to = "/registration">Регистрация</NavLink></li>
        <li className="li"><NavLink to = "/user">Авторизация</NavLink></li>
 </ul>
 <hr></hr>
    <Switch>
    <Route path = "/" exact render = {() => <h1>Главная</h1> }/>
    <Route path = "/registration" component={Registration}   />
    <Route path = "/user" component={Auth}  />
    </Switch>
    
  </div>


   );

  }

}
