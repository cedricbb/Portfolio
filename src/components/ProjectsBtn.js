import { NavLink } from "react-router-dom"
import rounded from "../img/rounded-text.png"
import { HiArrowRight } from "react-icons/hi2"

const ProjectsBtn = () => {
  return (
  <div className="mx-auto xl:mx-0">
    <NavLink to='/work' className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
      <img src={rounded} width="141px" height="148px" alt="" className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"/>
      <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"/> 
    </NavLink>
  </div>
  )
}

export default ProjectsBtn
