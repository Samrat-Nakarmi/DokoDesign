import React from 'react';
import { Navbar } from '../../components/Navbar';
import Batches from '../../utils/data/csit_batches';

function Page() {
  return (
    <section className='w-full bg-[#0f0e17] pb-8 md:pb-32'>
      <Navbar />
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl text-[#ff8906] font-semibold pt-8 md:pt-12'>
          Batches
        </h1>
        <div className='grid gap-6 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-20'>

          {
            Batches && Batches.map((batch) => {
              return (
                <div
                  className='bg-[#fffffe] border-2 border-[#a7a9be] rounded'
                  key={batch.id}
                >
                  <div className='flex justify-center p-4 border-b border-[#a7a9be]'>
                    <img src="/deerwalk.png" alt="" width={160} height={160} />
                  </div>
                  <div className='text-center m-4 p-4'>
                    <h3 className='text-xl sm:text-2xl font-semibold'>
                      {batch.batch}
                    </h3>
                  </div>
                  <div className='text-center pt-4 pb-6'>
                    <button className='border-2 border-[#e53170] hover:bg-[#e53170] transition ease-out duration-300 hover:ease-in rounded-md px-4 py-2 sm:py-3'>
                      View Students
                    </button>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Page;