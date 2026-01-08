import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ListingCard from "../components/ListingCard";
import img1 from "../assets/listingimg1.jpg";
import img2 from "../assets/listingimg2.jpg";
import img3 from "../assets/listingimg3.jpg";
import { useRef } from "react";

const Listings = () => {
  gsap.registerPlugin(ScrollTrigger);

  const cardRef = useRef(null);

  useGSAP(function () {
    gsap.from(".mainheading", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".mainheading",
        top: "top 50%",
      },
    });

    gsap.from(".mainpara", {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".mainpara",
        top: "top 50%",
      },
    });

    gsap.from(cardRef.current, {
      rotateY: 90,
      opacity: 0,
      duration:1,
      scrollTrigger: {
        trigger: cardRef.current,
        top: "top 50%",
      },
    });
  });

  const listingData = [
    {
      id: 1,
      buildingType: "UPTOWN RESIDENCIES",
      buttonType: "For Sale",
      roomType: {
        bed: "1 Bed",
        bath: "1 Bath",
      },
      price: "546,000",
      image: img1,
    },
    {
      id: 2,
      buildingType: "OCEANVIEW CONDO",
      buttonType: "For Rent",
      roomType: {
        bed: "2 Beds",
        bath: "1 Bath",
      },
      price: "4500",
      image: img2,
    },
    {
      id: 3,
      buildingType: "MODERN APARTMENT",
      buttonType: "For Sale",
      roomType: {
        bed: "2 Beds",
        bath: "2 Baths",
      },
      price: "479,000",
      image: img3,
    },
  ];

  return (
    <div>
      <div className="flex items-center font-sans gap-20">
        <h1 className="mainheading text-[6vw] text-white">
          Property
          <span className="text-[6vw] font-extralight italic text-primary">
            Listings
          </span>
        </h1>
        <p className="mainpara text-secondary">
          <span className="tracking-[0.45vw]">Modern & Stylish </span> <br />
          <span className="">
            Discover the allure of prime locations and coveted <br />
            neighborhoods with our selection of luxury properties.
          </span>
        </p>
      </div>
{/* Grid container with 2 columns */}
<div
  ref={cardRef}
  className="grid grid-cols-1 md:grid-cols-2 mt-15 gap-10 max-w-7xl mx-auto"
>
  {listingData.map((elem, index) => {
    // Check if it's the 3rd item (index 2) to make it span full width
    const isLastOne = index === 2;

    return (
      <div 
        key={elem.id} 
        className={`${isLastOne ? "md:col-span-2 flex justify-center" : ""}`}
      >
        <div className={`${isLastOne ? "w-full md:max-w-[calc(50%-20px)]" : "w-full"}`}>
          <ListingCard {...elem} />
        </div>
      </div>
    );
  })}
</div>
    </div>
  );
};

export default Listings;
