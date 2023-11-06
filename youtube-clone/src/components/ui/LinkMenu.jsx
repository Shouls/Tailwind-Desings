import { Link, useLocation } from "wouter";

export default function LinkMenu({ children, Icon, href, className, image }) {

  const [location] = useLocation();
  return (
    <Link
      href={href}
      className={`flex items-center gap-6 px-4 py-3 hover:bg-gray-100 hover:text-dark dark:hover:text-white dark:hover:bg-dark-light rounded-lg transition-colors 
      duration-300 ${(location === href) && 'text-dark bg-gray-100 dark:bg-dark-light dark:text-white font-medium'} ${className} `}
    >

      {Icon ?
        <Icon size={20} />
        :
        <div>
          <img src={image} alt="image" className="object-cover w-8 h-8 rounded-full" />
        </div>
      }
      <div className="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap">
        {children}
      </div>
    </Link>

  )
}
