import { Link, useLocation } from "wouter";
import { menu } from "../../mocks/menu";
import LinkMenu from "../ui/LinkMenu";
import { LuChevronRight } from "react-icons/lu";

export default function Menu() {

  const [location] = useLocation()

  const menuCategory = menu.find((item) => item.category === 'menu')
  const userCategory = menu.find((item) => item.category === 'user')
  const subscriptionsCategory = menu.find((item) => item.category === 'subscriptions')
  return (
    <ul>
      {menuCategory.items.map(item => (
        <li key={item.id}>
          <LinkMenu href={item.href} Icon={item.icon}>
            {item.label}
          </LinkMenu>
        </li>
      ))}

      <hr className="my-4 border-gray-500/30" />

      <Link href="/feed" className={`flex items-center gap-2 px-4 py-3 hover:bg-gray-100 hover:text-dark dark:hover:text-white dark:hover:bg-dark-light rounded-lg transition-colors duration-300 
       ${(location === '/feed') && 'text-dark bg-gray-100 dark:bg-dark-light dark:text-white font-medium'}`}>
        Tú
        <LuChevronRight size={20} />
      </Link>


      {userCategory.items.map(item => (
        <li key={item.id}>
          <LinkMenu href={item.href} Icon={item.icon}>
            {item.label}
          </LinkMenu>
        </li>
      ))}

      <hr className="my-4 border-gray-500/30" />

      <h3>Suscripciones</h3>

      {subscriptionsCategory.items.map(item => (
        <li key={item.id}>
          <LinkMenu href={item.href} image={item.image}>
            {item.label}
          </LinkMenu>
        </li>
      ))}



    </ul>



  )
}
