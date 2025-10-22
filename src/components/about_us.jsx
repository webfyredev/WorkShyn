import aboutImg from '../images/bgS7.webp'
import { motion } from 'framer-motion';
import { scrollToLeft, scrollToRight } from '../effects/motion';
export default function AboutUs(){
    const values = [
        {
            id : 1,
            data : "100% Satisfaction Guarantee",
        },
        {
            id : 2,
            data : "Eco-Friendly Cleaning Solutions",
        },
        {
            id : 3,
            data : "Experienced & Vetted Cleaners",
        },
        {
            id : 4,
            data : "Flexible Scheduling & Reliable Service",
        },
        {
            id : 5,
            data : "Quick Online Booking and Support",
        }
    ]
    return(
        <>
            <div className="lg:flex lg:flex-row flex flex-col w-full lg:h-150 h-auto px-5 py-10 object-cover">
            <motion.img {...scrollToRight} src={aboutImg} className='lg:w-1/2 w-full h-full'/>
            <motion.div {...scrollToLeft} className='lg:w-1/2 w-full h-full lg:px-10 py-5'>
                <h3 className='font-semibold text-[#0077B6]'>
                    Learn About-Us
                </h3>
                <h2 className='lg:text-3xl text-2xl font-bold mt-3 text-[#4CE0B7]'>
                    We Don’t Just Clean — We Create Spaces That Shine.
                </h2>
                <h2 className='mt-3 text-[#0077B6] italic font-semibold'>
                    Trusted Cleaning Professionals with a Passion for Perfection.
                </h2>
                <p className='text-justify mt-3 text-sm'>
                    At ShynWorks Cleaning Services, we believe a clean environment is the foundation of comfort, health, and productivity. Founded with a vision to redefine what professional cleaning means, we combine modern cleaning techniques, eco-friendly products, and attention to the smallest detail — giving every home and office a spotless, refreshing finish.
                </p>
                <p className='text-justify mt-3 text-sm'>
                    At ShynWorks, we don’t just remove dirt — we restore balance, beauty, and brilliance to your surroundings. Whether it’s your home, workspace, or special event venue, we work hard so you can shine brighter.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-8'>
                {values.map((data) => (
                    <p className='flex items-center text-[13px] mb-2 w-full'><span className='w-2.5 h-2.5 rounded-full mr-2 bg-[#4CE0B7]'></span>{data.data} </p>
                ))}
                </div>
            </motion.div>
            </div>
        </>
    );
}