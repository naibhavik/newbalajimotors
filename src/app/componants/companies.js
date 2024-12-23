'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { jobData } from "../data/data";

import ModalVideo from 'react-modal-video';
// import '../../../node_modules/react-modal-video/scss/modal-video.scss';

export default function Companies(){
    let [isOpen, setOpen] = useState(false);
    return(
        <div className="row g-4 align-items-center">
            <div className="col-lg-6 col-md-6 mb-5  order-md-2 order-1">
                
            </div>

            <div className="col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-md-1 order-2">
                <div className="section-title mb-4 me-lg-5">
                    <h4 className="title mb-3">Find Best Companies.</h4>
                    <p className="text-muted para-desc mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>

                <div className="row g-4 mt-0">
                    <style jsx>{`
        .img-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .custom-img {
          width: 100%; /* Full width of the container */
          max-width: 800px; /* Optional max width */
          height: auto; /* Maintain aspect ratio */
        }
      `}</style>
                    <div className="row g-4 mt-0">
                        {jobData.map((item, index) => {
                            return (
                                <div className="col-12" key={index}> {/* Full-width column */}
                                    <div className="img-container">
                                        <Image
                                            src={item.image}
                                            alt={item.title || "Job Image"}
                                            className="custom-img rounded shadow"
                                            width={800} /* Optional, to improve layout consistency */
                                            height={400} /* Optional, adjusts proportionally */
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


                
            </div>
        </div>
    )
}