import services1 from '../images/stock/stock8.jpg'
import services2 from '../images/stock/stock15.jpg'
import services3 from '../images/stock/stock9.jpg'
import services4 from '../images/stock/stock5.jpg'
import services5 from '../images/stock/stock1.jpg'
import { motion } from 'framer-motion'
import { ScrollToTop, cardHover, scrollToBottom, scrollToLeft, serviceCardEffects, cardClicksEffects } from '../effects/motion'
export default function Service(){
    const services = [
        {
            id : 1,
            image : services1,
            title : 'Home & Residential Cleaning',
            sb_title : 'Enjoy spotless living spaces with our regular or one-time home cleaning. From bedrooms to kitchens, we handle the dust, polish every corner, and leave your home fresh, clean, and cozy.',
            btn_text : 'Book Home Cleaning'
        },
        {
            id : 2,
            image : services2,
            title : 'Deep Cleaning & Post-Construction Cleaning',
            sb_title : 'Just moved in or completed a renovation? Our deep cleaning service targets hidden dirt and buildup that normal cleaning can’t reach — giving your property that brand-new sparkle again.',
            btn_text : 'Get Deep Clean'
        },
        {
            id : 3,
            image : services3,
            title : 'Office & Commercial Cleaning',
            sb_title : 'A clean office is a productive office. ShynWorks ensures your workspaces are spotless, sanitized, and always ready for success. Perfect for offices, shops, and institutions.',
            btn_text : 'Book for Office'
        },
        {
            id : 4,
            image : services4,
            title : 'Laundry & Fabric Care',
            sb_title : 'Freshly washed, neatly folded, and delicately pressed — our laundry service saves you time while keeping your clothes looking their best. Pickup and delivery available on request.',
            btn_text : 'Schedule Pickup'
        },
        {
            id : 5,
            image : services5,
            title : 'Special Cleaning Requests',
            sb_title : 'Hosting an event, dealing with stains, or need a custom cleaning solution? Our flexible packages cover unique needs — tailored just for you.',
            btn_text : 'Request Custom Service'
        },
    ]
    return(
        <>
            <div className="max-w-8xl mx-auto w-full h-auto flex flex-col items-center mt-5 overflow-hidden">
                <motion.p {...scrollToBottom} className="mt-5 font-semibold text-[#0077B6]">
                    Our Cleaning Services
                </motion.p>
                <motion.h2 {...ScrollToTop} className="text-3xl mt-2 font-bold text-[#4CE0B7]">
                    What We Offer
                </motion.h2>
                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-5 p-5">
                {services.map((data) => (
                    <motion.div 
                    {...serviceCardEffects}

                    className="flex flex-col p-5 shadow-md mb-5">
                        <img src={data.image} className='object-cover'/>
                        <h2 className='mt-2 font-semibold text-[#0077B6]'>
                            {data.title}
                        </h2>
                        <p className='text-xs mt-2'>
                            {data.sb_title}
                        </p>
                        <motion.button {...cardClicksEffects} className='my-4 text-sm rounded-sm cursor-pointer bg-[#4CE0B7] w-45 h-11 rounded-lg text-white hover:text-white transition-all font-semibold'>
                            {data.btn_text}
                        </motion.button>
                    </motion.div>
                ))}
                </div>
            </div>
        </>
    );
}