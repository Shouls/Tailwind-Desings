import ButtonIcon from '../../../ui/button-icon'
import { LuBell, LuVideo } from 'react-icons/lu'

export default function UserSection() {
  return (
    <section className='flex items-center gap-2'>
      <ButtonIcon Icon={LuVideo} className='bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-dark-light' />
      <ButtonIcon Icon={LuBell} className='bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-dark-light' />
      <div className='ml-4'>
        <img src="https://insomniac.games/wp-content/uploads/2020/10/RC_RiftApart_Heroes_PS5-scaled.jpg" alt="Profile Pic" className='w-10 h-10 rounded-full object-cover object-top' />
      </div>

    </section>
  )
}
