import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
  const logoRef = useRef(null);
  const linkRef = useRef(null);
  useGSAP(function () {
    gsap.from(logoRef.current, {
      opacity: 0,
      duration: 1,
      y: -50,
      ease: "power3.out",
    });

    gsap.from(linkRef.current.children, {
      opacity: 0,
      duration: 1,
      y: -50,
      stagger: 0.2,
      ease: "power3.out",
    });
  });
  return (
    <div className="flex items-center justify-between p-5">
      <img
        ref={logoRef}
        src="https://cdn.prod.website-files.com/654390ee7d74736cd6076aaa/65477c0624c25dfd5989b756_ModernRealtyLogo2.svg"
        alt="logo"
      />
      <div ref={linkRef} className="flex gap-5 navlink">
        <Link className="font-light font-sans text-xl text-white" to="/">
          Home
        </Link>
        <Link className="font-light font-sans text-xl text-white" to="/about">
          About
        </Link>
        <Link className="font-light font-sans text-xl text-white" to="/listing">
          Listing
        </Link>
        <Link className="font-light font-sans text-xl text-white" to="/blog">
          Blog
        </Link>
        <Link className="font-light font-sans text-xl text-white" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
