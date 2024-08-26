// import React from "react";

// const Navbar = () => {
//   return (
//     <div className=" flex justify-between mx-72 px-10 py-4 top-5 relative border border-[rgba(255,255,255,0.125)] rounded-xl hover:shadow-2xl hover:shadow-cyan-900 hover:transition-shadow  ">
//       <div className=" mx-3 py-4 text-2xl text-white"><img src="" alt=""  />SweetHome</div>
//       <div className="flex gap-6 mx-10">
//         <div className=" text-white text-xl rounded-full px-2 py-4  ">
//           <button>LOGIN</button>
//         </div>
//         <div className=" text-xl rounded-full text-cyan-400 px-2 right-1 py-4">
//           <button>SIGNUP</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  function handle13 (){
 navigate('/signup')
  }
  function handle14(){
    navigate('/login')
}
  return (
    <div className="flex flex-col  md:flex-row justify-between mx-6 md:mx-72 px-4 md:px-10 py-4 top-5 relative border border-[rgba(255,255,255,0.125)] rounded-xl hover:shadow-2xl hover:shadow-cyan-900 hover:transition-shadow">
      <div className="flex justify-center md:justify-start size-14 items-center mx-3 py-4 text-2xl text-white">
        <img src="public/assets/Aroow/urllogo.jpg" alt="" />

      </div>
      <div className="flex justify-center md:justify-end gap-6 mx-2 md:mx-10 mt-2 md:mt-0">
        <div onClick={handle14} className="text-white text-xl rounded-full px-2 py-2 md:py-4">
        <button>LOGIN</button>
        </div>
        
        <div onClick={handle13} className="text-xl rounded-full text-cyan-400 px-2 py-2 md:py-4">
          <button>SIGNUP</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
