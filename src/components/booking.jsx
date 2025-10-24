import { motion } from "framer-motion";
import bookImg from '../images/main/main6.jpg'
import { cardHover, cardClicksEffects, scrollToLeft } from "../effects/motion";
export default function BookingMenu(){
    return(
        <>
            <div className="w-full h-auto relative mt-10">
                <img src={bookImg}  className="w-full lg:h-120 h-80 object-cover position-center"/>
                <div className="absolute top-0 w-full h-full inset-0 bg-black/55 flex items-center flex-col">
                    <h2 className="md:text-3xl text-xl lg:text-4xl lg:mt-40 mt-30 font-bold text-[#80ECC9] lg:mb-5 mb-2">
                        Available For All Cleaning Services
                    </h2>
                    <p className="text-white font-semibold md:text-2xl text-lg lg:text-3xl">
                        24 Hours 7 Days a Week
                    </p>
                </div>
            </div>
            <div className="w-full h-110 flex flex-col items-center justify-center lg:mt-[-10%] md:mt-[-10%] mt-[-20%] z-1 relative mb-20">
                <form className="lg:w-[55%] w-[95%] h-full bg-[#F9FAFB] flex flex-col items-center p-5 shadow-md rounded-sm" id="booking">
                    <h2 className="md:text-2xl text-xl lg:text-3xl mb-7 font-semibold text-[#00C896]">
                        Book For A Service
                    </h2>
                    <div className="flex justify-between items-center w-full h-auto mb-5">
                        <input type="text" placeholder="Name" className="w-[48%] h-11 px-2 outline-none border-1 border-[#4CE0B7] text-[#0077B6] text-sm hover:border-2 hover:rounded-sm transition-all" />
                        <input type="email" placeholder="Email" className="w-[48%] h-11 px-2 outline-none border-1 border-[#4CE0B7] text-[#0077B6] text-sm hover:border-2 hover:rounded-sm transition-all" />
                    </div>
                    <div className="flex justify-between items-center w-full h-auto mb-5">
                        <input type="text" placeholder="Select Service" className="w-[48%] h-11 px-2 outline-none border-1 border-[#4CE0B7] text-[#0077B6] text-sm hover:border-2 hover:rounded-sm transition-all" />
                        <input type="date" placeholder="Service Date" className="w-[48%] h-11 px-2 outline-none border-1 border-[#4CE0B7] text-[#0077B6] text-sm hover:border-2 hover:rounded-sm transition-all" />
                    </div>
                    <div className="flex justify-between items-center w-full h-auto mb-5">
                        <textarea name="" id="" placeholder="Additional Information" className="w-full h-25 p-2  outline-none border-1 border-[#4CE0B7] text-[#0077B6] text-sm hover:border-2 hover:rounded-sm transition-all"></textarea>
                    </div>

                    <motion.button {...cardHover} {...cardClicksEffects} className="w-full h-12 cursor-pointer bg-[#00C896] text-white font-semibold hover:rounded-md transition-all">
                        Book Service
                    </motion.button>
                    
                </form>
            </div>
        </>
    );
}