export default function TagButton({ title, active }) {
  return (
    <button
      className={`rounded-xl px-4 py-2 font-bold text-lg 
      ${active ? 'bg-dark dark:bg-gray-100 dark:hover:bg-white text-white dark:text-dark' : 'bg-gray-100 dark:bg-dark-light dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-stone-700'} 
      transition-colors duration-300`}
    >
      {title}
    </button>
  )
}