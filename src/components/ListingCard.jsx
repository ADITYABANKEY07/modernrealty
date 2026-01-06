import { BedDouble, Bath, ArrowRight } from "lucide-react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ListingCard = ({ buildingType, buttonType, roomType, price, image }) => {
  const overlayRef = useRef(null);
  const arrowRef = useRef(null);
  const { contextSafe } = useGSAP();

const onMouseEnter = contextSafe(() => {
    // 1. Expand the "Pie"
    gsap.to(overlayRef.current, {
      clipPath: "circle(150% at 100% 0%)",
      duration: 0.6,
      ease: "expo.out",
    });
    
    // 2. Kick the arrow AND return it automatically
    gsap.fromTo(arrowRef.current, 
      { x: 0 }, 
      { 
        x: 10, 
        duration: 0.3, 
        ease: "power2.out", 
        repeat: 1, // Plays once more
        yoyo: true // Plays in reverse (returns to 0)
      }
    );
  });

  const onMouseLeave = contextSafe(() => {
    // 3. Shrink the "Pie" back to the corner
    gsap.to(overlayRef.current, {
      clipPath: "circle(0% at 100% 0%)",
      duration: 0.5,
      ease: "power2.inOut",
    });
    
    // 4. Reset arrow position silently
    gsap.to(arrowRef.current, { x: 0, duration: 0.2 });
  });

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex flex-col gap-5 font-sans bg-dgl max-w-sm rounded-lg shadow-lg overflow-hidden cursor-pointer"
    >
      <div className="flex items-center justify-between p-5 pb-0">
        <h2 className="text-3xl font-semibold text-white leading-tight">{buildingType}</h2>
        <button className="text-primary text-nowrap border border-primary px-4 py-2 text-sm rounded-sm hover:bg-primary hover:text-black transition-colors">
          {buttonType}
        </button>
      </div>

      <div className="flex px-5 gap-10 items-center text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <BedDouble className="text-primary w-4 h-4" />
          <p className="uppercase tracking-wider">{roomType.bed}</p>
        </div>
        <div className="flex items-center gap-2">
          <Bath className="text-primary w-4 h-4" />
          <p className="uppercase tracking-wider">{roomType.bath}</p>
        </div>
      </div>

      <h2 className="px-5 text-4xl font-bold text-white">${price}</h2>

      <div className="relative h-64 w-full overflow-hidden rounded-b-lg">
        <img
          src={image}
          alt={buildingType}
          className="w-full h-full object-cover"
        />

        {/* CRITICAL FIX: Added style={{ clipPath: "circle(0% at 100% 0%)" }} 
          This ensures the overlay is 100% hidden by default.
        */}
        <div 
          ref={overlayRef}
          style={{ clipPath: "circle(0% at 100% 0%)" }}
          className="absolute inset-0 bg-primary flex items-center gap-5 justify-center p-6 text-center z-20"
        >
          <p className="text-black font-black text-xl mb-2 tracking-tighter">VIEW MORE</p>
          <div ref={arrowRef} className="w-10 h-10 border-2 -mt-2 border-black rounded-full flex items-center justify-center text-black font-bold text-xl">
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;