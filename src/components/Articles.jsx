import React, { useEffect, useRef } from "react";
import userartimg1 from "../assets/userartimg1.jpg";
import userartimg2 from "../assets/userartimg2.jpg";
import articleimg1 from "../assets/articleimg1.jpg";
import articleimg2 from "../assets/articleimg2.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";


const articlesdata = [
  {
    id: 1,
    btnType: "Insights",
    userImg: userartimg1,
    articleimg: articleimg1,
    name: "Noah Cooper",
    date: "Nov 4, 2025",
    title: "The Future Of Luxury Real Estate",
    desc: "As the world becomes more connected and environmentally conscious, luxury real estate is evolving to meet new demands. In this blog post...",
  },
  {
    id: 2,
    btnType: "Trends",
    userImg: userartimg2,
    articleimg: articleimg2,
    name: "Scarlett Gray",
    date: "Nov 4, 2025",
    title: "Luxury Home Design Trends",
    desc: "As we approach the new season, it's a great time to start thinking about how you can update your luxury home with the latest design...",
  },
];

const ArticlesCard = ({
  btnType,
  userImg,
  articleimg,
  name,
  date,
  title,
  desc,
  reverse,
  isLast
}) => {
  const titleRef = useRef(null);
  const btnRef = useRef(null);

  const onEnter = () => {
    gsap.to(titleRef.current, { color: "#d7eb6e", duration: 0.3 });
    gsap.to(btnRef.current, { color: "#d7eb6e", duration: 0.3 });
  };

  const onLeave = () => {
    gsap.to(titleRef.current, { color: "#ffffff", duration: 0.3 });
    gsap.to(btnRef.current, { color: "#d1d5db", duration: 0.3 });
  };
  

  return (
<div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      // {/* Change mb-32 to a conditional class */}
      className={`grid md:grid-cols-2 gap-12 items-center ${isLast ? 'mb-0' : 'mb-32'} ${
        reverse ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""
      }`}
    >
      {/* Left Content */}
      <div className="space-y-6">
        <span className="border border-gray-500 bg-dgl font-medium px-4 py-3 text-sm uppercase tracking-wider text-gray-300">
          {btnType}
        </span>

        <div className="flex items-center gap-3 mt-10 text-gray-400 text-sm">
          <img
            src={userImg}
            className="w-6 h-6 object-cover rounded-full"
            alt=""
          />
          <span className="text-primary font-semibold">{name}</span>
          <span>|</span>
          <span>{date}</span>
        </div>

        <h2
          ref={titleRef}
          className="text-4xl lg:text-5xl text-white font-light leading-tight"
        >
          {title}
        </h2>

        <p className="text-gray-400 max-w-xl">{desc}</p>

        <button
          ref={btnRef}
          className="tracking-[0.3em] text-sm text-gray-300 hover:text-white transition"
        >
          READ MORE
        </button>
      </div>

      {/* Right Image */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={articleimg}
          alt=""
          className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
    </div>
  );
};


const Articles = () => {
    gsap.registerPlugin(ScrollTrigger);
  // Use one main ref for the whole section to act as a scope
  const mainContainer = useRef(null);
  const articleDivRef = useRef(null);

  useGSAP(() => {
    // 1. Heading/Para Animations (Fixed 'start' property)
    gsap.from(".articleheading > div", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".articleheading",
        start: "top 85%", 
      },
    });

    gsap.from(".articlepara", {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".articlepara",
        start: "top 85%",
      },
    });

    // 2. The Articles Grid/List
    // We animate the CHILDREN of the ref (the cards)
    if (articleDivRef.current) {
      gsap.from(articleDivRef.current.children, {
        rotateX: 90,
        opacity: 0,
        duration: 1,
        stagger: 0.3, // Cards will pop in one by one
        scrollTrigger: {
          trigger: articleDivRef.current,
          start: "top 70%",
          // markers: true, // Uncomment this to see exactly when it triggers!
        },
      });
    }
  }, { scope: mainContainer }); // This ensures GSAP only looks for classes inside this component

  return (
    <section ref={mainContainer} className="px-6 lg:px-20 py-32 bg-dg">
      <div className="articleheading flex flex-col md:flex-row justify-between items-start mb-20">
        <div className="text-gray-400 max-w-md">
          <p className="uppercase tracking-[0.4em] text-sm mb-3">Our Blog</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <h1 className="articlepara text-white text-6xl lg:text-7xl font-light">
          Articles <span className="ml-4 italic text-primary">& Insights</span>
        </h1>
      </div>

<div ref={articleDivRef}>
  {articlesdata.map((item, idx) => (
    <ArticlesCard 
      key={item.id} 
      {...item} 
      reverse={idx % 2 !== 0} 
      // Add a custom class if it's the last item
      isLast={idx === articlesdata.length - 1} 
    />
  ))}
</div>
    </section>
  );
};

export default Articles;
