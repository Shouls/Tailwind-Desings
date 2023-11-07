import ButtonIcon from '../../../ui/button-icon'
import {
  LuBell,
  LuSearch,
  LuVideo
} from 'react-icons/lu'

import UserMenu from './UserMenu'

export default function UserSection () {

  

  return (
    <section className='flex items-center gap-2'>
      <ButtonIcon
        Icon={LuSearch}
        className='lg:hidden bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-dark-light'
      />
      <ButtonIcon
        Icon={LuVideo}
        className='bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-dark-light'
      />
      <ButtonIcon
        Icon={LuBell}
        badge={3}
        className='bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-dark-light'
      />

      <UserMenu />

      
    </section>
  )
}
