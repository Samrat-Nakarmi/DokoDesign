"use client"
import React, { useEffect, useState } from 'react';
import { BsPlayCircle , BsPauseCircle} from 'react-icons/bs';
import { gsap } from 'gsap';

function Hero() {
    const isLargeScreen = window.innerWidth > 1000;
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlayPause = () => {
        if (typeof window !== 'undefined') {
          const video = document.querySelector('.backgroundVideo');
          if (video) {
            if (isPlaying) {
              video.pause();
            } else {
              video.play();
            }
            setIsPlaying(!isPlaying);
          }
        }
      };
    
    useEffect(() => {
      const t1 = gsap
      .to(
        ".hero-heading",
        {y : window.innerHeight/2 , fontSize: "4em", duration: 1, delay:3}
      );

      const t2 = gsap
      .to(
        ".hero-subheading",
        {y : window.innerHeight/3  ,fontSize: "1.125em", opacity: 0, duration:1, delay:3}
      )

      const t3 = gsap
      .to(
        ".backgroundVideo",
        {opacity:0.6, duration: 3, delay:3}
      )
    
    }, [])
    
  return (
    <section className={`w-full ${isLargeScreen ? 'h-screen' : 'h-[80vh]'} bg-[#0f0e17]`}>
        { isLargeScreen && (
            <div className='w-full'>
                    <video
                    autoPlay
                    loop
                    muted
                    disablePictureInPicture
                    className='backgroundVideo absolute top-0 bottom-0 w-full h-full opacity-0 ease-in duration-300'
                    >
                    <source src='/background_video.mp4' type='video/mp4' />
                    </video>
                <div className='absolute bottom-0 right-0 sm:right-16 md:right-24 lg:right-32 pt-10 sm:pt-20'>
                    <button className='p-4 text-4xl text-[#fffffe]' onClick={togglePlayPause}>
                        {isPlaying ? <BsPauseCircle/> : <BsPlayCircle/>}
                    </button>
                </div>
            </div> 
        )}
        <div
            className={`w-full h-[80vh] ${isLargeScreen ? 'opacity-0' : ''}`}
            style={{ position: 'relative' }}
        >
            <img
            src='/college.jpg'
            alt=''
            className='object-cover w-full h-full'
            />
        </div>
        <div className='mx-auto text-[#fffffe] text-center absolute z-10 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]' style={{
            maxWidth: "83%"
        }}>
            <h1 className={`text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold text-[#ff8906] py-6 ${isLargeScreen ? 'hero-heading' : ''}`}>
                DOKO
            </h1>
            <h2 className={`text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium text-[#a7a9be] pb-4 ${isLargeScreen ? 'hero-subheading' : ''}`} style={{
                maxWidth: "100%"
            }}>
                A reservoir of knowledge for every student of Deerwalk Institute of Technology
            </h2>
        </div>

    </section>
  );
}

export default Hero;
