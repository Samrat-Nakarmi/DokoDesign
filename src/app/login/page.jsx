import React from 'react'

function Page() {
  return (
    <div className='w-full h-screen bg-[#0f0e17]'>
      <div className='w-[30%] translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%]'>
        <form action="" className='p-8 bg-[#fffffe]'>
          <img src="/DokoLogo.png" alt="" width={120} height={120}/>
          <h1 className=' text-4xl'>
            Sign-In
          </h1>
          <div className='mt-8'>
            <input type="text" placeholder='Username' className='w-full m-auto p-2 text-lg rounded border-2 border-[#a7a9be]'/>
          </div>
          <div className='mt-8'>
            <input type="password" placeholder='Password' className='w-full m-auto p-2 text-lg rounded border-2 border-[#a7a9be]'/>
          </div>
          <div className='mt-8 text-center border-b border-[#a7a9be]'>
            <button className='px-6 py-2 mb-8 text-lg border-2 border-[#ff8906] hover:bg-[#ff8906] rounded-lg transition ease-out duration-300 hover:ease-in'>
              Login
            </button>
          </div>
          <p className='mt-4 text-right'>
            Forgot Password?
          </p>
        </form>
      </div>
    </div>
  )
}

export default Page