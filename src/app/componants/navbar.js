'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ navClass }) {
    const [isOpen, setMenu] = useState(false);
    const [scroll, setScroll] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            // Add or remove sticky class based on scroll position
            setScroll(window.scrollY > 50);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const toggleMenu = () => {
        setMenu((prev) => !prev);
    };

    return (
        <header
            id="topnav"
            className={`${scroll ? 'nav-sticky' : ''} ${navClass}`}
        >
            <div className="container">
                {/* Mobile menu toggle */}
                <div className="menu-extras">
                    <div className="menu-item">
                        <button className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Navigation */}
                <div id="navigation" className={isOpen ? 'open' : ''}>
                    <ul className="navigation-menu nav-right nav-light">
                        <li
                            className={`${['/'].includes(pathname) ? 'active' : ''
                                } has-submenu`}
                        >
                            <Link href="/">Home</Link>
                        </li>
                        <li className={`${pathname === '/services' ? 'active' : ''}`}>
                            <Link href="/services">Services</Link>
                        </li>
                        <li className={pathname === '/aboutus' ? 'active' : ''}>
                <Link href="/BookanAppointment">Book an Appointment</Link>
                        </li>
                        <li className={pathname === '/contactus' ? 'active' : ''}>
                            <Link href="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Menu Styling */}
            <style jsx>{`
        #navigation {
          display: ${isOpen ? 'block' : 'none'};
          background: non;
          position: absolute;
          top: 0px;
          left: 0;
          width: 100%;
          {/* z-index: 999; */}
        }

        .navbar-toggle {
          display: block;
          cursor: pointer;
          background: transparent;
          border: none;
        }

        .lines span {
          display: block;
          height: 2px;
          width: 20px;
          background: black;
          margin: 4px 0;
        }

        @media (min-width: 768px) {
          .navbar-toggle {
            display: none;
          }

          #navigation {
            display: flex !important;
            position: static;
          }
        }

        .nav-sticky {
          position: fixed;
          top: 0;
          width: 100%;
          background: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }

        .navigation-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 768px) {
          .navigation-menu {
            flex-direction: row;
          }
        }

        .navigation-menu li {
          margin: 0;
          padding: 10px 20px;
        }

        .navigation-menu li.active a {
          color: #007bff;
        }

        .navigation-menu a {
          text-decoration: none;
          color: black;
        }
      `}</style>
        </header>
    );
}
