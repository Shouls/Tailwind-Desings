export default function ButtonSidebar ({ children, isActive }) {
  return (
    <li
      className={`${
        isActive ? 'bg-secondary' : 'hover:bg-secondary'
      } p-4 rounded-l-xl  group transition-all duration-300 cursor-pointer`}
    >
      <a
        href='#'
        className={`${
          isActive
            ? 'text-white bg-tertiary'
            : 'text-tertiary group-hover:text-white group-hover:bg-tertiary'
        } p-4 flex justify-center rounded-xl transition-all duration-300`}
      >
        {children}
      </a>
    </li>
  )
}
