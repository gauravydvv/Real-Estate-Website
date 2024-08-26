// import React from "react";

// const SearchBox = () => {
//   return (
//     <div className="p-4 m-4">
//       {" "}
//       <div className=" backdrop-blur-sm flex w-7/12 mx-auto text-white justify-between   py-2 my-0 m-0 p-0 border border-[rgba(255,255,255,0.125)] rounded-md">
//         <div className="px-3 py-1  rounded-md flex mx-2 gap-6">
//           {" "}
//           <div>
//             <div className="text-2xl ">Location (any)</div>
//             <div>Select your place</div>
//           </div>
//           <div className="size-7 flex justify-center items-center w-8 h-full">
//           <img src="/assets/Aroow/arrow.svg" alt="" />
//           </div>
//         </div>

//         <div className="px-3 py-1  rounded-md flex mx-2 gap-6">
//           {" "}
//           <div className=" ">
//             <div className="text-2xl ">Houses</div>
//             <div>Choose property type</div>
//           </div>
//           <div className="size-7 flex justify-center items-center w-8 h-full">
//             <img src="/assets/Aroow/arrow.svg" alt="" />
//           </div>
//         </div>
//         <div className="px-3 py-1  rounded-md flex mx-2 gap-6">
//           {" "}
//           <div className=" ">
//             <div className="text-2xl ">Price range (any)</div>
//             <div>Choose price range</div>
//           </div>
//           <div className="size-7 flex justify-center items-center w-8 h-full">
//             <img src="/assets/Aroow/arrow.svg" alt="" />
//           </div>
//         </div>
//         <div className="px-3 py-1  rounded-md flex mx-2 gap-6">
//           {" "}
//           <div className="size-7 flex relative  justify-center items-center w-8 py-4 mx-2 items-center h-full">
//             <img src="public/assets/Aroow/search.png" alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBox;




import React from "react";

const SearchBox = () => {
  return (
    <div className="p-4 m-4">
      <div className="backdrop-blur-sm flex flex-col md:flex-row w-full md:w-7/12 mx-auto text-white justify-between py-2 my-0 m-0 p-0 border border-[rgba(255,255,255,0.125)] rounded-md">
        <div className="px-3 py-1 rounded-md flex flex-col sm:flex-row mx-2 gap-4 sm:gap-6">
          <div>
            <div className="text-lg sm:text-xl md:text-2xl">Location (any)</div>
            <div className="text-sm sm:text-base">Select your place</div>
          </div>
          <div className="flex justify-center items-center w-8 h-full">
            <img src="/assets/Aroow/arrow.svg" alt="Arrow" />
          </div>
        </div>

        <div className="px-3 py-1 rounded-md flex flex-col sm:flex-row mx-2 gap-4 sm:gap-6">
          <div>
            <div className="text-lg sm:text-xl md:text-2xl">Houses</div>
            <div className="text-sm sm:text-base">Choose property type</div>
          </div>
          <div className="flex justify-center items-center w-8 h-full">
            <img src="/assets/Aroow/arrow.svg" alt="Arrow" />
          </div>
        </div>

        <div className="px-3 py-1 rounded-md flex flex-col sm:flex-row mx-2 gap-4 sm:gap-6">
          <div>
            <div className="text-lg sm:text-xl md:text-2xl">$20k-$96k</div>
            <div className="text-sm sm:text-base">Choose price range</div>
          </div>
          <div className="flex justify-center items-center w-8 h-full">
            <img src="/assets/Aroow/arrow.svg" alt="Arrow" />
          </div>
        </div>

        <div className="px-3 py-1 rounded-md flex justify-center items-center mx-2 gap-4 sm:gap-6">
          <div className="flex justify-center items-center w-8 py-4 mx-2 h-full">
            <img src="/assets/Aroow/search.png" alt="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

