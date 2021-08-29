import React from 'react';
import './Auth.css';


import { Formik } from "formik";
import * as yup from "yup";




export default class Auth extends React.Component {
 /*
state = {
  imputs :[
  {name: "login", type: "text", text: "Введите логин:"},
  {name: "email", type: "email", text: "Введите Email:"},
  {name: "password", type: "password", text: "Введите пароль:"},
  {name: "password", type: "password", text: "Повторите пароль:"}
  ]
}
*/


 alertInfo(login) {
  alert(`Ваши данные: ${login}`)
}
/*
 renderImputsHandler = () => {
  return this.state.imputs.map((input, index) => {
    let names = input["name"];
     return(
       <>
        <label htmlFor={input["name"]}>
            <span>{input["text"]}</span>
            <input
              key = {input+index}
              name={input["name"]}
              type={input["type"]}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={this.values.names}
            />
          </label>
           {this.errors.names && this.touched.names && (
            <span style={{ color: "red" }}> {this.errors.names}</span>
          )}
          <br/>
          </>
     );
   })
 }
*/

  render() {
 const validationSchema = yup.object().shape({
  login: yup.string().typeError('Это должна быть строка').required('Обязательно для заполнения'),
  email: yup.string().email('Введите верный email').required('Обязательное для заполнения'),
  password:yup.string().typeError('Это должна быть строка').required('Обязательное для заполнения'),
  confirmPassword:yup.string().oneOf([yup.ref('password')], 'Пароль не совпадает').required('Обязательное для заполнения')
})
 
 //const {handleChange, handleBlur, values, handleSubmit, errors,
 //  touched, alertInfo, onSubmit } = this;
  return (
    <Formik
      initialValues={{
        login: '',
        email: '',
        password: '',
        confirmPassword: ''

      }}
      validationSchema={validationSchema}
      onSubmit={values => this.alertInfo(values.login)}
        
     
    >
      {({
        handleChange,
        handleBlur,
        values,
        handleSubmit,
        errors,
        touched,
      }) => (
        <form onSubmit={handleSubmit}>
            <label htmlFor="login">
            <span>Введите логин:</span>
            <input
              name="login"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.login}
            />
          </label>
           {errors.login && touched.login && (
            <span style={{ color: "red" }}> {errors.login} </span>
          )}
          <br/>
          
           <label htmlFor="email">
            <span>Введите Email:</span>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </label>
           {errors.email && touched.email && (
            <span style={{ color: "red" }}> {errors.email} </span>
          )}
          <br/>

           <label htmlFor="password">
            <span>Введите пароль:</span>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </label>
           {errors.password && touched.password && (
            <span style={{ color: "red" }}> {errors.password} </span>
          )}
          <br/>

          <label htmlFor="confirmPassword">
            <span>Повторите пароль:</span>
            <input
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
          </label>
           {errors.confirmPassword && touched.confirmPassword && (
            <span style={{ color: "red" }}> {errors.confirmPassword} </span>
          )}
          <br/>


          <button type="submit">Зарегистрироваться</button>
        </form>
      )}
    </Formik>
  )
  }
}

