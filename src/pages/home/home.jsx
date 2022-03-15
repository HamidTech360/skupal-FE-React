import React, {useState, useEffect} from 'react';
import AppHeader from '../../components/header';
import Banner from './components/banner';
import About from './components/about'
import JobCategories from './components/job-categories';
import DownloadApp from './components/download-app';
import Reviews from './components/review';
import NewsLetter from './components/newsletter';
import Footer from '../../components/footer';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.css';

import '../../styles/styles.css'
import './css/home.css'


const Home = () => {


 
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
        <div className="home">
         
           <AppHeader/>
           <Banner/>
           <About/>
           <JobCategories/>
           <DownloadApp/>
           {/* <Reviews/> */}
           <NewsLetter/>
           <Footer/>
        </div>
     );
}
 
export default Home;