export default function ButtonIcon({ type = "button", Icon, className }) {
  return (
    <button
      type={type}
      className={`rounded-full bg-gray-100 dark:bg-dark-light w-11 h-11 flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-dark
      dark:hover:text-white transition-colors duration-300 ${className}`}>
      <Icon size={20} />
    </button>
  )
}
