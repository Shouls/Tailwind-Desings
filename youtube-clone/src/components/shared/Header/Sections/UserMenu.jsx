import {
  LuGlobe,
  LuKeyboard,
  LuLanguages,
  LuLogIn,
  LuMoon,
  LuSettings,
  LuShieldAlert,
  LuShieldQuestion,
  LuSunMedium,
  LuUserSquare2
} from 'react-icons/lu'
import { RiGoogleFill } from 'react-icons/ri'

import { Menu, MenuButton, MenuDivider } from '@szhsin/react-menu'
import { Link } from 'wouter'
import { useState } from 'react'

export default function UserMenu() {

  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains('dark')
  )

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Menu
        menuButton={
          <MenuButton>
            <div>
              <img
                src='https://insomniac.games/wp-content/uploads/2020/10/RC_RiftApart_Heroes_PS5-scaled.jpg'
                alt='Profile Pic'
                className='w-10 h-10 rounded-full object-cover object-top'
              />
            </div>{' '}
          </MenuButton>
        }
        align='end'
        menuClassName='bg-white dark:bg-dark-light rounded-lg'
        transition
      >
        <div className='flex items-start gap-4 px-3 py-2'>
          <div>
            <img
              src='https://insomniac.games/wp-content/uploads/2020/10/RC_RiftApart_Heroes_PS5-scaled.jpg'
              alt='Profile Pic'
              className='w-10 h-10 rounded-full object-cover object-top'
            />
          </div>
          <div className='font-medium dark:text-white'>
            <h3>Toiler</h3>
            <h4 className='text-sm text-gray-500'>rafabarbozsa@gmail.com</h4>
          </div>
        </div>

        <MenuDivider className='bg-gray-500/50' />

        <ul>
          <li>
            <Link
              href='/'
              className='flex items-center gap-4 text-dark dark:text-white px-3 py-2 hover:bg-gray-300 dark:hover:bg-stone-700 transition-colors duration-300'
            >
              <RiGoogleFill size={20} />
              <span>Cuenta de Google</span>
            </Link>
          </li>

          <li>
            <Link
              href='/'
              className='flex items-center gap-4 text-dark dark:text-white px-3 py-2 hover:bg-gray-300 dark:hover:bg-stone-700 transition-colors duration-300'
            >
              <LuUserSquare2 size={20} />
              <span>Cambiar de cuenta</span>
            </Link>
          </li>

          <li>
            <Link
              href='/'
              className='flex items-center gap-4 text-dark dark:text-white px-3 py-2 hover:bg-gray-300 dark:hover:bg-stone-700 transition-colors duration-300'
            >
              <LuLogIn size={20} />
              <span>Cerrar sesión</span>
            </Link>
          </li>
        </ul>

        <MenuDivider className='bg-gray-500/50' />

        <ul>
          <li>
            <Link
              href='/'
              className='flex items-center gap-4 text-dark dark:text-white px-3 py-2 hover:bg-gray-300 dark:hover:bg-stone-700 transition-colors duration-300'
            >
              <LuShieldQuestion size={20} />
              <span>Tus datos en YouTube</span>
            </Link>
          </li>

          <li onClick={() => toggleDarkMode()} className='flex items-center gap-4 text-dark dark:text-white px-3 py-2 hover:bg-gray-300 dark:hover:bg-stone-700 transition-colors duration-300'>
            {isDarkMode ? <LuMoon size={20} /> : <LuSunMedium size={20}/>}
            <span>Aspecto: {isDarkMode ? 'oscuro' : 'claro'}</span>
          </li>

          <li>
            <Link
              href='/'
              className='flex items-center gap-4 text-dark dark:text-white px-3 py-2 hover:bg-gray-300 dark:hover:bg-stone-700 transition-colors duration-300'
            >
              <LuLanguages size={20} />
              <span>Idioma: español</span>
            </Link>
          </li>

          <li>
            <Link
              href='/'
              className='flex items-center gap-4 text-dark dark:text-white px-3 py-2 hover:bg-gray-300 dark:hover:bg-stone-700 transition-colors duration-300'
            >
              <LuShieldAlert size={20} />
              <span>Modo Restringido: desactivado</span>
            </Link>
          </li>

          <li>
            <Link
              href='/'
              className='flex items-center gap-4 text-dark dark:text-white px-3 py-2 hover:bg-gray-300 dark:hover:bg-stone-700 transition-colors duration-300'
            >
              <LuGlobe size={20} />
              <span>Ubicación: México</span>
            </Link>
          </li>

          <li>
            <Link
              href='/'
              className='flex items-center gap-4 text-dark dark:text-white px-3 py-2 hover:bg-gray-300 dark:hover:bg-stone-700 transition-colors duration-300'
            >
              <LuKeyboard size={20} />
              <span>Combinaciones de teclas</span>
            </Link>
          </li>
        </ul>

        <MenuDivider className='bg-gray-500/50' />

        <ul>
          <li>
            <Link
              href='/'
              className='flex items-center gap-4 text-dark dark:text-white px-3 py-2 hover:bg-gray-300 dark:hover:bg-stone-700 transition-colors duration-300'
            >
              <LuSettings size={20} />
              <span>Configuración</span>
            </Link>
          </li>
        </ul>
      </Menu>
  )
}
