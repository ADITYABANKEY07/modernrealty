import React, { useRef } from "react";
import heroimg from "../assets/heroimg.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
      gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

  let textHeroRef = useRef(null);
  let imgHeroRef = useRef(null);

  useGSAP(function () {
    const tl = gsap.timeline();

    tl.from(textHeroRef.current.children, {
      // Notice .children here
      rotateY: -90,
      opacity: 0,
      duration: .15,
      stagger: 0.3, // Now this will trigger for the H1, then the P
      ease: "power3.out",
    });

    tl.from(imgHeroRef.current, {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    });
  });
  return (
    <div>
              <div>
        {/* Content Layer: Adding relative and z-10 puts this ON TOP */}
        <div ref={textHeroRef} className="relative z-10 flex-1">
          <h1 className="text-white text-[10vw] leading-[0.9] uppercase">
            Modern <br />
            <span className="text-primary italic font-thin">Luxury</span> <br />
            Homes
          </h1>

          {/* Added 'relative' so 'z-10' actually works */}
          <p className="relative z-10 text-secondary w-1/2 mt-5  rounded-md">
            Our portfolio includes exquisite properties nestled in prime
            locations and prestigious neighborhoods renowned for their
            desirability.
          </p>
        </div>

        {/* Image Layer: 'absolute' and 'z-0' puts this BEHIND */}
        <img
          ref={imgHeroRef}
          className="absolute right-0 top-0 w-[60%] object-contain z-0"
          src={heroimg}
          alt="Luxury Home"
        />
      </div>
    </div>
  )
}

export default Hero