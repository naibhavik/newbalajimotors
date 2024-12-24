import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FiShoppingCart, FiDribbble, FiLinkedin, FiFacebook, FiInstagram, FiTwitter,FiBookmark} from '../assets/icons/vander'

export default function Footer({top}){
    return(
        <footer className="bg-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="py-5 footer-bar">
                            <div className="row align-items-center">
                                <div className="col-sm-3">
                                    <div className="text-center text-sm-start">
                                        {/* <Link href=""><Image src='/images/logo-light.png' width={120} height={18} alt=""/></Link> */}
                                    </div>
                                </div>
        
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-4 footer-bar">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="text-sm-start">
                                <p className="mb-0 fw-medium">© {new Date().getFullYear()} @newbalajimotors Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link href="http://wa.me/+916352360058" target="_blank" className="text-reset">Nai Bhavik</Link>.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}