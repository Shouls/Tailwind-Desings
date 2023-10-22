import { useState } from 'react'
import MenuMobile from './components/MenuMobile'
import { Sidebar } from './components/Sidebar'
import Content from './components/Content'

function App () {
  const [showOptions, setShowOptions] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const openOptions = () => {
    setShowOptions(!showOptions)
    setShowOrder(false)
  }

  const openOrder = () => {
    setShowOrder(!showOrder)
    setShowOptions(false)
  }

  return (
    <div
      className={`bg-secondary w-full min-h-screen ${openOptions ? '' : ''}`}
    >
      <Sidebar showOptions={showOptions} />
      <MenuMobile
        openOptions={openOptions}
        showOptions={showOptions}
        openOrder={openOrder}
        showOrder={showOrder}
      />
      <Content showOrder={showOrder} setShowOrder={setShowOrder} />
    </div>
  )
}

export default App
