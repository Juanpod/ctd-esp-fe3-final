import React from 'react'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
  const {state, dispatch} = useContextGlobal()
  const theme = state.theme ?  'dark' :  ''
  return (
    <footer className={theme}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo'/>
    </footer>
  )
}

export default Footer
