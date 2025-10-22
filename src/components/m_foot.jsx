import midfootsImg from '../images/bgS2.webp'
import { motion } from 'framer-motion';
import { cardClicksEffects, scrollToLeft, scrollToRight } from '../effects/motion';
export default function MidFoots(){
    return(
        <>
            <div className="w-full overflow-hidden h-80 relative items-center flex mb-5">
            <img src={midfootsImg} className='w-full h-full blur-xs object-cover'/>
                <div className='absolute top-0 w-full h-full inset-0 bg-black/55 flex item-center flex-col text-center'>
                    <h2 className='text-3xl font-bold mt-15 text-[#80ECC9]'>
                        Ready to have a Brighter Space
                    </h2>
                    <p className='mb-5 text-gray-200 mt-3'>
                        Experience premium cleaning services designed to make your space sparkle inside and out.
                    </p>
                    <motion.button {...scrollToLeft} {...cardClicksEffects} className='absolute top-42 bg-[#80ECC9] outline-none hover:rounded-md transition-all hover:shadow-lg font-semibold px-10 py-3 left-[40%] cursor-pointer text-[#0077B6]'>Book our Services Now</motion.button>
                </div>
            </div>
        </>
    );
}