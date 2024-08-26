import React from "react";
import { useNavigate } from "react-router-dom";
const Houses = () => {
  const navigate = useNavigate()
  function handle1 (){
 navigate('/phone1')
  }
  function handle2 (){
    navigate('/phone2')
     }
     function handle3 (){
      navigate('/phone3')
       }
       function handle4 (){
        navigate('/phone4')
         }
         function handle5 (){
          navigate('/phone5')
           }
           function handle6 (){
            navigate('/phone6')
             }
             function handle7 (){
              navigate('/phone7')
               }
               function handle8 (){
                navigate('/phone8')
                 }
                 function handle9 (){
                  navigate('/phone9')
                   }
                   function handle10 (){
                    navigate('/phone10')
                     }
                     function handle11 (){
                      navigate('/phone11')
                       }
                       function handle12 (){
                        navigate('/phone12')
                         }
  return (
    <div>
      <div className="text-white flex flex-wrap justify-between mx-auto  mt-36 p-4 md:p-7 gap-4 md:gap-0">
        <div onClick={handle1} className="text-white border cursor-pointer border-[rgba(255,255,255,0.125)] rounded-md  px-4 py-4 hover:shadow-2xl hover:shadow-cyan-900 hover:transition-shadow w-full md:w-5/12 lg:w-[23%]">
          <img  src="assets/houses/house2.png" alt="" />
          <div className="py-5">
            <div className="font-bold">Apartment</div>
            <div>
              28 Westport Dr. Warminister,
              <div>PA 18974</div>
              <div className="text-cyan-400 text-xl">$30000</div>
            </div>
          </div>
        </div>
        <div onClick={handle2} className="border border-[rgba(255,255,255,0.125)] cursor-pointer rounded-md px-4 py-4 hover:shadow-2xl hover:shadow-cyan-900 hover:transition-shadow w-full md:w-5/12 lg:w-[23%]">
          <img  src="assets/houses/house1.png" alt="" />
          <div className="py-5">
            <div className="font-bold">PentHouse</div>
            <div>
              67 Mumbai India,
              <div>PIN 13774</div>
              <div className="text-cyan-400 text-xl">$43000</div>
            </div>
          </div>
        </div>
        <div onClick={handle3} className="border border-[rgba(255,255,255,0.125)] cursor-pointer rounded-md px-4 py-4 hover:shadow-2xl hover:shadow-cyan-900 hover:transition-shadow w-full md:w-5/12 lg:w-[23%]">
          <img  src="assets/houses/house3.png" alt="" />
          <div className="py-5">
            <div className="font-bold">FarmHouse</div>
            <div>
              47 Karachi Pakistan,
              <div>PA 65664</div>
              <div className="text-cyan-400 text-xl">$39000</div>
            </div>
          </div>
        </div>
        <div onClick={handle4} className="border border-[rgba(255,255,255,0.125)] cursor-pointer rounded-md px-4 py-4 hover:shadow-2xl hover:shadow-cyan-900 hover:transition-shadow w-full md:w-5/12 lg:w-[23%]">
          <img  src="assets/houses/house4.png" alt="" />
          <div className="py-5">
            <div className="font-bold">House</div>
            <div>
              87 Beijing China,
              <div>PA 34684</div>
              <div className="text-cyan-400 text-xl">$76000</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white flex flex-wrap justify-between mx-auto mt-36 p-4 md:p-7 gap-4 md:gap-0">
        <div onClick={handle5} className="border border-[rgba(255,255,255,0.125)] cursor-pointer rounded-md px-4 py-4 hover:shadow-2xl hover:shadow-cyan-900 hover:transition-shadow w-full md:w-5/12 lg:w-[23%]">
          <img  src="assets/houses/house5.png" alt="" />
          <div className="py-5">
            <div className="font-bold">Farmhouse</div>
            <div>
              90 Seoul South Korea,
              <div>PA 12344</div>
              <div className="text-cyan-400 text-xl">$96000</div>
            </div>
          </div>
        </div>
        <div onClick={handle6} className="border border-[rgba(255,255,255,0.125)] cursor-pointer rounded-md px-4 py-4 hover:shadow-2xl hover:shadow-cyan-900 hover:transition-shadow w-full md:w-5/12 lg:w-[23%]">
          <img  src="assets/houses/house6.png" alt="" />
          <div className="py-5">
            <div className="font-bold">House</div>
            <div>
              98 Sydney Australia,
              <div>PA 1454</div>
              <div className="text-cyan-400 text-xl">$54000</div>
            </div>
          </div>
        </div>
        <div onClick={handle7} className="border border-[rgba(255,255,255,0.125)] cursor-pointer rounded-md px-4 py-4 hover:shadow-2xl hover:shadow-cyan-900 hover:transition-shadow w-full md:w-5/12 lg:w-[23%]">
          <img  src="assets/houses/house7.png" alt="" />
          <div className="py-5">
            <div className="font-bold">Apartment</div>
            <div>
              456 White Town Las Vegas,
              <div>PA 25824</div>
              <div className="text-cyan-400 text-xl">$67000</div>
            </div>
          </div>
        </div>
        <div onClick={handle8} className="border border-[rgba(255,255,255,0.125)] rounded-md cursor-pointer px-4 py-4 hover:shadow-2xl hover:shadow-cyan-900 hover:transition-shadow w-full md:w-5/12 lg:w-[23%]">
          <img  src="assets/houses/house8.png" alt="" />
          <div className="py-5">
            <div className="font-bold">PentHouse</div>
            <div>
              345 Red Area Los Angeles,
              <div>PA 13534</div>
              <div className="text-cyan-400 text-xl">$73000</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white flex flex-wrap justify-between mx-auto mt-36 p-4 md:p-7 gap-4 md:gap-0">
        <div onClick={handle9} className="border border-[rgba(255,255,255,0.125)] rounded-md cursor-pointer px-4 py-4 hover:shadow-2xl hover:shadow-cyan-900 hover:transition-shadow w-full md:w-5/12 lg:w-[23%]">
          <img  src="assets/houses/house9.png" alt="" />
          <div className="py-5">
            <div className="font-bold">BeachHouse</div>
            <div>
              764 San Francisco,
              <div>PA 15287</div>
              <div className="text-cyan-400 text-xl">$81000</div>
            </div>
          </div>
        </div>
        <div onClick={handle10} className="border border-[rgba(255,255,255,0.125)] rounded-md cursor-pointer px-4 py-4 hover:shadow-2xl hover:shadow-cyan-900 hover:transition-shadow w-full md:w-5/12 lg:w-[23%]">
          <img  src="assets/houses/house10.png" alt="" />
          <div className="py-5">
            <div className="font-bold">FarmHouse</div>
            <div>
              127 New York City,
              <div>PA 1734</div>
              <div className="text-cyan-400 text-xl">$51000</div>
            </div>
          </div>
        </div>
        <div onClick={handle11} className="border border-[rgba(255,255,255,0.125)] cursor-pointer rounded-md px-4 py-4 hover:shadow-2xl hover:shadow-cyan-900 hover:transition-shadow w-full md:w-5/12 lg:w-[23%]">
          <img  src="assets/houses/house11.png" alt="" />
          <div className="py-5">
            <div className="font-bold">PentHouse</div>
            <div>
              91 Coastline North Carolina,
              <div>PA 1456</div>
              <div className="text-cyan-400 text-xl">$20000</div>
            </div>
          </div>
        </div>
        <div onClick={handle12} className="border border-[rgba(255,255,255,0.125)] cursor-pointer rounded-md px-4 py-4 hover:shadow-2xl hover:shadow-cyan-900 hover:transition-shadow w-full md:w-5/12 lg:w-[23%]">
          <img  src="assets/houses/house12.png" alt="" />
          <div className="py-5">
            <div className="font-bold">Apartment</div>
            <div>
              918 South Dakota,
              <div>PA 14364</div>
              <div className="text-cyan-400 text-xl">$49000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Houses;





// import React from "react";

// const Houses = () => {
//   const houses = [
//     {
//       id: 1,
//       type: "Apartment",
//       address: "28 Westport Dr. Warminister, PA 18974",
//       price: "$30000",
//       img: "/assets/houses/house2.png",
//     },
//     {
//       id: 2,
//       type: "PentHouse",
//       address: "67 Mumbai India, PIN 13774",
//       price: "$43000",
//       img: "/assets/houses/house1.png",
//     },
//     {
//       id: 3,
//       type: "FarmHouse",
//       address: "47 Karachi Pakistan, PA 65664",
//       price: "$39000",
//       img: "/assets/houses/house3.png",
//     },
//     {
//       id: 4,
//       type: "House",
//       address: "87 Beijing China, PA 34684",
//       price: "$76000",
//       img: "/assets/houses/house4.png",
//     },
//     {
//       id: 5,
//       type: "FarmHouse",
//       address: "90 Seoul South Korea, PA 12344",
//       price: "$96000",
//       img: "/assets/houses/house5.png",
//     },
//     {
//       id: 6,
//       type: "House",
//       address: "98 Sydney Australia, PA 1454",
//       price: "$54000",
//       img: "/assets/houses/house6.png",
//     },
//     {
//       id: 7,
//       type: "Apartment",
//       address: "456 White Town Las Vegas, PA 25824",
//       price: "$67000",
//       img: "/assets/houses/house7.png",
//     },
//     {
//       id: 8,
//       type: "PentHouse",
//       address: "345 Redarea Los Angeles, PA 13534",
//       price: "$73000",
//       img: "/assets/houses/house8.png",
//     },
//     {
//       id: 9,
//       type: "BeachHouse",
//       address: "764 San Francisco, PA 15287",
//       price: "$81000",
//       img: "/assets/houses/house9.png",
//     },
//     {
//       id: 10,
//       type: "FarmHouse",
//       address: "127 New York City, PA 1734",
//       price: "$51000",
//       img: "/assets/houses/house10.png",
//     },
//     {
//       id: 11,
//       type: "PentHouse",
//       address: "91 Coastline North Carolina, PA 1456",
//       price: "$20000",
//       img: "/assets/houses/house11.png",
//     },
//     {
//       id: 12,
//       type: "Apartment",
//       address: "918 South Dakota, PA 14364",
//       price: "$49000",
//       img: "/assets/houses/house12.png",
//     },
//   ];

//   return (
//     <div className="mt-36 px-4 md:px-12">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {houses.map((house) => (
//           <div
//             key={house.id}
//             className=" border-[rgba(255,255,255,0.125)] text-white  rounded-md p-7 hover:shadow-2xl hover:shadow-cyan-900 hover:transition-shadow"
//           >
//             <img src={house.img} alt={house.type} className="w-full text-white h-auto rounded" />
//             <div className="py-5">
//               <div className="font-bold text-white">{house.type}</div>
//               <div>
//                 {house.address.split(",").map((line, index) => (
//                   <div key={index}>{line}</div>
//                 ))}
//                 <div className="text-cyan-400 text-xl">{house.price}</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Houses;




