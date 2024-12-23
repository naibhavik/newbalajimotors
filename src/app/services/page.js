"use client"
import React from "react";
import Link from "next/link";

import Navbar from "../componants/navbar";
// import Faq from "../componants/faq";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

import { servicesData } from "../data/data";

export default function Services() {
    return (
        <>
            <style jsx>{`
        .full-bg-section {
          background-image: url("/images/hero/bg.jpg");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 100vw;
          height: 70vh;
          position: relative;
        }
        .bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5); /* Example overlay */
        }
      `}</style>

            <Navbar navClass="defaultscroll sticky" navLight={true} />

            <section className="full-bg-section">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row mt-0 justify-content-center">
                        <div className="col-12">
                            
                        </div>
                    </div>


                </div>
            </section>
            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="row g-4">
                        {servicesData.map((item, index) => {
                            let Icon = item.icon;
                            return (
                                <div
                                    className="col-lg-3 col-md-4 col-sm-6 col-12 mt-0 pt-2"
                                    key={index}
                                >
                                    <div className="position-relative features text-center p-4 rounded shadow bg-white">
                                        <div className="feature-icon bg-soft-primary rounded shadow mx-auto position-relative overflow-hidden d-flex justify-content-center align-items-center">
                                            <Icon className="fea icon-ex-md" />
                                        </div>

                                        <div className="mt-4">
                                            <Link href="" className="title h5 text-dark">
                                                {item.title}
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

               
            </section>
            <Footer />
            <ScrollTop />
        </>
    );
}
