import React, {useState, useEffect} from 'react';
import Header from '../../components/header'
import BreadCumb from './components/breadcumbs';
import Details from './components/details';
import NewsLetter from './components/newsletter';
import Footer from '../../components/footer-light';

const AboutUs = () => {
    const [loader, setLoader] = useState(true)
    useEffect(()=>{
      setTimeout(()=>{
        setLoader(false)
      },1000)
    },[])
  
    if(loader){
      return(
        <div class="preloader"></div>
      )
    }

    return ( 
        <div className="aboutUs">
            <Header/>
            <BreadCumb/>
            <Details/>
            <NewsLetter/>
           <Footer/>
        </div>
     );
}
 
export default AboutUs;