"use client"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect } from 'react'
import { BsTrophyFill, BsFillPersonFill, BsFillLaptopFill, BsBook} from 'react-icons/bs'

function About() {
    useEffect(() => {
      const t1 = gsap
      .timeline({
        scrollTrigger:{
            trigger: ".about-heading",
            start: "-10px center",
            end: "bottom center",
            markers: true
        }
      })
      .fromTo(
        ".about-heading",
        { y: "-40%", opacity: 0 },
        { y: 0, opacity: 1 },
        "<20%"
      )
    
    }, [])
    
    
  return (
    <section className='w-full pt-24 bg-[#0f0e17]' id='about'>
        <div className='m-auto' style={{
            maxWidth: "83%"
        }}>
            <div className='text-center'>
                <h1 className='about-heading text-4xl sm:text-5xl text-[#fffffe] font-semibold inline-block'>
                    What's in Doko?
                </h1>
                <h3 className='about-subheading text-lg sm:text-3xl text-[#a7a9be] font-light ml-4 inline-block'>
                    All you need to get through undergrad
                </h3>
            </div>


            <div className='text-[#a7a9be] text-center m-auto py-12' style={{
                maxWidth: "80%"
            }}>
                <p className='text-xs  sm:text-sm md:text-base lg:text-lg xl:text-lg leading-relaxed tracking-tight'>
                    Doko is (Nepali: डोको) is a Nepali word for a bamboo basket. These kind of baskets are popular all across the country to carry stuff. Doko, here, kind of represents similar basket. The idea here is to have a one-stop portal - or basket - where students can find all the necessary stuff required during their four years of bachelor's program. These items include college and university forms, past papers of both college and university exams, information about club-related activities, and profiles of each of the students who have studied or are studying in Deerwalk Institute of Technology.
                </p>
            </div>

            <hr/>
            <div className='laptop-view'>
                <div className="flex">
                    <div className='w-[80%] relative'>
                        <img src="/clubs.jpg" alt=""  style={{
                        height: "600px",
                        objectFit: "contain",
                        transform: "translateX(5em)"
                    }}/>
                        <div className='relative z-10 bg-[#e53170]' style={{
                            transform: "translateY(-35em)",
                            maxWidth: "40%",
                            minHeight: "10em",
                            alignItems: "center", // Center horizontally
                            justifyContent: "center",
                        }}>
                            <h1 className='text-5xl text-center text-[#fffffe] font-semibold p-4'>
                                9
                            </h1>
                            <div className='text-6xl text-[#ff8906] relative left-[50%] translate-x-[-10%] pb-2'>
                                <BsTrophyFill/>
                            </div>
                            <h2 className='text-3xl text-[#fffffe] text-center text-[#fffffe] pb-4 font-semibold'>
                                Clubs
                            </h2>
                        </div>
                    </div>
                    <div className='w-3/5 relative' style={{
                        transform: "translate3d(-110px,117px,0)",
                        height: "500px"
                        }}>
                        <img src="/students.jpg" alt="" style={{
                        height: "500px",
                        objectFit: "cover"
                        }}/>
                        <div className='relative z-10 bg-[#ff8906]' style={{
                            transform: "translate(22em, -20em)",
                            maxWidth: "50%",
                            minHeight: "10em",
                            alignItems: "center", // Center horizontally
                            justifyContent: "center",
                        }}>
                            <h1 className='text-5xl text-center font-semibold p-4'>
                                612
                            </h1>
                            <div className='text-6xl text-[#fffffe] relative left-[50%] translate-x-[-10%] pb-2'>
                                <BsFillPersonFill/>
                            </div>
                            <h2 className='text-3xl text-center pb-4 font-semibold'>
                                Students
                            </h2>
                        </div>
                    </div>
                
                </div>
                <div className="flex" style={{
                    marginTop: "-20em"
                }}>
                    <div className='w-[60%] z-30 relative'>
                        <img src="/csit.jpg" alt=""  style={{
                        height: "600px",
                        objectFit: "contain",
                        transform: "translate(5em, 3em)"
                    }}/>
                        <div className='relative z-10 bg-[#fffffe]' style={{
                            transform: "translateY(-8em)",
                            maxWidth: "50%",
                            minHeight: "14em",
                            alignItems: "center", // Center horizontally
                            justifyContent: "center",
                        }}>
                            <h1 className='text-5xl text-center font-semibold p-4'>
                                12
                            </h1>
                            <div className='text-6xl text-[#ff8906] relative left-[50%] translate-x-[-10%] pb-2'>
                                <BsFillLaptopFill/>
                            </div>
                            <h2 className='text-3xl  text-center pb-4 font-semibold'>
                                CSIT Batches
                            </h2>
                        </div>
                    </div>
                    <div className='w-3/5 relative' style={{
                        transform: "translate3d(30px,117px,0)",
                        height: "500px"
                        }}>
                        <img src="/bcaa.jpg" alt="" style={{
                        height: "500px",
                        objectFit: "cover"
                        }}/>
                        <div className='relative z-10 bg-[#0f5288]' style={{
                            transform: "translate(10em, -5em)",
                            maxWidth: "50%",
                            minHeight: "10em",
                            alignItems: "center", // Center horizontally
                            justifyContent: "center",
                        }}>
                            <h1 className='text-5xl text-center font-semibold p-4'>
                                5
                            </h1>
                            <div className='text-6xl text-[#fffffe] relative left-[50%] translate-x-[-10%] pb-2'>
                                <BsBook/>
                            </div>
                            <h2 className='text-3xl text-center pb-4 font-semibold'>
                                BCA Batches
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mobile-view'>
                <div className="grid grid-cols-2 gap-2 pt-12">
                    <div className=''>
                        <img src="/clubs.jpg" alt="" height="30em"/>
                        <div className='relative bg-[#e53170] m-auto' style={{
                            transform: "translateY(-2em)",
                            width: "50%",
                            minHeight: "4em",
                            alignItems: "center", // Center horizontally
                            justifyContent: "center",
                        }}>
                            <h1 className='text-xl text-center text-[#fffffe] font-semibold p-4'>
                                9
                            </h1>
                            <div className='text-xl text-[#ff8906] relative left-[50%] translate-x-[-10%] pb-2'>
                                <BsTrophyFill/>
                            </div>
                            <h2 className='text-lg text-[#fffffe] text-center text-[#fffffe] pb-4 font-semibold'>
                                Clubs
                            </h2>

                        </div>
                    </div>
                    <div>
                    <img src="/students.jpg" alt="" height="30em"/>
                        <div className='relative p-2 bg-[#ff8906] m-auto' style={{
                            transform: "translateY(-2em)",
                            width: "50%",
                            minHeight: "4em",
                            alignItems: "center", // Center horizontally
                            justifyContent: "center",
                        }}>
                            <h1 className='text-xl text-center  font-semibold p-4'>
                                612
                            </h1>
                            <div className='text-xl text-[#fffffe] relative left-[50%] translate-x-[-10%] pb-2'>
                                <BsFillPersonFill/>
                            </div>
                            <h2 className='text-lg text-center pb-4 font-semibold'>
                                Students
                            </h2>
                        </div>
                    </div>
                    <div>
                    <img src="/csit.jpg" alt="" height="30em"/>
                        <div className='relative bg-[#fffffe] m-auto' style={{
                            transform: "translateY(-2em)",
                            width: "50%",
                            minHeight: "4em",
                            alignItems: "center", // Center horizontally
                            justifyContent: "center",
                        }}>
                            <h1 className='text-xl text-center font-semibold p-4'>
                                12
                            </h1>
                            <div className='text-xl text-[#ff8906] relative left-[50%] translate-x-[-10%] pb-2'>
                                <BsFillLaptopFill/>
                            </div>
                            <h2 className='text-xl text-center pb-4 font-semibold'>
                                CSIT Batches
                            </h2>
                        </div>
                    </div>
                    <div>
                    <img src="/bcaa.jpg" alt="" height="30em"/>
                        <div className='relative bg-[#0f5288] m-auto' style={{
                            transform: "translateY(-2em)",
                            width: "50%",
                            minHeight: "4em",
                            alignItems: "center", // Center horizontally
                            justifyContent: "center",
                        }}>
                            <h1 className='text-xl text-center text-[#fffffe] font-semibold p-4'>
                                5
                            </h1>
                            <div className='text-xl text-[#fffffe] relative left-[50%] translate-x-[-10%] pb-2'>
                                <BsBook/>
                            </div>
                            <h2 className='text-xl text-[#fffffe] text-center text-[#fffffe] pb-4 font-semibold'>
                                BCA Batches
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About