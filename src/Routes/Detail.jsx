import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const {state} = useContextGlobal()
  const theme = state.theme ?  'dark' :  ''
  const [dentist, setDentist] = useState({})
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams()
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id

  useEffect(() => {
    axios(url)
    .then(res => setDentist(res.data))
    
  }, [])

  console.log(dentist)

  return (
    <div className={`page ${theme}`}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <tbody>
          <tr>
            <td>Nombre:</td>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <td>Telefono:</td>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <td>Sitio Web:</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail