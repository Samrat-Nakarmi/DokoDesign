import React from 'react'

function Courses() {
  return (
    <section className='w-full bg-[#0f0e17] pt-24 border-b border-[#a7a9be]'>
      <div className='w-10/12 m-auto'>
        <div className=''>
          <h1 className='text-5xl text-[#fffffe] text-center font-semibold'>
            Course Streams
          </h1>
          <div className="grid grid-cols-2 gap-20 pt-16" id='csit'>
            <div className='flex flex-col justify-content-center'>
              <div className='mt-[8%]' >
                <h2 className='text-3xl text-[#ff8906] font-semibold block'>
                  BSc.CSIT
                </h2>
                <p className='text-[#a7a9be] leading-relaxed tracking-tight text-lg block pt-4'>
                B.Sc. CSIT program affiliated to Tribhuvan University (TU) is a four year Bachelor Degree program run by DWIT.The objective of the B.Sc. CSIT program is to enable students know the fundamental theories, knowledge and skill sets of computer science and Information Technology. B.Sc. CSIT programs focuses on programming field thus enabling students to develop profound knowledge in software field so that they can pursue the path to become software programmers, software system analysis, software consultants.
                </p>
                <div className='text-center mt-4'>
                  <button className='text-[#fffffe] border-2 border-[#e53170] hover:bg-[#e53170] transition ease-out duration-300 hover:ease-in rounded-md px-4 py-3'>
                    View Batches
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img src="/bsc-csit.jpg" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-20 pt-16 pb-12" id='bca'>
            <div>
              <img src="/bca.jpg" alt="" className='h-full object-cover'/>
            </div>
            <div className='flex flex-col justify-content-center'>
              <div className='mt-[12%]'>
                <h2 className='text-3xl text-[#ff8906] font-semibold block'>
                  BCA
                </h2>
                <p className='text-[#a7a9be] leading-relaxed tracking-tight text-lg block pt-4'>
                  DWIT runs BCA program under the affiliation of Tribhuvan University.It is a 4 years program run on semester-system. It will be run under the faculties of Humanities and Social Sciences. The objective of the BCA program of Tribhuvan University is to produce high quality computer application users and developers.BCA focuses on enabling students to become system analysts, system managers, project managers , database administrators, system designers and programmers in IT Companies.
                </p>
                <div className='text-center mt-4'>
                  <button className='text-[#fffffe] border-2 border-[#e53170] hover:bg-[#e53170] transition ease-out duration-300 hover:ease-in rounded-md px-4 py-3'>
                    View Batches
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses