"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function Navbar() {
    const [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        if(window.scrollY > window.innerHeight){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

  return (
    <nav className={navbar ? 'active w-full pt-6 pb-6 text-[#fffffe] fixed z-50' : 'w-full pt-6 pb-6 text-[#fffffe] fixed z-50'}>
        <div className="w-10/12 flex place-content-between m-auto">
            <Link href="/">
                <img src='/DokoLogo.png' alt="Doko Logo" width={100} height={100} />
            </Link>
            <div className="nav-elements flex gap-10 items-center justify-content-center">
                <Link href='/#about'>
                    <div className=''>
                        About
                    </div>
                </Link>

                <Link href='/#csit'>
                    <div>
                        BSc.CSIT
                    </div>
                </Link>

                <Link href='/#bca'>
                    <div>
                        BCA
                    </div>
                </Link>

                <Link href='/#clubs'>
                    <div>
                        Clubs
                    </div>
                </Link>

                <Link href='/'>
                    <div>
                        DWIT Exam Papers
                    </div>
                </Link>

                <Link href='/'>
                    <div>
                        TU Exam Papers
                    </div>
                </Link>
            </div>

            <div className='flex items-center justify-content-center'>
                <Link href='/login'>
                    <button className='text-[#ff8906] bg-[#fffffe] border-2 border-[#fffffe] hover:opacity-50 transition ease-out duration-300 hover:ease-in rounded-md px-4 py-1'>
                        Login
                    </button>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar