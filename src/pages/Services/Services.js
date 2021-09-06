import React from 'react'
import Footer from '../../components/Footer/Footer';
import InfoSection from "../../components/InfoSection/InfoSection";
import Pricing from '../../components/Pricing/Pricing';
import Subscribe from '../../components/Subscribe/Subscribe';
import { homeObjOne} from "./Data";


const Services = () => {
    return (
        <>
           <InfoSection {...homeObjOne} />
           <Pricing />
           <Subscribe />
           <Footer /> 
        </>
    )
}

export default Services
