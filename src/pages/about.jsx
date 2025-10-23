import AboutUs from "../components/about_us";
import Footer from "../components/footer";
import MidFoots from "../components/m_foot";
import Navbar from "../components/navbar";
import PageHeader from "../components/pageHeader";
import Testimonial from "../components/testimonial";
import randImg from '../images/main/main6.jpg'
import {FaSmileBeam,  FaCalendarCheck, FaBroom, FaChevronRight, FaArrowRight} from "react-icons/fa";


export default function About(){
    const process = [
        {
            id : 1,
            title : 'Book Your Cleaning',
            icon : <FaCalendarCheck  className="w-15 h-15 p-3 bg-[#4CE0B7] text-white rounded-full mb-3"/>,
            text : 'Choose your preferred cleaning planand schedule your appointment in just a few easy steps'

        },
        {
            id : 2,
            title : 'We Get to Work',
            icon : <FaBroom className="w-15 h-15 p-3 bg-[#4CE0B7] text-white rounded-full mb-3"/>,
            text : 'Our professional cleaners arrive fully equipped, sing eco-friendly products to make your space spotless and fresh'

        },
        {
            id : 3,
            title : 'Enjoy the Shine',
            icon : <FaSmileBeam className="w-15 h-15 p-3 bg-[#4CE0B7] text-white rounded-full mb-3"/>,
            text : 'Sit back and relax whily you enjoy a sparkling, refreshed environment that feels brand new'

        },
    ]
    return(
        <>
            <Navbar />
            <PageHeader 
            image = {randImg}
            title = 'About'/>
            <AboutUs />
            <div className="py-10 max-w-7xl mx-auto text-center p-5 mt-10">
                <p className="text-[#0077B6] font-semibold mb-2">
                    The ShynWorks Methods
                </p>
                <h3 className="text-3xl font-bold text-[#4CE0B7]">
                    Our Cleaning Process
                </h3>
                <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                    {process.map((work) => (
                        <div key={work.id} className="flex flex-col p-5 shadow-md items-center p-8">
                            {work.icon}
                            <h3 className="text-[#0077B6] font-semibold mb-3">
                                {work.title}
                            </h3>
                            <p className="text-sm mb-9">
                                {work.text}
                            </p>
                            <FaArrowRight  className="text-[#4CE0B7] "/>

                        </div>
                    ))}
                </div>
            </div>
            <Testimonial />
            <MidFoots />
            <Footer />
        </>
    );
}