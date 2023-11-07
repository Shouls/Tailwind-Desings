import Menu from '../Menu'

export default function Sidebar({ showMenu, toggleMenu }) {
  return (
    <>
      <aside
        className={`fixed top-0 lg:top-[11vh] 2xl:top-[8vh] h-full lg:h-[93vh] w-60 p-5 
        z-[9999] bg-white dark:bg-dark overflow-y-auto lg:left-0 ${showMenu ? 'left-0' : '-left-full'} 
        transition-all duration-300 ease-in-out`}
      >
        <Menu />
      </aside>
      <div role='button' onClick={() => toggleMenu()} className={`lg:hidden fixed left-0 top-0 w-full h-full bg-black/70 z-[9998] ${showMenu ? 'block' : 'hidden'}`} />
    </>
  )
}
