import React from 'react'

const Phone3 = () => {
  return (
    <div className="flex flex-col md:flex-row py-36 text-white justify-between">
      <div>
        <div className="mx-4 md:mx-32 w-full md:w-11/12">
          <div className="font-bold text-2xl">FarmHouse</div>
          <div className="text-xl">47 Karachi Pakistan PA 65664</div>
          <div className="w-full md:w-max">
            <img src="assets/houses/house3lg.png" alt="" />
          </div>
          <div className="py-8 md:py-14">
            <div className="flex flex-col text-2xl md:flex-row gap-4 md:gap-12 py-5">
              <span>3 bedrooms</span>
              <span>4 Bathrooms</span>
              <span>4200sq ft area</span>
            </div>
            <div>
              illoat. Repudiandae ratione impedit delectus consectetur.
              Aspernatur vero obcaecati placeat ab distinctio unde ipsam molestias
              atque ratione delectus dignissimos doloremque quae aliquid maiores id
              tempore consequatur, quod pariatur saepe.
            </div>
          </div>
        </div>
      </div>

      <div className="border border-[rgba(255,255,255,0.180)] mx-4 md:mx-20 px-4 md:px-14 relative my-8 md:my-14 py-4 rounded-md">
        <form>
          <input
            className="border border-[rgba(255,255,255,0.180)] outline-none rounded-md w-full md:w-11/12 px-4 h-14 text-gray-400 text-sm m-2 md:m-7"
            type="text"
            placeholder="Name*"
          />
          <input
            className="border border-[rgba(255,255,255,0.180)] outline-none rounded-md w-full md:w-11/12 m-2 md:m-7 px-4 h-14 text-gray-400 text-sm"
            type="text"
            placeholder="Email*"
          />
          <input
            className="border border-[rgba(255,255,255,0.180)] outline-none rounded-md w-full md:w-11/12 m-2 md:m-7 px-4 h-14 text-gray-400 text-sm"
            type="text"
            placeholder="Phone*"
          />
          <textarea
            className="border border-[rgba(255,255,255,0.180)] outline-none resize-none w-full md:w-11/12 m-2 md:m-7 rounded p-4 h-36 text-sm text-gray-400"
            placeholder="Message"
          ></textarea>
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <button className="bg-cyan-600 text-white mx-2 md:mx-7 px-2 py-4 rounded-md w-full md:w-auto">
                Send Message
              </button>
            </div>
            <div>
              <button className="border border-cyan-500 text-white mx-2 md:mx-6 py-4 px-8 rounded-md w-full md:w-auto">
                Call
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Phone3
