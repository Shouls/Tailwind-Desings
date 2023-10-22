import { RiCloseLine } from 'react-icons/ri'
import { ProductCart } from './ProductCart'
import './ShoppingCart.css'
import comida from '../assets/comida.png'
import dish from '../assets/dish.png'

export default function ShoppingCart ({ showOrder, setShowOrder }) {
  return (
    <div
      className={`lg:col-span-2 fixed top-0 w-full lg:w-[24%] lg:right-0  bg-primary ${
        showOrder ? 'right-0' : '-right-full'
      } transition-all duration-300 z-50`}
    >
      <div className='relative pt-16 lg:pt-8 p-8 text-gray-300 min-h-screen'>
        <RiCloseLine
          onClick={() => setShowOrder()}
          className='lg:hidden absolute top-4 left-4 p-3 box-content bg-secondary rounded-full cursor-pointer'
          size={25}
        />
        {/*Order number*/}
        <h1 className='text-2xl my-4'>Orders #34562</h1>
        {/*Pills */}
        <div className='flex items-center gap-4 flex-wrap pb-4'>
          <button className='bg-tertiary text-gray-300 text-lg py-1 px-4 rounded-xl'>
            Dine in
          </button>
          <button className='text-tertiary border border-tertiary text-lg py-1 px-4 rounded-xl'>
            To go
          </button>
          <button className='text-tertiary border border-tertiary text-lg py-1 px-4 rounded-xl'>
            Delivery
          </button>
        </div>

        {/*Cart*/}
        <div>
          <div className='grid grid-cols-6 mb-4 px-4'>
            <h5 className='col-span-4'>Item</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
          </div>
          {/*Cards */}
          <div className='overflow-y-scroll max-h-[240px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[550px] xl:max-h-[800px] scrollable-div'>
            <ProductCart
              img={comida}
              item={'Spicy sea...'}
              price={2.29}
              qty={2}
            />
            <ProductCart
              img={dish}
              item={'Spicy sea...'}
              price={2.29}
              qty={2}
            />

            <ProductCart
              img={comida}
              item={'Spicy sea...'}
              price={2.29}
              qty={2}
            />
            <ProductCart
              img={dish}
              item={'Spicy sea...'}
              price={2.29}
              qty={2}
            />
            <ProductCart
              img={comida}
              item={'Spicy sea...'}
              price={2.29}
              qty={2}
            />
            <ProductCart
              img={dish}
              item={'Spicy sea...'}
              price={2.29}
              qty={2}
            />
            <ProductCart
              img={comida}
              item={'Spicy sea...'}
              price={2.29}
              qty={2}
            />
            <ProductCart
              img={dish}
              item={'Spicy sea...'}
              price={2.29}
              qty={2}
            />
            <ProductCart
              img={comida}
              item={'Spicy sea...'}
              price={2.29}
              qty={2}
            />
            <ProductCart
              img={dish}
              item={'Spicy sea...'}
              price={2.29}
              qty={2}
            />
            <ProductCart
              img={comida}
              item={'Spicy sea...'}
              price={2.29}
              qty={2}
            />
            <ProductCart
              img={dish}
              item={'Spicy sea...'}
              price={2.29}
              qty={2}
            />
          </div>
        </div>

        {/*Total */}
        <div className='absolute bg-secondary bottom-0 left-0 p-8 w-full'>
          <div className='flex items-center justify-between mb-4'>
            <span className='text-gray-400'>Discount</span>
            <span>$0</span>
          </div>
          <div className='flex items-center justify-between mb-8'>
            <span className='text-gray-400'>Subtotal</span>
            <span>$21.03</span>
          </div>

          <button className='bg-tertiary p-4 w-full font-medium rounded-lg'>
            Continue to payment
          </button>
        </div>
      </div>
    </div>
  )
}
