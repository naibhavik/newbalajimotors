
"use client"
import Link from "next/link";
import Image from "next/image";

import { contactData } from "../data/data";

import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

export default function ContactUs(){
    return(
        <>
            <style jsx>{`
        .full-bg-section {
          background-image: url("/images/hero/bg6.jpg");
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
        <Navbar navClass="defaultscroll sticky" navLight={true}/>

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
            <div className="container mt-5 contact-info">
                <h5>Contact Us</h5>
                <div className="contact-details">
                    <div>
                        <h3>Patel PankajBhai</h3>
                        <p>
                            <strong>Mobile Number:</strong>
                            <a href="tel:+1234567891">9898995661</a>
                        </p>
                    </div>
                    <div>
                        <h3>Nai PareshBhai</h3>
                        <p>
                            <strong>Mobile Number:</strong>
                            <a href="tel:+1234567892">9904818343</a>
                        </p>
                    </div>
                </div>

                <p>
                    <strong>Email:</strong>
                    <a href="mailto:info@jobnova.com">newbalajimototrs@gmail.com</a>
                </p>
            </div>

            <style jsx>{`
    .contact-info {
        background-color: #f9f9f9; /* Soft white background */
        padding: 30px;
        border-radius: 10px; /* Smooth rounded corners */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
        border: 2px solid #00796b; /* Professional green border */
    }
    .contact-info h5 {
        font-size: 26px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #004d40; /* Darker green for the heading */
    }
    .contact-details p {
        font-size: 18px;
        margin: 10px 0;
        color: #333; /* Neutral text color for readability */
    }
    .contact-info a {
        color: #00796b; /* Consistent green for links */
        text-decoration: none;
        font-weight: bold;
    }
    .contact-info a:hover {
        text-decoration: underline; /* Subtle interaction for links */
        color: #004d40; /* Slightly darker green on hover */
    }
`}</style>



        <section className="section pb-0">
           

            <div className="container-fluid ">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="card map border-0">
                            <div className="card-body p-0">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.8671276246987!2d72.40819237534917!3d24.176392278382203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cebc39cf60cef%3A0xcce6253062b59b6f!2sNew%20Balaji%20Motors!5e0!3m2!1sen!2sin!4v1734701061892!5m2!1sen!2sin"  title="jobnova" style={{border:'0'}} allowFullScreen></iframe>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}