import { workSlider } from "../constants/workData"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { BsArrowRight } from "react-icons/bs"

const WorkSlider = () => {
    return (
        <Swiper
            spaceBetween={10}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-[280px] sm:h-[480px]"
        >
            {workSlider.slides.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                      <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        {slide.images.map((image, index) => {
                          return (
                            <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                                <img src={image.path} width={500} height={300} alt=""/>
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                                  <a href={image.demo} target="_blank" rel="noreferrer">
                                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] mb-2">
                                    <div className="delay-100">LIVE</div>
                                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight /></div>
                                  </div>
                                  </a>
                                  {image.github && (
                                    <a href={image.github} target="_blank" rel="noreferrer">
                                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                      <div className="delay-150">GITHUB</div>
                                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight /></div>
                                    </div>
                                    </a>
                                  )}
                                </div>
                            </div> 
                          )
                        })}
                      </div>
                    </SwiperSlide>
                  )
            })}
        </Swiper>
    )
}

export default WorkSlider