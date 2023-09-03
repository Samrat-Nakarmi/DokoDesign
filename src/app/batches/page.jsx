import React from 'react'
import { Navbar } from '../components/Navbar'
import Batches from '../utils/data/batches'

function page() {
  return (
    <section className='w-full bg-[#0f0e17] pb-32'>
        <Navbar/>
        <div className='w-10/12 m-auto'>
            <h1 className='text-5xl text-[#ff8906] font-semibold pt-12'>
                Batches
            </h1>
            <div className='grid gap-10 grid-cols-3 mt-20'>

                {
                    Batches && Batches.map(batches => {
                        return(
                            <div className='bg-[#fffffe] w-full border-2 border-[#a7a9be] rounded' key={batches.id}>
                                <div className='flex justify-center p-4 border-b border-[#a7a9be]'>
                                    <img src="/deerwalk.png" alt="" width={160} height={160}/>
                                </div>
                                <div className='text-center m-4 p-4'>
                                    <h3 className='text-2xl font-semibold'>
                                        {batches.batch}
                                    </h3>
                                </div>
                                <div className='text-center pt-4 pb-8'>
                                    <button className=' border-2 border-[#e53170] hover:bg-[#e53170] transition ease-out duration-300 hover:ease-in rounded-md px-4 py-3'>
                                        View Students
                                    </button>
                                </div>
                            </div>                            
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default page