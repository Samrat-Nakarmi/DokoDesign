import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='w-full pt-6 pb-12 bg-[#0f0e17] text-[#fffffe]'>
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
                <button>Login</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar