import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PageHeader from "../components/pageHeader";
import serviceImg from '../images/bgS5.webp'
import Service from "../components/services";
import MidFoots from "../components/m_foot";
import Pricing from "../components/pricing";
import Testimonial from "../components/testimonial";

export default function Services(){
    return(
        <>
            <Navbar />
            <PageHeader 
            image ={serviceImg}
            title = "Services" />
            <Service />
            <Pricing />
            <Testimonial />
            <MidFoots />
            <Footer />
        </>
    );
}