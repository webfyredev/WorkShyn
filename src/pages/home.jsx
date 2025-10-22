import Navbar from "../components/navbar";
import HeroSlider from "../components/hero";
import BookingMenu from "../components/book";
import AboutUs from "../components/about_us";
import Services from "../components/services";
import Testimonial from "../components/testimonial";
import Blogs from "../components/blogs";
import Pricing from "../components/pricing";
import MidFoots from "../components/m_foot";
import Footer from "../components/footer";

export default function Home(){
    return(
        <>
            <Navbar />
            <HeroSlider />
            <BookingMenu />
            <AboutUs />
            <Services />
            <Testimonial />
            <Blogs />
            <Pricing />
            <MidFoots />
            <Footer />
        </>
    );
}