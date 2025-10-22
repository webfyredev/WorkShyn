import { Link, NavLink } from "react-router-dom";
import {FaFacebook, FaInstagram, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import { useState } from "react";
export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>

            <nav className="flex flex-col justify-center items-center">
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
                    <Link to="#" className="text-white font-bold text-2xl">
                        ShynWorks
                    </Link>
                    <ul className="hidden md:hidden lg:flex flex-row items-center space-x-10">
                        <li >
                            <Link to="/" className="text-[14px] text-white font-semibold hover:text-[#00C896] transition-all duration-300">
                                Home
                            </Link>
                        </li>
                        <li >
                            <Link to="/about" className="text-[14px] text-white font-semibold hover:text-[#00C896] transition-all duration-300">
                                About
                            </Link>
                        </li>
                        <li >
                            <Link to="/services" className="text-[14px] text-white font-semibold hover:text-[#00C896] transition-all duration-300">
                                Services
                            </Link>
                        </li>
                        <li >
                            <Link to="/blogs" className="text-[14px] text-white font-semibold hover:text-[#00C896] transition-all duration-300">
                                Blogs
                            </Link>
                        </li>
                        <li >
                            <Link to="/pricing" className="text-[14px] text-white font-semibold hover:text-[#00C896] transition-all duration-300">
                                Pricing
                            </Link>
                        </li>
                        <li >
                            <Link to="/contacts" className="text-[14px] text-white font-semibold hover:text-[#00C896] transition-all duration-300">
                                Contacts
                            </Link>
                        </li>
                        <button className="px-8 py-2.5 cursor-pointer text-[12px] mr-10 bg-white rounded-md font-semibold text-[#0077B6]">
                            Book Now
                        </button>
                    </ul>
                    <button className="lg:hidden mr-5 text-[#80ECC9] cursor-pointer hover:text-white transition-all duration-300" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes  size={25}/> : <FaBars size={25} />}
                    </button>

                    
                </div>
                
            </nav>
        </>
    );
}