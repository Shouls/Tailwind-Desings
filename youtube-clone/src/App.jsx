
import Header from './components/shared/Header/HeaderMain'
import Sidebar from './components/shared/Sidebar/SidebarMain'
import MainContent from './components/shared/Content/MainContent'

import { Route } from 'wouter'

import { useState } from 'react'


function App() {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <main className='p-5 sm:pr-8 sm:pb-8 pt-[9vh] sm:pt-[11vh] 2xl:pt-[8vh] lg:pl-64 '>
      <Header toggleMenu={toggleMenu} />
      <Sidebar showMenu={showMenu} toggleMenu={toggleMenu} />
      <Route path='/'>
        <MainContent />
      </Route>

      <Route path='/suscripciones'><h1 className='text-5xl'>CONTENIDO DE SUSCRIPCIONES</h1></Route>
      <Route path='/shorts'><h1 className='text-5xl'>CONTENIDO DE SHORTS</h1></Route>
      <Route path='/profile/:name'><h1 className='text-5xl'>PERFIL</h1></Route>
      <Route path='/historIAL'><h1 className='text-5xl'>HISTORIAL</h1></Route>
      <Route path='/playlist'><h1 className='text-5xl'>PLAYLIST</h1></Route>


    </main>
  )
}

export default App
