import React from 'react';

function Page() {
  return (
    <div className='w-full min-h-screen bg-[#0f0e17] flex justify-center items-center'>
      <div className='w-full max-w-md p-8 bg-[#fffffe] rounded-lg'>
        <div className='text-center'>
          <img src="/DokoLogo.png" alt="Doko Logo" width={120} height={120} />
          <h1 className='text-3xl sm:text-4xl mt-4'>
            Sign-In
          </h1>
        </div>
        <div className='mt-6'>
          <input
            type="text"
            placeholder='Username'
            className='w-full p-2 text-lg rounded border-2 border-[#a7a9be]'
          />
        </div>
        <div className='mt-4'>
          <input
            type="password"
            placeholder='Password'
            className='w-full p-2 text-lg rounded border-2 border-[#a7a9be]'
          />
        </div>
        <div className='mt-6'>
          <button
            className='w-full px-6 py-2 text-lg border-2 border-[#ff8906] hover:bg-[#ff8906] rounded-lg transition ease-out duration-300 hover:ease-in'
          >
            Login
          </button>
        </div>
        <p className='mt-4 text-right text-[#a7a9be]'>
          Forgot Password?
        </p>
      </div>
    </div>
  );
}

export default Page;
