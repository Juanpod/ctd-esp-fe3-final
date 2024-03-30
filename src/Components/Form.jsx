import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [datosForm, setDatosForm] = useState({
    nombre: '',
    email: ''
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if(datosForm.nombre.length > 5 && validateEmail(datosForm.email)){
      console.log(datosForm)
      setShow(true)
      setErr(false)
    } else {
      
      setErr(true)
      setShow(false)
    }
    
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre completo: </label>
        <input type='text' onChange={(event) => {setDatosForm({...datosForm, nombre: event.target.value})}}/>
        <label>Correo electronico: </label>
        <input type='text' onChange={(event) => {setDatosForm({...datosForm, email: event.target.value})}}/>
        <button>Enviar</button>
      </form>

      {show && <h3>Gracias {datosForm.nombre}, nos contactaremos cuanto antes via mail {datosForm.email}</h3>}
      {err && <h4 style={{color:'red'}}> Por favor verifique su información nuevamente</h4>}

    </div>
  );
};

export default Form;
