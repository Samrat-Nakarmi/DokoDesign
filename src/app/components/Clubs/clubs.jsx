"use client"
import React, {useRef, useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Clubs() {
  return (
    <section className='w-full bg-[#0f0e17] pt-12' id='clubs'>
        <div className='w-10/12 m-auto text-center'>
            <h1 className='text-5xl text-[#fffffe] font-semibold mb-6'>
                Clubs
            </h1>
            <div className='m-auto' style={{
                width: '40px',
                height: '4px',
                backgroundColor: '#a7a9be',
            }}>

            </div>
            <h3 className='text-3xl text-[#a7a9be] mt-8 mb-12'>
                A vibrant tapestry of opportunities to explore passion
            </h3>
            <div className='pt-24'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    style={{
                        "--swiper-pagination-color": "#e53170",
                        "--swiper-pagination-bullet-inactive-color": "#a7a9be",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-horizontal-gap": "6px"
                    }}
                >
                    <SwiperSlide>
                        <img src="/clubs/artistas_club.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/clubs/deerexpress.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/clubs/literature.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/clubs/sports.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/clubs/hiking.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/clubs/media.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/clubs/music.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/clubs/social_service.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/clubs/software_club.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Clubs