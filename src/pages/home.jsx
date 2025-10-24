import Navbar from "../components/navbar";
import HeroSlider from "../components/hero";
import BookingMenu from "../components/booking";
import AboutUs from "../components/about_us";
import Service from "../components/services";
import Testimonial from "../components/testimonial";
import Blogs from "../components/blogs";
import Pricing from "../components/pricing";
import MidFoots from "../components/m_foot";
import Footer from "../components/footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home(){
    const location = useLocation();
    useEffect(() => {
        if(location.state?.scrollTo === 'booking'){
            const section = document.getElementById('booking');
            setTimeout(() => {
                section?.scrollIntoView({behavior : "smooth"});
            },300);
        }
    }, [location])
    return(
        <>
            <Navbar />
            <HeroSlider />
            <AboutUs />
            <Service />
            <BookingMenu />
            <Testimonial />
            <Blogs />
            <Pricing />
            <MidFoots />
            <Footer />
        </>
    );
}