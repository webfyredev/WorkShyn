import { FaFacebook, FaInstagram, FaEnvelope, FaTwitter, FaMobile, FaMapPin } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { Link } from "react-router-dom";
export default function Footer(){
    const date = new Date().getFullYear();
    return(
        <>
            <footer className="w-full flex flex-col py-10 bg-gradient-to-r from-[#0077B6] to-[#00C896]">
                <main className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5">
                    <div className="flex flex-col space-y-3 mb-5 md:mb-0">
                        <h3 className="text-white font-bold text-3xl">
                            ShynWorks
                        </h3>
                        <p className="italic text-gray-200">
                            We Work. You Shine
                        </p>
                        <p className="text-sm text-gray-200">
                            Professional home & office cleaning services designed to bring freshness, comfort, and sparkle into your space.
                        </p>
                        <div className="flex w-auto space-x-2 mt-3">
                            {/* <FaFacebook  className="w-9 h-9 p-2.5 bg-[#F2F2F2] text-[#0077B6] hover:cursor-pointer rounded-lg hover:bg-white transition-all hover:shadow-2xl"/> */}
                            <FaFacebook  className="w-9 h-9 p-2.5 bg-white text-[#0077B6]  hover:cursor-pointer rounded-lg hover:bg-[#0077B6] hover:text-white transition-all hover:shadow-2xl"/>
                            <FaInstagram  className="w-9 h-9 p-2.5 bg-white text-[#0077B6]  hover:cursor-pointer rounded-lg hover:bg-[#0077B6] hover:text-white transition-all hover:shadow-2xl"/>
                            <SiX  className="w-9 h-9 p-2.5 bg-white text-[#0077B6] shadow-md hover:cursor-pointer rounded-lg hover:bg-[#0077B6] hover:text-white transition-all hover:shadow-2xl"/>
                            <FaEnvelope  className="w-9 h-9 p-2.5 bg-white text-[#0077B6] shadow-md hover:cursor-pointer rounded-lg hover:bg-[#0077B6] hover:text-white transition-all hover:shadow-2xl"/>
                        </div>
                    </div>
                    <div className="flex flex-col md:ml-30 mb-5 md:mb-0 sm:ml-0">
                        <h3 className="font-semibold md:text-xl lg:text-2xl text-white mb-2">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col space-y-3">
                            <li>
                                <Link to="/" className="text-gray-200  hover:font-semibold text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-200  hover:font-semibold text-sm">
                                    About Us
                                </Link>
                            </li>   
                            <li>
                                <Link to="/services" className="text-gray-200  hover:font-semibold text-sm">
                                    Services
                                </Link>
                            </li>   
                            <li>
                                <Link to="/blogs" className="text-gray-200 hover:font-semibold text-sm">
                                    Blogs
                                </Link>
                            </li>   
                            <li>
                                <Link to="/pricing" className="text-gray-200  hover:font-semibold text-sm">
                                    Pricing
                                </Link>
                            </li>      
                            <li>
                                <Link to="/contacts" className="text-gray-200 hover:font-semibold text-sm">
                                    Contacts
                                </Link>
                            </li>   
                        </ul>
                    </div>
                    <div className="flex flex-col md:ml-20 mb-5 md:mb-0 sm:ml-0">
                        <h3 className="font-semibold md:text-xl lg:text-2xl text-white mb-2">
                            Services
                        </h3>
                        <ul className="flex flex-col space-y-3">
                            <li>
                                <Link className="text-gray-200  hover:font-semibold text-sm">
                                    Home Cleaning
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-200  hover:font-semibold text-sm">
                                    Office Cleaning
                                </Link>
                            </li>   
                            <li>
                                <Link className="text-gray-200  hover:font-semibold text-sm">
                                    Laundry &amp; Fabric Care
                                </Link>
                            </li>   
                            <li>
                                <Link className="text-gray-200 hover:font-semibold text-sm">
                                    Deep Cleaning
                                </Link>
                            </li>   
                            <li>
                                <Link className="text-gray-200 hover:font-semibold text-sm">
                                    Post-Construction Cleaning
                                </Link>
                            </li>        
                        </ul>
                    </div>
                    <div className="flex flex-col mb-5 md:mb-0">
                        <h3 className="font-semibold lg:text-2xl md:text-xl text-white mb-2">
                            Contact Info
                        </h3>
                        <ul className="flex flex-col space-y-3">
                            <li>
                                <Link className="text-gray-200  hover:font-semibold text-sm flex items-center">
                                  <FaMapPin  className="mr-1 mt-1"/>  23, Allen Avenue, Ikeja, Lagos, Nigeria
                                </Link>
                            </li>
                              
                            <li>
                                <Link to="#" className="text-gray-200  hover:font-semibold text-sm flex items-center">
                                    <FaMobile  className="mt-1 mr-1"/> +234 913 1580 378

                                </Link>
                            </li>      
                            <li>
                                <Link to="mailto:shynworks.com" className="text-gray-200  hover:font-semibold text-sm flex items-center">
                                    <FaEnvelope  className="mt-1 mr-1"/>shynworks@gmail.com
                                </Link>
                            </li>      
                        </ul>
                    </div>
                </main>
                <aside className="w-full items-center justify-center flex mt-5 py-2">
                    <p className="font-semibold text-sm text-white">&copy; {date} <Link to="mailto:shynworks@gmail.com" className="hover:text-[#4CE0B7] transition">ShynWorks</Link> Cleaning Services. All right reserved.</p>
                </aside>
            </footer>
        </>
    );
}