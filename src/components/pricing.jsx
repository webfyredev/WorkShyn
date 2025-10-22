import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { cardHover, cardClicksEffects, scrollToLeft, ScrollToTop, scrollToBottom } from "../effects/motion";
export default function Pricing(){
    const System = [
        {
            id: 1,
            level : 'Basic',
            price : 29,
            visit : 'per',
            activities : ['Apartment cleaning', 'Bathroom & Kitchen', 'Basic Dusting', 'Once per week']
        },
        {
            id: 2,
            level : 'Standard',
            price : 49,
            visit : 'per',
            activities : ['Deep Cleaning', 'All rooms & windows', 'Laundry services', 'Twice per week']
        },
        {
            id: 3,
            level : 'Premium',
            price : 79,
            visit : 'per',
            activities : ['Full home & outdoor cleaning', 'Laundry & Ironing', '24/7 priority support', 'Flexible Scheduling']
        },
    ]
    return(
        <>
            <section className="bg-gray-50 py-10">
                <div className="max-w-6xl px-6 mx-auto text-center">
                    <motion.h2 {...ScrollToTop} className="text-2xl md:text-3xl font-bold text-[#4CE0B7] mb-5">
                        Affordable Cleaning Packages
                    </motion.h2>
                    <motion.p {...ScrollToTop} className="text-[#0077B6] mb-5 text-sm font-semibold">
                        Choose the plan that fits your home best. No hidden fees -- just spotless services!
                    </motion.p>
                    <motion.div {...scrollToLeft} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {System.map((pricing) =>(
                        <motion.div {...cardHover} className="flex flex-col items-center bg-white shadow-lg p-5 border border-gray-100">
                            <h2 className="text-xl font-semibold text-[#0077B6] mb-4">
                                {pricing.level}
                            </h2>
                            <p className="text-4xl text-[#4CE0B7] font-bold mb-2">
                                ${pricing.price}
                            </p> 
                            <p className="text-gray-400 mb-6 italic">
                                {pricing.visit} visit
                            </p>
                            <ul className="flex flex-col space-y-4 text-gray-600 text-sm">
                                {pricing.activities.map((data) => (
                                    <li key={data.id} className="flex"><FaCheck className="mt-1 mr-1 text-[#4CE0B7]"/>{data}</li>
                                ))}
                            </ul>   
                            <motion.button {...cardClicksEffects} className="bg-[#4CE0B7] text-white py-2 px-12 rounded-md my-5 cursor-pointer">Get Started</motion.button>
                        </motion.div>
                    ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}