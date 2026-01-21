import React, { useRef } from "react";
import Articles from "../components/Articles";
import img1 from "../assets/userartimg3.jpg";
import img2 from "../assets/userartimg2.jpg";
import img3 from "../assets/userartimg1.jpg";
import values1 from "../assets/values1.svg";
import values2 from "../assets/values2.svg";
import values3 from "../assets/values3.svg";
import values4 from "../assets/values4.svg";
import valuesimg from "../assets/valuesimg.jpg";
import parallax from "../assets/parallaximg2.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import story from "../assets/storyimg.jpg";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
} from "@remixicon/react";

const About = () => {
  const userImg = [
    { id: 1, img: img1, name: "Robert Parker" },
    { id: 2, img: img2, name: "Scarlett Gray" },
    { id: 3, img: img3, name: "Noah Cooper" },
  ];

  const textData = [
    { id: 1, stats: "300%", statsname: "Growth" },
    { id: 2, stats: "5k+", statsname: "Clients" },
    { id: 3, stats: "$100m", statsname: "Savings" },
    { id: 1, stats: "10k+", statsname: "Homes" },
  ];

  const valuesData = [
    { id: 1, title: "Excellence", img: values1 },
    { id: 2, title: "Integrity", img: values2 },
    { id: 3, title: "priority", img: values3 },
    { id: 4, title: "Expertise", img: values4 },
  ];

  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        yPercent: 30, // Moves the image down as you scroll
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom", // Starts when container enters bottom of screen
          end: "bottom top", // Ends when container leaves top of screen
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  useGSAP(() => {
    gsap.from(".aboutheading", {
      rotateX: 90,
      duration: 2,
    });

    gsap.from(".aboutpara", {
      rotateX: 90,
      duration: 2,
    });

    gsap.from(".leftside", {
      x: -200,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".leftside",
        start: "top 50%",
        end: "top -100%",
      },
    });

    gsap.from(".rightside", {
      x: 200,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".leftside",
        start: "top 50%",
        end: "top -100%",
      },
    });

    gsap.from(".stats", {
      rotateY: 320,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".stats",
        start: "top 50%",
        end: "top -100%",
      },
    });
    gsap.from(".statsp", {
      y: 120,
      delay: 0.15,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".stats",
        start: "top 50%",
        end: "top -100%",
      },
    });

    gsap.from(".leftvaluebox", {
      x: -200,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".leftvaluebox",
        start: "top 50%",
        end: "top -100%",
      },
    });

    gsap.from(".rightvaluebox", {
      x: 200,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".rightvaluebox",
        start: "top 50%",
        end: "top -100%",
      },
    });

    // Create a timeline for the reveal
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".reveal-container",
          start: "top 80%", // Starts when the container is near the bottom of viewport
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      })
      .to(".reveal-curtain", {
        backgroundColor: "#1d2025",
        yPercent: -200, // Moves the curtain up out of view
        duration: 1.5,
        ease: "power4.inOut",
      })
      .to(
        ".reveal-image",
        {
          scale: 1, // Scales image back to 100%
          duration: 1.5,
          ease: "power4.inOut",
        },
        "<"
      ); // Starts at the same time as the curtain movement

    gsap.from(".team-card", {
      y: -100, // Start 100px down
      x: -50, // Start 50px to the left
      opacity: 0,
      duration: 1,
      stagger: 0.2, // Cards appear one by one
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".team-card-container",
        start: "top 80%", // Starts when the container enters the viewport
      },
    });
    gsap.from(".team-div", {
      y: 100, // Start 100px down
      x: 100, // Start 50px to the left
      opacity: 0,
      duration: 1,
      stagger: 0.2, // Cards appear one by one
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".team-card-container",
        start: "top 80%", // Starts when the container enters the viewport
      },
    });

  });

  return (
    /* 1. FORCE THE WHOLE COMPONENT BACKGROUND TO BLACK */
    <div className="bg-dg text-white overflow-x-hidden">
      <div className="flex flex-col justify-center md:flex-row font-sans gap-10 md:gap-40 p-15 mb-10">
        <div className="aboutheading">
          <h1 className="text-nowrap text-[6vw] text-white leading-tight">
            GET TO KNOW
            <br />
            <span className="font-extralight italic text-primary">
              ABOUT US
            </span>
          </h1>
          <button className="bg-primary font-semibold px-8 py-4 mt-4">
            Learn More
          </button>
        </div>

        <div className="aboutpara overflow-hidden">
          <p className="mt-8 text-secondary max-w-xl">
            <span className="tracking-[0.45vw] uppercase text-sm font-semibold">
              MEET OUR AGENTS
            </span>{" "}
            <br />
            <span className="relative top-5">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Vestibulum convallis.
            </span>
          </p>
          <div className="flex mt-8 ml-5">
            {userImg.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="w-20 h-20 -ml-5 rounded-full border-4 border-dg overflow-hidden relative"
                >
                  <img
                    className="w-full h-full object-cover object-top scale-150 origin-top"
                    src={elem.img}
                    alt=""
                    srcset=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. UPDATED PARALLAX SECTION */}
      <div
        ref={container}
        className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black"
      >
        <img
          ref={imageRef}
          src={parallax}
          alt="Parallax"
          /* h-[150%] -> Image is much taller than container
             -top-[25%] -> Image starts shifted up so there is room to scroll down
          */
          className="absolute -top-[25%] left-0 w-full h-[150%] object-cover will-change-transform"
        />
      </div>

      {/* Story Area */}
      <div className="p-20">
        <div className="flex gap-30">
          <div className="leftside flex flex-col">
            <span className="tracking-[0.45vw] text-nowrap text-secondary  uppercase text-sm font-semibold">
              Exclusive Portfolio
            </span>
            <h1 className="propertyheading text-nowrap text-[6vw] text-white leading-tight">
              Welcome to <br />
              <span className="font-extralight italic text-primary">
                Modern Luxury
              </span>
            </h1>
            <p className="propertypara mt-8 max-w-xl">
              <br />
              <span className="relative text-xl text-secondary top-5">
                Our journey embodies perseverance, dedication, and a pledge to
                excellence. Established in 1998 by James Black, our agency
                originated as a modest venture driven by a fervor for
                exceptional service and the ambition to transform the real
                estate landscape for our clients. Presently, we stand as a
                highly acclaimed figure in the real estate sector, boasting a
                team of skilled professionals renowned for consistently
                achieving remarkable outcomes. Our evolution signifies a
                progression from modest roots to our current prominent position.
              </span>
            </p>
          </div>
          <div className="rightside">
            <img className="h-140" src={story} alt="" />
          </div>
        </div>
      </div>

      {/* Text Stats Data Area */}

      <div className="flex gap-25 justify-center">
        {textData.map((elem, index) => {
          return (
            <div key={index} className="">
              <h1 className="stats text-white text-5xl font-semibold">
                {elem.stats}
              </h1>
              <p className="statsp text-primary tracking-[0.55vw] mt-4">
                {elem.statsname}
              </p>
            </div>
          );
        })}
      </div>

      {/* values area */}

      <div>
        <div className="flex flex-col md:flex-row items-top justify-center font-sans gap-10 mt-20 md:gap-20 mb-10">
          <h1 className="propertyheading text-nowrap text-[6vw] text-white leading-tight">
            Our
            <span className="font-extralight italic text-primary">Values</span>
          </h1>
          <p className="propertypara mt-8 text-secondary max-w-xl">
            <span className="tracking-[0.45vw] uppercase text-sm font-semibold">
              What we believe
            </span>{" "}
            <br />
            <span className="relative top-5">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Vestibulum convallis.
            </span>
          </p>
        </div>

        <div className="max-w-5xl mt-25 mx-auto grid grid-cols-3 gap-8 items-center justify-items-center">
          {/* Left Column */}
          <div className="leftvaluebox flex flex-col gap-10 items-center w-full">
            {valuesData.slice(0, 2).map((elem, index) => (
              <div
                key={index}
                className="w-60 h-54 p-6 bg-dgl text-left shadow-sm"
              >
                <img src={elem.img} alt="" className="bg-dg p-3 mx-0 mb-4" />
                <h4 className="font-normal uppercase text-xs text-secondary tracking-[0.45vw]">
                  {elem.title}
                </h4>
                <p className="text-lg text-secondary">
                  Lorem ipsum dolor amet, consectetur.
                </p>
              </div>
            ))}
          </div>

          <div className="reveal-container relative overflow-hidden">
            {/* The Curtain - make sure bg matches your section background */}
            <div className="reveal-curtain absolute inset-0 bg-[#1d2025] z-10" />

            <img
              src={valuesimg}
              alt="Main Value"
              className="w-full h-auto block"
            />
          </div>

          {/* Right Column */}
          <div className="rightvaluebox flex flex-col gap-10 items-center w-full">
            {valuesData.slice(2, 4).map((elem, index) => (
              <div
                key={index}
                className="w-60 h-54 p-6 bg-dgl text-left shadow-sm"
              >
                <img src={elem.img} alt="" className="bg-dg p-3 mx-0 mb-4" />
                <h4 className="font-normal uppercase text-xs text-secondary tracking-[0.45vw]">
                  {elem.title}
                </h4>
                <p className="text-lg text-secondary">
                  Lorem ipsum dolor amet, consectetur.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Area */}

      {/* Add a container class here for the ScrollTrigger */}
      <div className="team-card-container flex flex-wrap justify-center gap-10 py-20">
        {userImg.map((elem, index) => {
          return (
            <div
              key={index}
              className="team-card relative flex flex-col items-center w-72" // Added 'team-card' class
            >
              {/* The Image */}
              <div className="z-10 -ml-20 w-64 h-72 overflow-hidden">
                <img
                  className="w-full h-full object-cover object-top"
                  src={elem.img}
                  alt={elem.name}
                />
              </div>

              {/* Dark Background Card */}
              <div className="team-div bg-dgl w-70 h-70 -mt-52 flex flex-col items-start relative">
                <div className="absolute right-4 top-2 flex flex-col gap-4 text-white text-sm">
                  <RiTwitterFill className="cursor-pointer hover:text-gray-400" />
                  <RiInstagramLine className="cursor-pointer hover:text-gray-400" />
                  <RiFacebookFill className="cursor-pointer hover:text-gray-400" />
                </div>

                <div className="text-left mt-55 ml-10">
                  <h3 className="text-white text-xl font-semibold">
                    {elem.name}
                  </h3>
                  <p className="text-primary text-xs tracking-[0.45vw] font-normal mt-1">
                    REALTOR
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Articles />
    </div>
  );
};

export default About;
