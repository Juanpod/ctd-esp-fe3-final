import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const {state, dispatch} = useContextGlobal()
  const theme = state.theme ?  'dark' :  ''
  console.log(state.theme)
  
  return (
    
    <div className={theme}>
 
      <nav className={theme}>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <img id='logo' src="./images/DH.png" alt='DH-logo' />
        <Link to={routes.home}><h4>Home</h4></Link>
        <Link to={routes.contact}><h4>Contact</h4></Link>
        <Link to={routes.favs}><h4>Favoritos</h4></Link>
    
        

        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={() => dispatch({type: 'CHANGE_THEME', payload: !state.theme})} >Change theme</button>
      </nav>

    </div>
   
    
    
  )
}

export default Navbar