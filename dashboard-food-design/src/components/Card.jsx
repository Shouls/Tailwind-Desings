export default function Card ({ img, title, price, description }) {
  return (
    <div className='bg-primary p-8 relative rounded-2xl flex flex-col items-center gap-2 text-center'>
      <img
        src={img}
        alt='platillo'
        className=' w-40 h-40 object-cover -mt-24 shadow-2xl rounded-full'
      />
      <p className='text-xl text-gray-300 font-medium'>{title}</p>
      <span className='text-lg text-gray-400 font-medium'>${price}</span>
      <p className='text-lg text-gray-500'>{description}</p>
    </div>
  )
}
