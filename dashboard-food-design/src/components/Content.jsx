import Home from './Home'
import ShoppingCart from './ShopingCart'

export default function Content ({ showOrder, setShowOrder }) {
  return (
    <main className='lg:pl-28 lg:pr-[24%] pb-20'>
      <Home />
      <ShoppingCart showOrder={showOrder} setShowOrder={setShowOrder} />
    </main>
  )
}
