import { motion } from "framer-motion";
import { cardHover, cardClicksEffects, scrollToLeft } from "../effects/motion";
export default function BookingMenu(){
    return(
        <>
            <motion.div {...scrollToLeft} className="w-full lg:h-30 h-auto p-5 flex justify-evenly items-center overflow-hidden">
                <form action="" className="w-full md:h-[60%] h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <input type="text" placeholder="Name" className="border-1 hover:border-2 border-[#4CE0B7] outline-none text-sm rounded-sm text-[#00C887] w-full  h-10  lg:h-full px-2 transition-all"/>
                    <input type="text" placeholder="Phone number" className="border-1 hover:border-2 border-[#4CE0B7] outline-none text-sm rounded-sm text-[#00C887] w-full h-10 lg:h-full px-2 transition-all"/>
                    <input type="text" placeholder="Location" className="border-1 hover:border-2 border-[#4CE0B7] outline-none text-sm rounded-sm text-[#00C887] w-full h-10 lg:h-full px-2 transition-all"/>
                    <motion.button 
                    {...cardHover} {...cardClicksEffects}
                    className="w-full bg-[#00C896] text-white font-semibold cursor-pointer rounded-sm h-10 lg:h-full">
                        Make Bookings
                    </motion.button>
                </form>
            </motion.div>
        </>
    );
}