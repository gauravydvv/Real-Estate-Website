import React from 'react'
import { BrowserRouter, Routes  , Route } from 'react-router-dom'
import Phone1 from './Mobilebig/Phone1'
import Phone2 from './Mobilebig/phone2'
import Phone3 from './Mobilebig/Phone3'
import Phone4 from './Mobilebig/Phone4'
import Phone5 from './Mobilebig/Phone5'
import Phone6 from './Mobilebig/Phone6'
import Phone7 from './Mobilebig/Phone7'
import Phone8 from './Mobilebig/Phone8'
import Phone9 from './Mobilebig/Phone9'
import Phone10 from'./Mobilebig/Phone10'
import Phone11 from './Mobilebig/Phone11'
import Phone12 from './Mobilebig/Phone12'
import App from './App'

import Logsign from './components/Logsign'
import Login from './components/Login'
import Logsign2 from './components/Logsign2'

export const Home = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
             <Route path="/" element ={<App/>}/>
             <Route path="/:phoneid" element={<Phone1/>}/>
             <Route path="/phone2" element={<Phone2/>}/>
             <Route path="/phone3" element={<Phone3/>}/>
             <Route path="/phone4" element={<Phone4/>}/>
             <Route path="/phone5" element={<Phone5/>}/>
             <Route path="/phone6" element={<Phone6/>}/>
             <Route path="/phone7" element={<Phone7/>}/>
             <Route path="/phone8" element={<Phone8/>}/>
             <Route path="/phone9" element={<Phone9/>}/>
             <Route path="/phone10" element={<Phone10/>}/>
             <Route path="/phone11" element={<Phone11/>}/>
             <Route path="/phone12" element={<Phone12/>}/>
             <Route path="/signup" element={<Logsign/>}/>
             <Route path="/login" element={<Logsign2/>}/> 
          </Routes>
        </BrowserRouter>
    </div>
  )
}
