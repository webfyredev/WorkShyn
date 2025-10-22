import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PageHeader from "../components/pageHeader";
import Pricing from "../components/pricing";
import pricingImage from '../images/bgS2.webp'

export default function PricingPage(){
    return(
        <>
            <Navbar />
            <PageHeader
            image = {pricingImage} 
            title = 'Pricing'/>
            <Pricing />
            <Footer />
        </>
    );
}