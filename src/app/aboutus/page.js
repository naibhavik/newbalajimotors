"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import ScrollTop from "../componants/scrollTop";

import { useSubmit } from "@formspree/react";
import { useForm } from "@formspree/react";

import { blogData } from "../data/data";

import { FiClock, FiCalendar } from "../assets/icons/vander"

export default function Blogs() {
    
    return (
        <>
            <style jsx>{`
        .full-bg-section {
          background-image: url("/images/hero/bg8.jpg");
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
        .contact-us-section {
                    padding: 3rem 1rem;
                    background-color: #f8f9fa;
                }
                .contact-form-container {
                    max-width: 800px;
                    margin: 0 auto;
                    background: #fff;
                    border-radius: 8px;
                    padding: 2rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                }
                .contact-form-container h1 {
                    text-align: center;
                    margin-bottom: 1.5rem;
                    font-size: 2rem;
                    color: #007BFF;
                }
                .contact-form label {
                    font-weight: bold;
                    color: #555;
                    margin-bottom: 0.5rem;
                    display: block;
                }
                .contact-form input,
                .contact-form textarea {
                    width: 100%;
                    padding: 0.75rem;
                    margin-bottom: 1.5rem;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 1rem;
                }
                .contact-form button {
                    display: block;
                    width: 100%;
                    padding: 0.75rem;
                    background-color: #007BFF;
                    color: #fff;
                    font-size: 1.25rem;
                    font-weight: bold;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .contact-form button:hover {
                    background-color: #0056b3;
                }
                .contact-info {
                    text-align: center;
                    margin-bottom: 2rem;
                }
                .contact-info p {
                    font-size: 1rem;
                    color: #555;
                    margin: 0.5rem 0;
                }
                .contact-info a {
                    color: #007BFF;
                    text-decoration: none;
                }
                .contact-info a:hover {
                    text-decoration: underline;
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
            <section className="contact-us-section">
                <div className="container">

                    <div className="contact-form-container">
                        <h1>Book an Appointment</h1>
                        <form className="contact-form" action="https://formsubmit.co/e96c4fba2e183e4336d652e7ed30e406" method="POST">
                            <div>
                                <label htmlFor="frm-first">First Name</label>
                                <input
                                    id="frm-first"
                                    type="text"
                                    name="first"
                                    placeholder="Enter your first name"
                                    autoComplete="given-name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="frm-last">Last Name</label>
                                <input
                                    id="frm-last"
                                    type="text"
                                    name="last"
                                    placeholder="Enter your last name"
                                    autoComplete="family-name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="frm-email">Email</label>
                                <input
                                    id="frm-email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    autoComplete="email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="frm-phone">Phone</label>
                                <input
                                    id="frm-phone"
                                    type="text"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    autoComplete="tel"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="frm-phone">Car Number Plate</label>
                                <input
                                    id="frm-phone"
                                    type="text"
                                    name="car Number Plate"
                                    placeholder="Enter your car number plate"
                                    autoComplete="tel"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="frm-message">Message</label>
                                <textarea
                                    id="frm-message"
                                    rows="6"
                                    name="message"
                                    placeholder="Enter your message"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

           
            <Footer />
            <ScrollTop />
        </>
    )
}