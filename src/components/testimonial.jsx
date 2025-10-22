import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Pagination, Autoplay } from "swiper/modules";
import testImg1 from "../images/testimonial/test1.jpg"
import testImg2 from "../images/testimonial/test2.jpg"
import testImg3 from "../images/testimonial/test3.jpg"
import testImg4 from "../images/testimonial/test4.jpg"
import testImg5 from "../images/testimonial/test5.jpg"

import { motion } from 'framer-motion'
import {cardHover, scrollToLeft, ScrollToTop} from '../effects/motion'
export default function Testimonial(){
    const testimonials = [
    {
        name: "Sarah A.",
        img : testImg1,
        location: "Lagos",
        text: "I booked ShynWorks for a deep clean before hosting guests, and my home has never looked this spotless!",
    },
    {
        name: "Daniel M.",
        img : testImg2,
        location: "Abuja",
        text: "Our office feels brand new every Monday morning. ShynWorks’ consistency and professionalism are unmatched!",
    },
    {
        name: "Tolu F.",
        img : testImg3,
        location: "Port Harcourt",
        text: "After our renovation, ShynWorks transformed the space in hours. The shine literally lived up to their name!",
    },
    {
        name: "Chika E.",
        img : testImg4,
        location: "Enugu",
        text: "Their laundry service is top-notch — fresh scent, neatly folded, perfectly delivered. I’ve switched to ShynWorks full-time.",
    },
    {
        name: "Aisha K.",
        img : testImg5,
        location: "Ibadan",
        text: "They clean with passion. It’s not just work — it’s art! ShynWorks always goes the extra mile.",
    },
        ];
    
    return(
        <>
            <section className="bg-[#F9FAFB] py-16 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <motion.h2 {...ScrollToTop} className="text-3xl font-bold mb-2 text-[#4CE0B7]">
                        Feedback That Speaks for Itself
                    </motion.h2>
                    <motion.p {...ScrollToTop} className="text-[#0077B6] mb-10 text-sm font-semibold">
                        Honest experiences from the people who trust ShynWorks to make their spaces sparkle.
                    </motion.p>
                    <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination = {{clickable:true}}
                    autoplay = {{
                        delay:4000,
                        disableOnInteraction : false,
                        pauseOnMouseEnter : true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        320 : {slidesPerView :1},
                        768 : {slidesPerView : 2},
                        1024 : {slidesPerView : 3},
                    }}
                    >
                        {testimonials.map((data, index) => (
                            <SwiperSlide key={index} className=" mb-10">
                                <motion.div {...cardHover} className="bg-white shadow-xs p-6 hover:shadow-md transition duration-300 flex items-center flex-col">
                                    <img src={data.img} className="w-20 h-20 rounded-full mb-10 object-cover"/>
                                    <p className="text-gray-600 italic mb-4">
                                        {data.text}
                                    </p>
                                    <h3 className="text-[#00C896] font-semibold">
                                        {data.name} 
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                    {data.location}
                                    </p>
                                </motion.div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </section>
        </>
    );
}