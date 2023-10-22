import { RiDeleteBin7Line } from 'react-icons/ri'

export function ProductCart ({ img, item, qty, price }) {
  return (
    <div className='bg-secondary rounded-xl space-y-4 p-4 mb-4'>
      <div className='grid grid-cols-6'>
        <div className='col-span-4 flex items-center gap-4'>
          <img src={img} alt='Platillo' className='w-16 h-16 object-cover' />
          <div>
            <h5>{item}</h5>
            <span className='text-sm text-gray-500'>${price}</span>
          </div>
        </div>

        <div>
          <span className='lg:pl-1'>{qty}</span>
        </div>

        <div>
          <span>$4.58</span>
        </div>
      </div>

      {/*Notes */}
      <div className='grid grid-cols-6 items-center'>
        <form className='col-span-5'>
          <input
            type='text'
            placeholder='Order Note...'
            className='py-2 px-4 bg-quartitary w-5/6 outline-none rounded-lg'
          />
        </form>
        <div>
          <button className='border-red-400 text-red-400 border rounded-lg p-2'>
            <RiDeleteBin7Line size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
