import React from 'react'
import { RiClipboardLine, RiQuestionAnswerLine, RiSearchLine, RiTimeLine, RiWhatsappLine } from 'react-icons/ri'

export default function PricingCard() {
  return (
    <div className=' text-gray-800 rounded-3xl p-4 flex flex-col items-center gap-16 relative overflow-hidden transition-all ease-in-out border border-gray-500 hover:border-none group
            before:absolute before:bg-gradient-to-l from-[#92fbf7] to-[#247BAE]
            before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all 
            before:duration-500 before:w-[880px] before:h-0 before:rotate-45 hover:before:h-[380%] hover:text-white duration-500'
    >

      <div className='w-[30%] flex flex-col items-center justify-center  p-6 gap-4 rounded-3xl'>


        <div className='border-4 border-gray-400 group-hover:border-white rounded-full w-52 h-52 text-5xl flex items-center justify-center font-bold  '>
          <h5 className='text-5xl font-bold'>
            Plan 1
          </h5>


        </div>

      </div>

      <div className='text-2xl '>
        <ul className='space-y-2'>
          <li className='flex items-center gap-4'>
            <RiClipboardLine size={25} />
            <div>
              <span className='font-bold'>8</span> vacantes
            </div>
          </li>
          <li className='flex items-center gap-4'>
            <RiSearchLine />
            <div>

              <span className='font-bold'>450</span> consulta de perfilesgdfs

              fgs
              dg
              sdfg
              sdfg
              s
              gsfdsfsdf
              dsfsdfsdf
              fdfdfdsfasdfasdg
            </div>
          </li>
          <li className='flex items-center gap-4'>
            <RiSearchLine />
            <div>

              <span className='font-bold'>450</span> consulta de perfilesgdfs

              fgs
              dg
              sdfg
              sdfg
              s
              gsfdsfsdf
              dsfsdfsdf
              fdfdfdsfasdfasdg
            </div>
          </li>
          
          <li className='flex items-center gap-4'>
            <RiTimeLine />
            <div>

              Duración de <span className='font-bold'>30</span> días
            </div>
          </li>
          <li className='flex items-center gap-4'>
            <RiWhatsappLine />
            <div>

              <span className='font-bold'>WhatsApp</span>
            </div>
          </li>
          <li className='flex items-center gap-4'>
            <RiQuestionAnswerLine />
            <div>

              <span className='font-bold'>Chat</span>
            </div>
          </li>
        </ul>
      </div>

      <button className='text-white flex items-center justify-center px-8 py-2 rounded-xl bg-[#39d1ff] group-hover:bg-[#335fff] text-2xl font-medium duration-300 transition-all'>
        Usar ahora
      </button>



    </div>
  )
}
