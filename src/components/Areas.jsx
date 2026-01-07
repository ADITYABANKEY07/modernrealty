import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import img1 from "../assets/areasimg1.jpg";
import img2 from "../assets/areasimg2.jpg";
import img3 from "../assets/areasimg3.jpg";
import img4 from "../assets/areasimg4.jpg";
import img5 from "../assets/areasimg5.jpg";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const locations = [
  { name: "LONDON", imageUrl: img1 },
  { name: "NEW YORK", imageUrl: img2 },
  { name: "LOS ANGELES", imageUrl: img3 },
  { name: "TOKYO", imageUrl: img4 },
  { name: "PARIS", imageUrl: img5 },
];

const Areas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const isAnimating = useRef(false);

  const areasRef = useRef(null);
  const container = useRef(null); // Scope for all animations
  gsap.registerPlugin(ScrollTrigger);

  // Handle Slide Navigation
  const slide = (direction) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    let nextIndex;
    if (direction === "next") {
      // Jump to first if at last slide
      nextIndex = currentIndex === locations.length - 1 ? 0 : currentIndex + 1;
    } else {
      // Jump to last if at first slide
      nextIndex = currentIndex === 0 ? locations.length - 1 : currentIndex - 1;
    }

    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    // GSAP Animation logic
    const slides = sliderRef.current.children;

    gsap.to(sliderRef.current, {
      xPercent: -currentIndex * (100 / locations.length),
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [currentIndex]);

  useGSAP(
    () => {
      // 1. Heading Animation
      gsap.from(".areasleft", {
        x: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: ".areasleft",
          start: "top 80%", // Trigger when heading is 80% from top of viewport
        },
      });

      // 2. Paragraph Animation
      gsap.from(".areasright", {
        rotateY: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: ".areasright",
          start: "top 85%",
        },
      });

      // 3. Grid Items Animation (Staggered)
      // We target the children of propertyRef for a better visual effect
      gsap.from(areasRef.current.children, {
        rotateX: 90,
        opacity: 0,
        duration: 1,
        stagger: 0.2, // Items pop in one after another
        scrollTrigger: {
          trigger: areasRef.current,
          start: "top 70%", // Starts when the top of the grid hits 70% of viewport
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className=" py-20 relative overflow-hidden"
    >
      <div className="flex justify-around p-5">
      <div>
                <span className="tracking-[0.45vw] ml-3 text-secondary uppercase text-sm font-semibold">
          destinations
        </span>
        <h1 className="areasleft text-nowrap text-[6vw] text-white leading-tight">
          Our
          <span className="font-extralight italic text-primary">
            Areas
          </span>
        </h1>
              <div className="flex gap-110 items-center">
                <p className="areasright mt-8 text-secondary max-w-xl">
          <span className="relative top-5">
            Embark on a captivating journey through the most desirable locations
            that define the pinnacle of luxurious living.
          </span>
        </p>
        <p className="areasright mt-12 text-secondary">See all Locations</p>
      </div>
      </div>
      </div>
      <div className="mt-5">
              {/* Custom Arrows */}
      <div className="z-50 absolute w-full max-w-7xl left-1/2 -translate-x-1/2 flex justify-start ml-15 top-85 pr-10 text-white">
        <button
          onClick={() => slide("prev")}
          className="cursor-pointer hover:text-gray-400 transition-colors"
        >
          <RiArrowDropLeftLine size={70} />
        </button>
        <button
          onClick={() => slide("next")}
          className=" -ml-8 cursor-pointer hover:text-gray-400 transition-colors"
        >
          <RiArrowDropRightLine size={70} />
        </button>
      </div>

      {/* Slider Container */}
      <div ref={areasRef} className="max-w-7xl mx-auto px-15 overflow-hidden">
        <div ref={sliderRef} className="flex gap-8">
          {locations.map((item, i) => (
            <div
              key={i}
              className="min-w-[320px] md:min-w-[380px] lg:min-w-[350px]"
            >
              <div className="area-card relative group overflow-hidden ">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all" />
                <h3 className="absolute top-5 right-6 text-right text-white text-xl tracking-widest">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Pagination Dots */}
      <div className="flex justify-start ml-40 z-50 absolute -mt-10 gap-2">
        {locations.map((_, i) => (
          <div
            key={i}
            className={`h-4 transition-all duration-300 ${
              currentIndex === i ? "w-4 h-4 bg-white" : "w-4 bg-gray-600"
            }`}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Areas;
