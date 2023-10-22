import { RiArrowDownSLine } from 'react-icons/ri'
import './Home.css'
import Card from './Card'
import HeaderHome from './HeaderHome'
import comida from '../assets/comida.png'
import dish from '../assets/dish.png'
export default function Home () {
  return (
    <div className='p-4 md:p-8'>
      {/*Header */}
      <HeaderHome />

      {/*Tab header */}
      <div className='flex justify-between items-center mb-16'>
        <h2 className='text-2xl text-gray-300'>Choose Dishes</h2>
        <button className='flex items-center justify-center gap-2 text-gray-300 bg-primary py-2 px-4 rounded-lg'>
          <RiArrowDownSLine />
          Dine in
        </button>
      </div>

      <div className='p-8 grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6'>
        <Card
          img={comida}
          title={'Spicy seasoned seafood noodles'}
          price={2.29}
          description={'20 bowls available'}
        />
        <Card
          img={dish}
          title={'Spicy seasoned seafood noodles'}
          price={2.29}
          description={'20 bowls available'}
        />
        <Card
          img={comida}
          title={'Spicy seasoned seafood noodles'}
          price={2.29}
          description={'20 bowls available'}
        />
        <Card
          img={dish}
          title={'Spicy seasoned seafood noodles'}
          price={2.29}
          description={'20 bowls available'}
        />
        <Card
          img={dish}
          title={'Spicy seasoned seafood noodles'}
          price={2.29}
          description={'20 bowls available'}
        />
        <Card
          img={comida}
          title={'Spicy seasoned seafood noodles'}
          price={2.29}
          description={'20 bowls available'}
        />
        <Card
          img={dish}
          title={'Spicy seasoned seafood noodles'}
          price={2.29}
          description={'20 bowls available'}
        />
        <Card
          img={comida}
          title={'Spicy seasoned seafood noodles'}
          price={2.29}
          description={'20 bowls available'}
        />
        <Card
          img={comida}
          title={'Spicy seasoned seafood noodles'}
          price={2.29}
          description={'20 bowls available'}
        />
        <Card
          img={dish}
          title={'Spicy seasoned seafood noodles'}
          price={2.29}
          description={'20 bowls available'}
        />
        <Card
          img={comida}
          title={'Spicy seasoned seafood noodles'}
          price={2.29}
          description={'20 bowls available'}
        />
        <Card
          img={dish}
          title={'Spicy seasoned seafood noodles'}
          price={2.29}
          description={'20 bowls available'}
        />
      </div>
    </div>
  )
}
