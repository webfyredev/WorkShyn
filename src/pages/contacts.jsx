import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PageHeader from "../components/pageHeader";
import contactsImg from '../images/main/main1.jpg'
import contactsBg from '../images/stock/stock17.jpg'
import { motion } from "framer-motion";
import { cardClicksEffects, cardHover } from "../effects/motion";
export default function Contacts(){
    return(
        <>
            <Navbar />
            <PageHeader
            image =  {contactsImg}
            title='Contacts'/>
                <div className="w-full lg:h-150 md:h-auto h-auto flex md:flex-col sm:flex-col flex-col lg:flex-row p-5 items-center justify-center bg-[#F9FAFB]">
                    <img src={contactsBg} className="w-full lg:w-[45%] h-full object-cover"/>
                    <div className="lw-full g:w-[50%] h-full lg:px-10 py-5 bg-white">
                        <h3 className="font-semibold text-[#4CE0B7] text-3xl mb-3">
                             Get in Touch With ShynWorks
                        </h3>
                        <p className="text-[#0077B6] text-sm">
                            Have a question or ready to book your next cleaning? 
                            We’re always here to help. Let’s make your space shine together.
                        </p>
                        <form action="" className="w-full h-auto flex flex-col py-5 mt-2">
                            <label htmlFor="" className="text-sm mb-1 text-[#0077B6]">Full name</label>
                            <input type="text" placeholder="Name"  className="h-11 px-2 outline-none border-1 border-[#4CE0B7] text-[#0077B6] text-sm hover:border-2 hover:rounded-sm transition-all mb-2"/>
                            <label htmlFor="" className="text-sm my-1 text-[#0077B6]">Email Address</label>
                            <input type="email" placeholder="Email"  className="h-11 px-2 outline-none border-1 border-[#4CE0B7] text-[#0077B6] text-sm hover:border-2 hover:rounded-sm transition-all mb-2"/>
                            <label htmlFor="" className="text-sm my-1 text-[#0077B6]">Subject</label>
                            <input type="text" placeholder="Subject"  className="h-11 px-2 outline-none border-1 border-[#4CE0B7] text-[#0077B6] text-sm hover:border-2 hover:rounded-sm transition-all mb-2"/>
                            <label htmlFor="" className="text-sm my-1 text-[#0077B6]">Message</label>
                            <textarea name="" id="" placeholder="Message" className="h-20 px-2 outline-none border-1 border-[#4CE0B7] text-[#0077B6] text-sm hover:border-2 hover:rounded-sm transition-all mb-2"></textarea>
                            <motion.button {...cardClicksEffects} {...cardHover} className=" outline-none py-3 cursor-pointer bg-[#4CE0B7] text-[#0077B6] font-semibold mt-1 hover:rounded-sm transition-all hover:text-white">Send Message</motion.button>
                        </form>
                    </div>
                </div>
            <Footer />
        </>
    );
}