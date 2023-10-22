import {
  RiCompass3Line,
  RiHome3Line,
  RiLogoutCircleRLine,
  RiMailLine,
  RiNotification3Line,
  RiPieChartLine,
  RiSettings3Line
} from 'react-icons/ri'
import ButtonSidebar from './ButtonSidebar'
import { useState } from 'react'

export function Sidebar ({ showOptions }) {
  const [activeItem, setActiteItem] = useState('Home')

  const handleOptionChange = optionName => {
    console.log(optionName)
    setActiteItem(optionName)
  }

  return (
    <div
      className={`${
        showOptions ? 'left-0' : '-left-full'
      } bg-primary fixed top-0 w-28 h-full flex flex-col justify-between py-6 rounded-r-xl z-50 transition-all duration-300 lg:left-0`}
    >
      <div>
        <ul className='pl-4'>
          <li>
            <h1 className='text-xl text-gray-300 font-bold text-center uppercase my-5 pr-4'>
              Tu logo
            </h1>
          </li>

          <ButtonSidebar
            onClick={() => handleOptionChange('Home')}
            isActive={activeItem === 'Home'}
          >
            <RiHome3Line size={25} />
          </ButtonSidebar>

          <ButtonSidebar
            onClick={() => handleOptionChange('Location')}
            isActive={activeItem === 'Location'}
          >
            <RiCompass3Line size={25} />
          </ButtonSidebar>

          <ButtonSidebar
            onClick={() => handleOptionChange('Statistics')}
            isActive={activeItem === 'Statistics'}
          >
            <RiPieChartLine size={25} />
          </ButtonSidebar>

          <ButtonSidebar
            onClick={() => handleOptionChange('Messages')}
            isActive={activeItem === 'Messages'}
          >
            <RiMailLine size={25} />
          </ButtonSidebar>

          <ButtonSidebar
            onClick={() => handleOptionChange('Notifications')}
            isActive={activeItem === 'Notifications'}
          >
            <RiNotification3Line size={25} />
          </ButtonSidebar>

          <ButtonSidebar
            onClick={() => handleOptionChange('Settings')}
            isActive={activeItem === 'Settings'}
          >
            <RiSettings3Line size={25} />
          </ButtonSidebar>
        </ul>
      </div>

      <div>
        <ul className='pl-4'>
          <ButtonSidebar
            onClick={() => handleOptionChange('LogOut')}
            isActive={activeItem === 'LogOut'}
          >
            <RiLogoutCircleRLine size={25} />
          </ButtonSidebar>
        </ul>
      </div>
    </div>
  )
}
