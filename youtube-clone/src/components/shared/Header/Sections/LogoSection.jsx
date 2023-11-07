import { LuMenu } from 'react-icons/lu'
import Logo from '../../Logo'

export default function LogoSection({ toggleMenu }) {
  return (
    <section className='flex items-center justify-start gap-4'>

      <LuMenu onClick={() => toggleMenu()} size={30} className='lg:hidden bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-dark-light'/>
      <Logo />
    </section>
  )
}
