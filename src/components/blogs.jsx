import blogImg from "../images/stock/stock3.jpg"
import blogImg2 from "../images/stock/stock6.jpg"
import blogImg3 from "../images/stock/stock10.jpg"
import { motion } from "framer-motion"
import { serviceCardEffects, cardHover, cardClicksEffects, scrollToLeft, ScrollToTop, scrollToBottom, scrollToRight } from "../effects/motion"

export default function Blogs(){
    const blogs = [
        {
            id : 1,
            image : blogImg,
            title : '5 Hidden Spots You’re Probably Not Cleaning Enough',
            text : 'Your home may look spotless, but dust and germs love hiding in places you never think about. Let’s uncover them together…'
        },
        {
            id : 2,
            image : blogImg2,
            title : 'Eco-Friendly Cleaning: Small Steps, Big Impact',
            text : 'Switching to green cleaning isn’t just good for the planet — it’s healthier for your family. Here’s how to start today -- Hit us help lets help you out'
        },
        {
            id : 1,
            image : blogImg3,
            title : 'How Often Should You Deep Clean Your Home?',
            text : 'A clean home boosts your comfort and health — but deep cleaning too often (or too little) can be wasteful. Here’s the perfect schedule.'
        },
    ]
    return(
        <>
            <section className="py-16 overflow-hidden">
                <div className="max-w-8xl mx-auto px-6 text-center">
                    <motion.h2 {...ScrollToTop} className="text-2xl lg:text-3xl font-bold mb-2 text-[#4CE0B7]">
                        Fresh Insights from ShynWorks
                    </motion.h2>
                    <motion.p {...ScrollToTop} className="text-[#0077B6] mb-5 text-xs lg:text-sm font-semibold">
                        Expert cleaning tips, home care hacks, and stories that help you keep your space shining all year round.
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                        {blogs.map((data, index) =>(
                            <motion.div {...scrollToRight} {...cardHover} key={index} className="flex flex-col p-5 text-left shadow-sm ">
                                <img src={data.image} className="object-cover"/>
                                <h3 className="text-md mt-2 font-semibold text-[#0077B6]">
                                    {data.title}
                                </h3>
                                <p className="text-xs mt-2">
                                    {data.text}
                                </p>
                                <motion.button {...cardClicksEffects} className='my-4 text-sm rounded-sm cursor-pointer bg-[#4CE0B7] w-30 h-11 rounded-lg text-white hover:text-white transition-all font-semibold'>
                                    Read More
                        </motion.button>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}