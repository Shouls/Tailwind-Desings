export default function ButtonIcon({ type = "button", Icon, className, badge }) {
  return (
    <button
      type={type}
      className={`relative rounded-full bg-gray-100 dark:bg-dark-light w-11 h-11 flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-dark
      dark:hover:text-white transition-colors duration-300 ${className}`}
    >
      
      {badge && 
        <span 
          className="bg-red-500 rounded-full w-5 h-5 text-xs text-white 
          flex items-center justify-center absolute top-0 right-1 ">
          {badge > 9 ? `+9` : badge}
        </span>
      }
      <Icon size={20} />
    </button>
  )
}
