import React from "react";
import { Link, useLocation } from 'react-router-dom'
import { useContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {

  const {state, dispatch} = useContextGlobal()
  const location = useLocation()
  
  const addFav = (item)=>{
    let favs = [];

    try {
      const favoritesJSON = localStorage.getItem('favs')
      if (favoritesJSON) {
        favs = JSON.parse(favoritesJSON);
      }
    } catch (error) {
      console.error('Error al analizar JSON:', error)
    }

    console.log(favs)
    
    let existe = false

    favs.map(fav => {
      if(item.id == fav.id) {
        existe = true
        alert(`"${fav.name}" ya existe en los favoritos`)
      }
    })
  // Aqui iria la logica para agregar la Card en el localStorage
    if (!existe) {
      dispatch({type: 'ADD_FAV', payload: item})
      alert(`"${name}" ha sido agregado a favoritos.`)
    }
      
  }

  //console.log(name)
  const theme = state.theme ?  'dark' :  ''

  return (
    <div className={`card ${theme}`}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

        <Link to={'/dentist/' + id }>
          <img src="./images/doctor.jpg" alt="doctor" className="card-image"/>
          <h3>{name}</h3>
          <h4>{username}</h4>
        </Link>

        {
          location.pathname == '/' &&
          <button onClick={() => addFav({name, username, id})} className="favButton">Add fav</button>
        }
        
    </div>
  );
};

export default Card;
