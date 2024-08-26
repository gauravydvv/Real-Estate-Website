
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import SearchBox from "./components/SearchBox";
import Houses from "./components/Houses";
import Footer from "./components/Footer";
import Signup from "./components/Signup";

function App() {

  //   {
  //     path:"/login",
  //     element:" <><Navbar /><Login/> </>"
  //   }

  // ])
  return (
    <>
      <div className="  ">
       <Navbar/>
        {/* <RouterProvider router={router}/> */}
        <LandingPage />
        <SearchBox />
        <Houses />
        <Footer/>
       
      </div>
    </>
  );
}

export default App;
