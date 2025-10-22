// src/components/HeroSlider.jsx
import React from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { FaChevronRight } from "react-icons/fa";

import { motion } from "framer-motion";
// import { cardHover, cardTaps } from "../animations/motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider1 from '../images/bgS6.webp'
import slider2 from '../images/bgS3.webp'
import slider3 from '../images/bgS8.webp'
import slider4 from '../images/bgS4.webp'



const slides = [
  {
  id: 1,
  image: slider1,
  sbtitle : "General Home Cleaning",
  title1: "Bringing Shine and Confort to Your Home",
  desc:
  "Experience a spotless home with ShynWorks. We handle the dirt while you enjoy the freshness -- reliable, detailed and eco-friendly",
  t_button : 'Book a Cleaning'
},
{
  id: 2,
  image: slider2,
  sbtitle : "Deep & Post-Construction Cleaning",
  title1: "From Dust to Dazzle - We Handle It All",
  desc:
  "Whether it's post-renovation or a deep seasonal cleanup, our team makes your space sparkle again. Perfection is our standard",
  t_button : 'Get a Quote'
},
{
  id: 3,
  image: slider3,
  sbtitle : "Office & Commercial Cleaning",
  title1: "Clean Spaces. Clear Minds. Productive Teams.",
  desc:
  "Keep your workspace fresh and inspiring with ShynWorks professional office cleaning -- because c clean space boosts performance",
  t_button : "Book for Office"
},
{
  id: 4,
  image: slider4,
  sbtitle : "Laundry & Fabric Care",
  title1: "We Wash. We Iron. You Shine",
  desc:
  "From delicate fabrics to everyday wear, our laundry care brings freshness and confort right to your doorstep",
  t_button : "Schedule Pickup"
},
];

function SlideInner({ slide }) {
  // useSwiperSlide returns an object; read isActive safely
  const slideState = useSwiperSlide();
  const isActive = !!slideState && !!slideState.isActive;

  return (
    <div
      className="relative w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div
        className={`relative z-10 h-full flex flex-col justify-center px-6 lg:px-24`}
      >
        <motion.h3
          className="text-[#00C896] text-sm md:text-lg"
          initial={{ opacity: 0, y: -8 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.5 }}
        >
          {slide.sbtitle}
        </motion.h3>
        
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl h-15 font-bold leading-tight text-[#80ECC9] mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          {slide.title1}
        </motion.h1>
        <motion.p
          className="text-sm md:text-base max-w-xl mb-6 text-white"
          initial={{ opacity: 0, y:20}}
          animate={isActive ? { opacity: 1, y:0} : { opacity: 0, y:20}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {slide.desc}
        </motion.p>

        <motion.button
          className="bg-gradient-to-r from-[#0077B6] to-[#00C896] w-45 h-12 rounded-lg text-white font-medium flex cursor-pointer items-center justify-center mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{duration: 0.5 }} whileHover={{scale:1.05}} whileTap={{scale:0.95}}
        >
          {slide.t_button} <FaChevronRight  className="mt-0.5 ml-1"/>
        </motion.button>
      </div>
    </div>
  );
}

export default function HeroSlider() {
  return (
    <section className="w-full min-h-[80vh]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="h-[90vh]"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <SlideInner slide={s} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
