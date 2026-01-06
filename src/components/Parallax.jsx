import { useRef } from 'react';
import parallax from "../assets/parallaximg.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Parallax = () => {
  const container = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(imageRef.current, 
      { 
        yPercent: -15 // Reduced slightly for full-screen stability
      }, 
      {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );
  }, { scope: container });

  return (
    /* 1. Added w-screen and h-screen to ensure it fills the viewport */
    /* 2. Used left-0 to reset any potential parent padding issues */
    <div 
      ref={container} 
      className="relative w-screen h-screen overflow-hidden bg-black mt-20"
    >
      <img 
        ref={imageRef}
        src={parallax} 
        alt="Full Screen Parallax" 
        /* 3. Increased scale to ensure no white gaps appear during fast scrolling */
        className="absolute top-0 left-0 w-full h-[120%] object-cover scale-125"
      />
    </div>
  );
}

export default Parallax;