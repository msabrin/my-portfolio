import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from "./image/logo.png";

export default function Navbar() {
    return (
      <header className="nav bg-plum-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* <a className="title-font font-medium text-white mb-4 md:mb-0"> */}
            <Link to="/" className="ml-3 text-xl">
              <img className="logo" alt="logo" src={logo}/>
            </Link>
          {/* </a> */}
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <Link className="nab mr-5" to='/'>About</Link>
            <Link className="nab mr-5" to='/whychoosem'>Why Choose Me</Link>
            <Link className="nab mr-5" to='/contact'>contact</Link>

          </nav>
          <Link
            to='/contact'
            className="hm inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </header>
    );
  }


//   breakpoint (768px)