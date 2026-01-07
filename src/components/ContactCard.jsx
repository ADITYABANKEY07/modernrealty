import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import img from "../assets/gtcimg.jpg";

gsap.registerPlugin(ScrollTrigger);

const ContactCard = () => {
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(textRef.current.children, {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
    }).from(
      imgRef.current,
      {
        x: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      },
      "-=0.6"
    );
  }, []);
  return (
    <div ref={cardRef} className="bg-dgl grid grid-cols-2 -mt-20 items-center max-w-7xl ">
      <div ref={textRef} className="flex flex-col items-center gap-5 text-center">
          <p className="uppercase text-secondary tracking-[0.4em] text-sm mb-3">
            Get In Touch
          </p>
        <h1 className="articlepara text-white text-6xl lg:text-7xl font-light">
          Your Satisfaction <br />{" "}
          <span className="italic text-primary">‍Is Paramount</span>
        </h1>
        <p className="text-secondary text-center tracking-wider ">
          With an unwavering commitment to excellence, Our <br /> team of experienced
          professionals is ready to provide <br /> personalized assistance and
          guidance.
        </p>
        <button className="bg-primary px-4 py-3 mt-4 w-35 font-medium">GET IN TOUCH</button>
      </div>
      <div>
        <img     ref={imgRef} src={img} alt="" />
      </div>
    </div>
  );
};

export default ContactCard;
