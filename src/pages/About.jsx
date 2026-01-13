import React, { useRef } from "react";
import Articles from "../components/Articles"
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
import { RiFacebookBoxFill, RiFacebookFill, RiInstagramLine, RiTwitterFill } from "@remixicon/react";

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

  return (
    /* 1. FORCE THE WHOLE COMPONENT BACKGROUND TO BLACK */
    <div className="bg-dg text-white overflow-x-hidden">
      <div className="flex flex-col justify-center md:flex-row font-sans gap-10 md:gap-40 p-15 mb-10">
        <div>
          <h1 className="aboutheading text-nowrap text-[6vw] text-white leading-tight">
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

        <div className="overflow-hidden">
          <p className="aboutpara mt-8 text-secondary max-w-xl">
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
              <h1 className="text-white text-5xl font-semibold">
                {elem.stats}
              </h1>
              <p className="text-primary tracking-[0.55vw] mt-4">
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
              Experience the epitome of luxury living with our exceptional
              collection that offer unparalleled comfort.
            </span>
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 items-center justify-items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-10 items-center w-full">
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

          {/* Center Image */}
          <div className="">
            <img
              src={valuesimg}
              alt="Main Value"
              className="max-w-full h-full"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10 items-center w-full">
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

      <div className="mt-40">
        <div className="flex flex-col items-center justify-center font-sans gap-10 md:gap-0 mb-10">
          <span className="tracking-[0.45vw] text-secondary uppercase text-sm font-semibold">
            who we are
          </span>{" "}
          <h1 className="propertyheading capitalize text-nowrap text-[6vw] mt-3 text-white leading-tight">
            meet our
            <span className="font-extralight italic text-primary ml-5">
              Team
            </span>
          </h1>
          <p className="propertypara mt-3 text-secondary text-center max-w-xl">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Vestibulum convallis.
          </p>
        </div>

           {/* Team card */}

<div className="flex flex-wrap justify-center gap-10 py-20">
      {userImg.map((elem, index) => {
        return (
          <div key={index} className="relative flex flex-col items-center w-72">
            
            {/* The Image - Positioned slightly higher */}
            <div className="z-10 -ml-20 w-64 h-72 overflow-hidden">
              <img 
                className="w-full h-full object-cover object-top" 
                src={elem.img} 
                alt={elem.name} 
              />
            </div>

            {/* Dark Background Card */}
            <div className="bg-dgl w-70 h-70 -mt-52 flex flex-col items-start relative">
              
              {/* Social Icons Sidebar */}
              <div className="absolute right-4 top-2 flex flex-col gap-4 text-white text-sm">
                <RiTwitterFill className="cursor-pointer hover:text-gray-400" />
                <RiInstagramLine className="cursor-pointer hover:text-gray-400" />
                <RiFacebookFill className="cursor-pointer hover:text-gray-400" />
              </div>

              {/* Text Info */}
              <div className="text-left mt-55 ml-10">
                <h3 className="text-white text-xl font-semibold">{elem.name}</h3>
                <p className="text-primary text-xs tracking-[0.45vw] font-normal mt-1">
                  REALTOR
                </p>
              </div>
            </div>
            
          </div>
        );
      })}
    </div>

      </div>
      <Articles/>
    </div>
  );
};

export default About;
