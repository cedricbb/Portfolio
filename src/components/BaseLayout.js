import {Route, useLocation, Routes} from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import Work from "../pages/Work"
import Home from '../pages/Home'
import About from '../pages/About'
import Testimonials from '../pages/Testimonials'
import Contact from '../pages/Contact'
import Services from '../pages/Services'

import Navbar from "./Navbar"
import Header from "./Header"
import Transition from "./Transition"

export default function BaseLayout() {
   const location = useLocation()
   
   return (
      <div className={`page bg-site text-white bg-cover bg-no-repeat relative`}>
         <Header />
         <Navbar/>
         <AnimatePresence mode="wait">
            <motion.div key={location.pathname} className="h-full">
               <Transition />
               <Routes location={location} key={location.pathname}>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/services'} element={<Services/>}/>
                  <Route exact path={'/work'} element={<Work/>}/>
                  <Route exact path={'/testimonials'} element={<Testimonials/>}/>
                  <Route exact path={'/contact'} element={<Contact/>}/>
               </Routes>
            </motion.div>
         </AnimatePresence>
      </div>
   )
}

