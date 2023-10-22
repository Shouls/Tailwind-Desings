import {
  RiAddLine,
  RiCloseLine,
  RiMenu3Fill,
  RiPieChartLine,
  RiUser3Line
} from 'react-icons/ri'

export default function MenuMobile ({
  openOptions,
  showOptions,
  openOrder,
  showOrder
}) {
  return (
    <nav className='z-40 lg:hidden bg-primary fixed bottom-0 left-0 w-full rounded-t-xl flex items-center justify-between text-gray-400 py-2 px-8'>
      <button className='p-2'>
        <RiUser3Line size={35} />
      </button>
      <button className='p-2'>
        <RiAddLine size={35} />
      </button>
      <button
        onClick={() => openOrder()}
        className={`p-2 ${showOrder ? 'text-white' : ''}`}
      >
        {showOrder ? <RiCloseLine size={35} /> : <RiPieChartLine size={35} />}
      </button>
      <button
        onClick={() => openOptions()}
        className={`${showOptions ? 'text-white' : ''} p-2 `}
      >
        {showOptions ? <RiCloseLine size={35} /> : <RiMenu3Fill size={35} />}
      </button>
    </nav>
  )
}
