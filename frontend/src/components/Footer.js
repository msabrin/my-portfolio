// Footer.js
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaReact } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const [backgroundColor, setBackgroundColor] = useState('');
  
    useEffect(() => {
      const currentPath = location.pathname;
  
      // Set different background colors based on the current route
      if (currentPath === '/contact') {
        setBackgroundColor('lightblue');
      } else if (currentPath === '/hero') {
        setBackgroundColor('lightgreen');
      } else if (currentPath === '/whychooceme') {
        setBackgroundColor('lightpink');
      } else if (currentPath === '/project') {
        setBackgroundColor('lightyellow');
      } else {
        // Default background color for other routes
        setBackgroundColor('lightgray');
      }
    }, [location]);
  


  return (
    <footer style={{ backgroundColor }}  className="text-white p-4 text-center">
      <p>
        Mirza Sabrin &copy; {new Date().getFullYear()} | Web Developer & National Skater
      </p>
      <div className="flex justify-center items-center mt-2">
        Connect with me on:
        <a href="your-github-link" className="ml-2" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-gray-400" />
        </a>
        <a href="your-linkedin-link" className="ml-2" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-gray-400" />
        </a>
        <a href="your-twitter-link" className="ml-2" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white hover:text-gray-400" />
        </a>
        <a href="your-facebook-link" className="ml-2" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-white hover:text-gray-400" />
        </a>
        <a href="your-instagram-link" className="ml-2" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white hover:text-gray-400" />
        </a>
        <a href="your-coursera-link" className="ml-2" target="_blank" rel="noopener noreferrer">
          <FaReact className="text-white hover:text-gray-400" />
          {/* Replace with the Coursera icon */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
