import React, { useRef } from "react";
import {
  RiBuildingLine,
  RiHome4Line, // A great "Luxury House" alternative
  RiThumbUpLine,
  RiUserSmileLine,
} from "@remixicon/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Services = () => {
  gsap.registerPlugin(ScrollTrigger) 
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".service-card", {
        y: 50,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-card",
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-25 p-10"
    >
      <div className="service-card flex gap-5 items-center justify-center text-white">
        <RiBuildingLine size={40} className="text-primary" />
        <p className="mt-2 font-extralight text-secondary tracking-widest ">Elegant <br /> Apartments</p>
      </div>
      <div className="service-card flex gap-5 items-center justify-center text-white">
        <RiHome4Line size={40} className="text-primary" />
        <p className="mt-2 font-extralight text-secondary tracking-widest ">Luxury <br /> Houses</p>
      </div>
      <div className="service-card flex gap-5 items-center justify-center text-white">
        <RiThumbUpLine size={40} className="text-primary" />
        <p className="mt-2 font-extralight text-secondary tracking-widest ">Satisfied <br /> Guests</p>
      </div>
      <div className="service-card flex gap-5 items-center justify-center text-white">
        <RiUserSmileLine size={40} className="text-primary" />
        <p className="mt-2 font-extralight text-secondary tracking-widest ">Happy <br /> Owners</p>
      </div>
    </div>
  );
};

export default Services;
