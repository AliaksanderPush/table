import React from 'react';
import './Auth.css';


import { Formik } from "formik";
import * as yup from "yup";




export default class Auth extends React.Component {
 
state = {
  imputs :[
  {name: "login", type: "text", text: "Введите логин:"},
  {name: "email", type: "email", text: "Введите Email:"},
  {name: "password", type: "password", text: "Введите пароль:"},
  {name: "password", type: "password", text: "Повторите пароль:"}
  ]
}



 alertInfo(login) {
  alert(`Ваши данные: ${login}`)
}

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


  render() {
 const validationSchema = yup.object().shape({
  login: yup.string().typeError('Это должна быть строка').required('Обязательно для заполнения'),
})
 
 //const {handleChange, handleBlur, values, handleSubmit, errors,
 //  touched, alertInfo, onSubmit } = this;
  return (
    <Formik
      initialValues={{
        login: '',

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
           {this.renderImputsHandler()}
          <button type="submit">Зарегистрироваться</button>
        </form>
      )}
    </Formik>
  )
  }
}

