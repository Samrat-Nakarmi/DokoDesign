import React from 'react';
import Link from 'next/link';

function Courses() {
  return (
    <section className='w-full bg-[#0f0e17] pt-12 md:pt-24 border-y border-[#a7a9be]'>
      <div className='mx-auto' style={{
        maxWidth: "83%"
      }}>
        <div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl text-[#fffffe] text-center font-semibold py-6'>
            Course Streams
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-20 pt-8 sm:pt-16" id='csit'>
            <div className='flex flex-col justify-center'>
              <div className='mt-8'>
                <h2 className='text-2xl sm:text-3xl text-[#ff8906] font-semibold block'>
                  BSc.CSIT
                </h2>
                <p className='text-[#a7a9be] leading-relaxed tracking-tight text-base sm:text-lg pt-4'>
                  B.Sc. CSIT program affiliated to Tribhuvan University (TU) is a four-year Bachelor Degree program run by DWIT. The objective of the B.Sc. CSIT program is to enable students to understand the fundamental theories, knowledge, and skill sets of computer science and Information Technology. B.Sc. CSIT program focuses on the programming field, enabling students to develop profound knowledge in the software field to pursue careers as software programmers, software system analysts, and software consultants.
                </p>
                <div className='text-center mt-4'>
                  <Link href='/batches/csit'>
                    <button className='text-[#fffffe] border-2 border-[#e53170] hover:bg-[#e53170] transition ease-out duration-300 hover:ease-in rounded-md px-4 py-3'>
                      View Batches
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <img src="/bsc-csit.jpg" alt="BSc.CSIT" className='h-auto sm:h-full object-cover' />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-20 pt-8 sm:pt-16 pb-12" id='bca'>
            <div>
              <img src="/bca.jpg" alt="BCA" className='h-auto sm:h-full object-cover' />
            </div>
            <div className='flex flex-col justify-center'>
              <div className='mt-8'>
                <h2 className='text-2xl sm:text-3xl text-[#ff8906] font-semibold block'>
                  BCA
                </h2>
                <p className='text-[#a7a9be] leading-relaxed tracking-tight text-base sm:text-lg pt-4'>
                  DWIT runs the BCA program under the affiliation of Tribhuvan University. It is a 4-year program run on a semester system. The objective of the BCA program of Tribhuvan University is to produce high-quality computer application users and developers. BCA focuses on enabling students to become system analysts, system managers, project managers, database administrators, system designers, and programmers in IT companies.
                </p>
                <div className='text-center mt-4'>
                  <Link href='/batches/bca'>
                    <button className='text-[#fffffe] border-2 border-[#e53170] hover:bg-[#e53170] transition ease-out duration-300 hover:ease-in rounded-md px-4 py-3'>
                      View Batches
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
