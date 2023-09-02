import React from 'react'
import {BsPlayCircle} from 'react-icons/bs'

function Hero() {
  return (
    <section className='w-full h-screen bg-[#0f0e17] pt-24'>
        <div className='w-10/12 text-[#fffffe] m-auto text-center'>
            <h1 className='w-4/5 text-9xl font-semibold text-[#ff8906] m-auto pt-20'>
                DOKO
            </h1>
            <h2 className='w-4/5 m-auto text-xl text-[#a7a9be] font-medium pt-6'>
                A reservoir of knowledge of and for every student of Deerwalk Institute of Technology
            </h2>
            <div className='absolute bottom-10 right-16 pt-20 text-3xl '>
                <button className='p-4'>
                <BsPlayCircle/>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Hero