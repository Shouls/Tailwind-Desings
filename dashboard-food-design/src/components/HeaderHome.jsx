import { RiSearch2Line } from 'react-icons/ri'

export default function HeaderHome () {
  return (
    <header>
      {/*Título and Search */}
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6'>
        <div>
          <h1 className='text-gray-300 text-3xl font-semibold'>Jaegar Resto</h1>
          <p className='text-base text-gray-500 font-medium'>
            Saturday, 21 October 2023
          </p>
        </div>

        <form>
          <div className='w-full relative'>
            <RiSearch2Line
              className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300'
              size={20}
            />
            <input
              type='text'
              name='text'
              id='text'
              placeholder='Search for food, coffe, etc...'
              className='w-full py-2 pl-10 pr-4 rounded-lg bg-quartitary text-gray-300 outline-none placeholder:text-gray-400'
            />
          </div>
        </form>
      </div>

      {/*Tabs */}
      <nav className='flex items-center justify-start gap-4 md:gap-8 text-sm border-b border-gray-600 relative scrollable-nav mb-6'>
        <a
          href='#'
          className='text-tertiary border-tertiary py-2 before:w-14 before:h-0.5 before:absolute before:bg-tertiary before:left-0 
            before:-bottom-[1px] before:rounded-full'
        >
          Hot dishes
        </a>
        <a href='#' className='py-2 pr-4 text-gray-300'>
          Cold Dishes
        </a>
        <a href='#' className='py-2 pr-4 text-gray-300'>
          Soup
        </a>
        <a href='#' className='py-2 text-gray-300'>
          Grill
        </a>
      </nav>
    </header>
  )
}
