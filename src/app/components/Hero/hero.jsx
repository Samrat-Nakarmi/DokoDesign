import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';

function Hero() {
  return (
    <section className='w-full h-screen bg-[#0f0e17] pt-24'>
      <div className='max-w-7xl mx-auto text-[#fffffe] text-center'>
        <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-[#ff8906] py-10'>
          DOKO
        </h1>
        <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#a7a9be] pb-6'>
          A reservoir of knowledge for every student of Deerwalk Institute of Technology
        </h2>
        <div className='absolute bottom-10 right-10 sm:right-16 md:right-24 lg:right-32 pt-10 sm:pt-20'>
          <button className='p-4'>
            <BsPlayCircle />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
