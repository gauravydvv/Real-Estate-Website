import React from 'react'

const Signup = () => {
  return (
    <div className='mx-96 p-40'>
            <div className="border border-[rgba(255,255,255,0.180)]  relative rounded-md p-14">
        <form>
          <input
            className="border border-[rgba(255,255,255,0.180)] outline-none rounded-md w-full md:w-11/12 px-4  h-14 text-gray-400 text-sm m-2 md:m-7"
            type="text"
            placeholder="Username*"
          />
          <input
            className="border border-[rgba(255,255,255,0.180)] outline-none rounded-md w-full md:w-11/12 m-2 md:m-7 px-4 h-14 text-gray-400 text-sm"
            type="text"
            placeholder="Email*"
          />
          <input
            className="border border-[rgba(255,255,255,0.180)] outline-none rounded-md w-full md:w-11/12 m-2 md:m-7 px-4 h-14 text-gray-400 text-sm"
            type="text"
            placeholder="Password  (Minimum 8 letters*)"
          />
          <input
            className="border border-[rgba(255,255,255,0.180)] outline-none rounded-md w-full md:w-11/12 m-2 md:m-7 px-4 h-14 text-gray-400 text-sm"
            type="text"
            placeholder="Phone*"
          />
          
          <div className="flex flex-col md:flex-row justify-between ">
            <div className='justify-center mx-64 m-10 '>
              <button className="bg-cyan-600  text-white mx-2  md:mx-7 px-6 py-4 rounded-md w-full md:w-auto">
                SIGNUP
              </button>
            </div>
            
          </div>
        </form>
      </div>


    </div>
  )
}

export default Signup