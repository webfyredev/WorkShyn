import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll'
import {FaFacebook, FaInstagram, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import { motion } from "framer-motion";
import { ScrollToTop } from "../effects/motion";
import { useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const handleBookingServiceClicks = () =>{
        if(location.pathname === '/'){
            const section = document.getElementById('booking');
            section?.scrollIntoView({behavior : "smooth"});
        }else{
            navigate('/', {state : {scrollTo : 'booking'}});
        }
    };
    return(
        <>

            <nav className="flex flex-col justify-center items-center relative">
                <div className="w-full h-auto md:flex flex-row justify-between px-5 hidden">
                    <div className="flex items-center w-auto space-x-3 py-1">
                        <p className="text-sm font-semibold text-[#0077B6]">
                            123 Street, New York, USA
                        </p>
                    </div>
                    <div className="w-110 h-10 flex flex-row items-center justify-between px-2">
                        
                        <Link className="text-[13px] text-[#0077B6] hover:text-[#00C896] font-semibold transition-all duration-300"to="phoneto:+2349131580378">
                            +234 913 1580 378
                        </Link>
                        
                        <Link className="text-[13px] text-[#0077B6] hover:text-[#00C896] font-semibold transition-all duration-300" to="mailto:webfyre@gmail.com">
                            shynworks@gmail.com 
                        </Link>
                        <p className="text-[13px] text-[#0077B6] hover:text-[#00C896] font-semibold transition-all duration-300" to="mailto:webfyre@gmail.com">
                             Mon - Fri : 09 AM - 09 PM
                        </p>

                    </div>
                </div>
                <div className="w-full h-auto px-5 py-3.5 flex justify-between items-center bg-gradient-to-r from-[#00C896] to-[#0077B6]">
                    <NavLink to="/" className="text-white font-bold text-2xl">
                        ShynWorks
                    </NavLink>
                    <ul className="hidden md:hidden lg:flex flex-row items-center space-x-10">
                        <li >
                            <NavLink to="/" end className={({isActive}) => `text-[14px] font-semibold transition-all duration-300 ${isActive ? 'text-[#80ECC9]' : 'text-white hover:text-[#80ECC9]'}`}>
                                Home
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to="/about" className={({isActive}) => `text-[14px] font-semibold transition-all duration-300 ${isActive ? 'text-[#80ECC9]' : 'text-white hover:text-[#80ECC9]'}`}>
                                About
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to="/services" className={({isActive}) => `text-[14px] font-semibold transition-all duration-300 ${isActive ? 'text-[#80ECC9]' : 'text-white hover:text-[#80ECC9]'}`}>
                                Services
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to="/blogs" className={({isActive}) => `text-[14px] font-semibold transition-all duration-300 ${isActive ? 'text-[#80ECC9]' : 'text-white hover:text-[#80ECC9]'}`}>
                                Blogs
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to="/pricing" className={({isActive}) => `text-[14px] font-semibold transition-all duration-300 ${isActive ? 'text-[#80ECC9]' : 'text-white hover:text-[#80ECC9]'}`}>
                                Pricing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts" className={({isActive}) => `text-[14px] font-semibold transition-all duration-300 ${isActive ? 'text-[#80ECC9]' : 'text-white hover:text-[#80ECC9]'}`}>
                                Contacts
                            </NavLink>
                        </li>
                        <button onClick={handleBookingServiceClicks} className="px-8 py-2.5 cursor-pointer text-[12px] mr-10 bg-white rounded-md font-semibold text-[#0077B6]">
                            Book Now
                        </button>
                    </ul>
                    <button className="lg:hidden mr-5 text-[#80ECC9] cursor-pointer hover:text-white transition-all duration-300" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes  size={25}/> : <FaBars size={25} />}
                    </button>
                    {isOpen && (
                        <motion.div {...ScrollToTop} className="lg:hidden absolute top-15.5 left-0 z-50 w-full h-auto bg-[#00C896] p-5 flex flex-col md:top-26">
                            <ul className="space-y-3">
                                <li className="w-full h-10 flex items-center px-2 py-2 cursor-pointer">
                                    <NavLink to="/" end className={({isActive}) => `w-full h-full text-[14px] font-semibold transition-all duration-300 ${isActive ? 'text-[#80ECC9]' : 'text-white hover:text-[#80ECC9]'}`}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="w-full h-10 flex items-center justify-center px-2 py-2 cursor-pointer">
                                    <NavLink to="/about" className={({isActive}) => `w-full h-full text-[14px] font-semibold transition-all duration-300 ${isActive ? 'text-[#80ECC9]' : 'text-white hover:text-[#80ECC9]'}`}>
                                        About
                                    </NavLink>
                                </li>
                                <li className="w-full h-10 flex items-center justify-center px-2 py-2 cursor-pointer">
                                    <NavLink to="/services" className={({isActive}) => `w-full h-full text-[14px] font-semibold transition-all duration-300 ${isActive ? 'text-[#80ECC9]' : 'text-white hover:text-[#80ECC9]'}`}>
                                        Services
                                    </NavLink>
                                </li>
                                <li className="w-full h-10 flex items-center justify-center px-2 py-2 cursor-pointer">
                                    <NavLink to="/blogs" className={({isActive}) => `w-full h-full text-[14px] font-semibold transition-all duration-300 ${isActive ? 'text-[#80ECC9]' : 'text-white hover:text-[#80ECC9]'}`}>
                                        Blogs
                                    </NavLink>
                                </li>
                                <li className="w-full h-10 flex items-center justify-center px-2 py-2 cursor-pointer">
                                    <NavLink to="/pricing" className={({isActive}) => `w-full h-full text-[14px] font-semibold transition-all duration-300 ${isActive ? 'text-[#80ECC9]' : 'text-white hover:text-[#80ECC9]'}`}>
                                        Pricing
                                    </NavLink>
                                </li>
                                <li className="w-full h-10 flex items-center justify-center px-2 py-2 cursor-pointer">
                                    <NavLink to="/contacts" className={({isActive}) => `w-full h-full text-[14px] font-semibold transition-all duration-300 ${isActive ? 'text-[#80ECC9]' : 'text-white hover:text-[#80ECC9]'}`}>
                                        Contacts
                                    </NavLink>
                                </li>
                                <button className="px-8 py-2.5 w-full h-12 cursor-pointer text-[12px] mr-10 bg-white rounded-md font-semibold text-[#0077B6]">
                                    <ScrollLink to="booking"
                                        smooth={true}
                                        duration={600}
                                        offset={-50}
                                    >
                                        Book Now
                                    </ScrollLink>
                                </button>
                            </ul>
                        </motion.div>
                    )}

                    
                </div>
                
            </nav>
        </>
    );
}