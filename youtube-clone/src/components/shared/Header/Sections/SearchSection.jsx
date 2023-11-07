import { LuSearch } from 'react-icons/lu'
import { BiSolidMicrophone } from "react-icons/bi";
import ButtonIcon from '../../../ui/button-icon';

export default function SearchSection() {
  return (
    <section className='hidden lg:flex items-center gap-4'>
      <div className="flex">
        <input
          type="text"
          placeholder="Buscar"
          className="border border-gray-300 dark:border-dark-light bg-transparent max-w-xl rounded-l-full outline-none 
        py-2 px-4 placeholder:text-gray-500/70 w-[50vh] text-lg" />
        <button
          type='button' className='dark:bg-dark-light bg-gray-100 py-3 px-6 rounded-r-full border-y border-r border-gray-300 dark:border-dark-light 
          box-border text-gray-500 dark:text-gray-300 hover:text-dark dark:hover:text-white transition-colors duration-300'>
          <LuSearch size={20} />
        </button>
      </div>
      <ButtonIcon Icon={BiSolidMicrophone} />
    </section>

  )
}
