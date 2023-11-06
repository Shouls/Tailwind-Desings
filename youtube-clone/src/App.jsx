
import Header from './components/shared/Header/HeaderMain'
import Sidebar from './components/shared/Sidebar/SidebarMain'
import MainContent from './components/shared/Content/MainContent'
import { Route } from 'wouter'
function App() {
  return (
    <main className='p-5 sm:pr-8 sm:pb-8 sm:pt-[8vh] sm:pl-64'>
      <Header />
      <Sidebar />
      <Route path='/'><MainContent /></Route>

      <Route path='/suscripciones'><h1 className='text-5xl'>CONTENIDO DE SUSCRIPCIONES</h1></Route>
      <Route path='/shorts'><h1 className='text-5xl'>CONTENIDO DE SHORTS</h1></Route>
      <Route path='/profile/:name'><h1 className='text-5xl'>PERFIL</h1></Route>
      <Route path='/historIAL'><h1 className='text-5xl'>HISTORIAL</h1></Route>
      <Route path='/playlist'><h1 className='text-5xl'>PLAYLIST</h1></Route>


    </main>
  )
}

export default App
