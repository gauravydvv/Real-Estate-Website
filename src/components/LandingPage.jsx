// import React from "react";

// const LandingPage = () => {
//   return (
//     <div className=" p-4 m-4">
//       {" "}
//       <div className="text-white flex justify-between relative py-4 m-0 ">
//         <div>
//           {" "}
//           <div className="text-8xl px-28 py-32">
//             <div className="">Rent your Dream</div>
//             <div className="">house with us...</div>
//           </div>
//           <div className="px-28 text-2xl">
//             Powerful, self-serve product and growth analytics to help you
//             convert, engage, and retain more.
//           </div>
//         </div>
//         <div className="  size-10/12 py-11">
//           <img
//             src="/assets/Landingpage/hd-wallpaper-with-houses-on-the-beach.jpg"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;



import React from "react";

const LandingPage = () => {
  return (
    <div className="p-4 m-4">
      <div className="text-white flex flex-col lg:flex-row justify-between relative py-4 m-0">
        <div className="text-center lg:text-left">
          <div className="text-4xl sm:text-6xl lg:text-8xl px-4 sm:px-10 lg:px-28 py-8 lg:py-32">
            <div>Rent your Dream</div>
            <div>house with us...</div>
          </div>
          <div className="px-4 sm:px-10 lg:px-28 text-lg sm:text-xl lg:text-2xl">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more.
          </div>
        </div>
        <div className="w-full lg:w-auto py-8 lg:py-11">
          <img
            src="/assets/Landingpage/hd-wallpaper-with-houses-on-the-beach.jpg"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
