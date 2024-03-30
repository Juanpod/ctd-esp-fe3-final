import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state, dispatch} = useContextGlobal()
  const {data} = state
  console.log(state.theme)

  const theme = state.theme ?  'dark' :  ''

  //console.log(data)
  return (
    <main className={`page ${theme}`} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {data.map((item) => <Card key={item.id} name={item.name} id={item.id} username={item.username}/>)}
      </div>
    </main>
  )
}

export default Home