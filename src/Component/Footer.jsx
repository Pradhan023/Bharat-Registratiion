import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    {/* Remove the container if you want to extend the Footer to full width. */}
        <div className="">
        {/* Footer */}
        <footer className="text-center text-white" style={{backgroundColor: '#3f51b5'}}>
            {/* Grid container */}
            <div className="container">
            
            {/* Section: Text */}
            <section className="mb-5">
                <div className="row d-flex justify-content-center">
                <div className="col-lg-8 py-4">
                    <p>
                    Registration Form.  Build in MERN Technology
                    </p>
                </div>
                </div>
            </section>
            {/* Section: Text */}
            {/* Section: Social */}
            <section className="flex items-center justify-center text-2xl mb-5">
                <a href='https://www.linkedin.com/in/anish-pradhan-347894214/' target='_blank' className="text-white me-4">
                <CiLinkedin/>
                </a>
                <a  className="text-white me-4">
                <FaInstagram/>
                </a>
                <a href='https://github.com/Pradhan023' target='_blank'  className="text-white me-4">
                <FaGithub/>
                </a>
            </section>
            {/* Section: Social */}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2024 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">Anish Pradhan</a>
            </div>
            {/* Copyright */}
        </footer>
        {/* Footer */}
        </div>

    </>
  )
}

export default Footer