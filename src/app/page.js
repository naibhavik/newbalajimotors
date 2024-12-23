import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './componants/navbar'

import {FiSearch, FiClock, FiMapPin} from "./assets/icons/vander"
// import AboutUs from './componants/aboutUs'
// import Categories from './componants/categories'
// import { jobData } from './data/data'
// import AboutTwo from './componants/aboutTwo'
import Companies from './componants/companies'
// import Blog from './componants/blog'
import Footer from './componants/footer'
import ScrollTop from './componants/scrollTop'
import ServicesTwo from './componants/sercicesTwo'

export default function Home() {
  return (
    <>
    <Navbar/>
          <section className="bg-half-260 d-table w-100" style={{ backgroundImage: 'url("/images/hero/motors.jpg")' }}>
              <div className="bg-overlay bg-primary-gradient-overlay"></div>
              <div className="container">
                  <div className="row mt-5 justify-content-center">
                      <div className="col-lg-10">
                          <div className="title-heading text-center">
                              <h1 className="heading text-white fw-bold">New Balaji Motors</h1>
                              <p className="para-desc text-white-50 mx-auto mb-0">Your Trusted Auto Repair Shop: Quality Service, Every Time

                                  At our auto repair shop, we specialize in keeping your vehicle in peak condition with expert care and reliable solutions. Whether you need routine maintenance or major repairs, our experienced mechanics are here to ensure your car runs smoothly and safely.</p>


                          </div>
                      </div>
                  </div>
              </div>
          </section>


    <section className="section">
               <div className="container">
                   <div className="row justify-content-center mb-4 pb-2">
                       <div className="col-12">
                           <div className="section-title text-center">
                               <h4 className="title mb-3">Trending Services</h4>
                               <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                           </div>
                       </div>
                   </div>
   
                   <ServicesTwo/>
               </div>
               {/* <AboutUs containerClass="container mt-100 mt-60"/> */}
   
   
               <div className="container mt-100 mt-60">
                   <Companies/>
               </div>
   
           </section>
   
           <Footer/>
           <ScrollTop/>

    </>
  )
}
