import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import property1 from "../assets/properties1.jpg";
import property2 from "../assets/properties2.jpg";
import property3 from "../assets/properties3.jpg";
import property4 from "../assets/properties4.jpg";

const PropertyItem = ({ img, text }) => {
  const overlayRef = useRef(null);
  const uptextRef = useRef(null);
  const lineRef = useRef(null);
  const { contextSafe } = useGSAP();

  const onMouseEnter = contextSafe(() => {
    // 1. Expand Circle
    gsap.to(overlayRef.current, {
      clipPath: "circle(150% at 100% 0%)",
      duration: 0.6,
      ease: "expo.out",
    });

    // 2. Slide text up
    gsap.fromTo(
      [lineRef.current, uptextRef.current],
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  });

  const onMouseLeave = contextSafe(() => {
    gsap.to(overlayRef.current, {
      clipPath: "circle(0% at 100% 0%)",
      duration: 0.4,
    });
    gsap.to([uptextRef.current, lineRef.current], { opacity: 0, y: 40 });
  });

  return (
    /* MAIN WRAPPER: Vertical stack for Image area + Text */
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative w-full flex flex-col items-center gap-6 group cursor-pointer mb-10"
    >
      {/* IMAGE AREA: This container controls exactly where the overlay stays */}
      <div className="relative w-full md:w-[60%] h-64 overflow-hidden rounded-lg">
        {/* The Image */}
        <img
          src={img}
          alt={text}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* THE OVERLAY: Fixed to the image dimensions */}
        <div
          ref={overlayRef}
          style={{ clipPath: "circle(0% at 100% 0%)" }}
          className="absolute inset-0 bg-primary flex items-center justify-center gap-4 p-6 z-20"
        >
          {/* Decorative Lines */}
          <div ref={lineRef} className="flex flex-shrink-0 opacity-0">
            <span className="w-20 h-[2px] bg-black"></span>
            <span className="w-20 h-[2px] -ml-8 rotate-90 bg-black"></span>
          </div>

          <div className="overflow-hidden -ml-8">
            <p
              ref={uptextRef}
              className="text-black text-xl font-semibold tracking-tight opacity-0 max-w-[300px]"
            >
              Properties to ensure our clients are making informed decisions and
              paying a reasonable price.
            </p>
          </div>
        </div>
      </div>

      {/* TEXT BELOW IMAGE: Always visible */}
      <h3 className="text-white text-3xl font-medium tracking-tighter capitalize">
        {text}
      </h3>
    </div>
  );
};

const Properties = () => {
  const propertiesimg = [
    { img: property1, text: "Consultation" },
    { img: property2, text: "Property Tours" },
    { img: property3, text: "Evaluation" },
    { img: property4, text: "Acquisitions" },
  ];

  return (
    <div className="mt-20 px-10 bg-dg min-h-screen">
      <div className="flex flex-col md:flex-row items-top font-sans gap-10 md:gap-20 mb-10">
        <h1 className="mainheading text-nowrap text-[6vw] text-white leading-tight">
          Welcome to{" "}
          <span className="font-extralight italic text-primary">Modern</span>{" "}
          <br />
          <span className="font-extralight italic text-primary">Luxury</span>
        </h1>
        <p className="mainpara mt-8 text-secondary max-w-xl">
          <span className="tracking-[0.45vw] uppercase text-sm font-semibold">
            BEAUTIFUL PROPERTiES
          </span>{" "}
          <br />
          <span className="relative top-5">
            Experience the epitome of luxury living with our exceptional
            collection that offer unparalleled comfort.
          </span>
        </p>
      </div>

      {/* Grid Layout for the items */}
      <div className="grid grid-cols-1 md:grid-rows- gap-6 pb-20">
        {propertiesimg.map((elem, idx) => (
          <PropertyItem key={idx} {...elem} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
