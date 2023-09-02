import React from 'react'

function About() {
  return (
    <section className='w-full h-screen bg-[#0f0e17]'>
        <div className='w-10/12 m-auto'>
            <div className='text-center'>
                <h1 className='text-5xl text-[#fffffe] font-semibold inline-block'>
                    What's in Doko?
                </h1>
                <h3 className='text-3xl text-[#a7a9be] font-light ml-4 inline-block'>
                    All you need to get through undergrad
                </h3>
            </div>

            <div className='w-3/5 text-[#a7a9be] text-center m-auto py-12'>
                <p className='leading-relaxed tracking-tight text-lg'>
                Doko is (Nepali: डोको) is a Nepali word for a bamboo basket. These kind of baskets are popular all across the country to carry stuff. Doko, here, kind of represents similar basket. The idea here is to have a one-stop portal - or basket - where students can find all the necessary stuff required during their four years of bachelors program. These items include college and university forms, past papers of both college and university exams, information about club-related activities, and profiles of each of the students who have studied or are studying in Deerwalk Institute of Technology.
                </p>
            </div>
            <hr/>
            <div className="grid-cols-2">
                <div className="w-2/4 ">

                </div>
                <div className="w-2/4"></div>
                <div className="w-2/4"></div>
                <div className="w-2/4"></div>
            </div>
        </div>
    </section>
  )
}

export default About