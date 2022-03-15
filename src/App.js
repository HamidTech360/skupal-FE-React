import React from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import AboutUs from './pages/about-us/aboutUs';
import ContactUs from './pages/contact-us/contact';


import store from './store/store'

// import ScrollToTop from './components/scrollToUp/scroll';
function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
       
        <Routes>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
