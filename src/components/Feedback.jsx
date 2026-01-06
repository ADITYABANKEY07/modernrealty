import {
  RiDoubleQuotesR,
  RiStarFill,
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
} from "@remixicon/react";
import { Quote, QuoteIcon } from "lucide-react";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import gsap from "gsap";

const FeedbackCard = ({ image, name, review }) => {
  return (
    <div className="relative bg-dgl w-[40vw] h-[50vh]">
      <div className="mt-15 p-10">
        <img
          className="absolute h-25 w-25 -mt-20 rounded-full"
          src={image}
          alt=""
        />
        <div className="absolute mt-2">
          <div className="icon flex items-center gap-50">
            <div className="fivestar gap-2 text-primary flex">
              <RiStarFill size={18} />
              <RiStarFill size={18} />
              <RiStarFill size={18} />
              <RiStarFill size={18} />
              <RiStarFill size={18} />
            </div>
            <RiDoubleQuotesR size={100} className="text-[#3f4247]" />
          </div>
          <div className="-mt-6">
            <h4 className="text-secondary tracking-[0.5vw] text-sm uppercase font-sans">
              {name}
            </h4>
            <h4 className="text-primary/70 tracking-[0.5vw] text-xs uppercase font-sans">
              CLIENT REVIEW
            </h4>
            <p className="text-secondary w-1/2">{review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feedback = () => {
  let customerdata = [
    {
      id: 1,
      image:
        "https://cdn.prod.website-files.com/654390ee7d74736cd6076aaa/65465856780ec7c28f702783_Reviews3.jpg",
      name: "Will Roberts",
      review:
        "What impressed me the most was their dedication to ensuring every aspect of the transaction was handled flawlessly.",
    },
    {
      id: 2,
      image:
        "https://cdn.prod.website-files.com/654390ee7d74736cd6076aaa/6544b4cbcd53c04b5bfe19fe_man-wearing-white-V-neck-shirt-Square.jpg",
      name: "John Doe",
      review:
        "From the moment I stepped into their office, I was greeted with professionalism and a genuine passion.",
    },
    {
      id: 3,
      image:
        "https://cdn.prod.website-files.com/654390ee7d74736cd6076aaa/654728e4f69dd5d1129439e6_Reviews1.jpg",
      name: "Logan Parker",
      review:
        "What impressed me the most was their dedication to ensuring every aspect of the transaction was handled flawlessly.",
    },
    {
      id: 4,
      image:
        "https://cdn.prod.website-files.com/654390ee7d74736cd6076aaa/654728e467ae354bf9b87618_Reviews2.jpg",
      name: "Lily Turner",
      review:
        "From the moment I stepped into their office, I was greeted with professionalism and a genuine passion.",
    },
  ];

  return (
    <div className="mt-20 px-10 bg-dg min-h-screen">
      <div className="flex flex-col items-center font-sans gap-10 mb-10">
        <h1 className="tracking-[0.45vw] text-secondary uppercase text-sm font-semibold">
          TESTIMONIALS
        </h1>

        <h1 className="mainheading text-[6vw] text-white leading-tight">
          Client
          <span className="font-extralight ml-5 italic text-primary">
            Reviews
          </span>
        </h1>

        <div className="self-end flex -mt-20 items-center text-secondary">
          <button className="feedback-prev">
            <RiArrowDropLeftLine size={70} />
          </button>
          <button className="feedback-next -ml-8">
            <RiArrowDropRightLine size={70} />
          </button>
        </div>
      </div>

      <Swiper
  modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".feedback-prev",
          nextEl: ".feedback-next",
        }}
        slidesPerView={2} // ✅ Always 2 slides (PC + Mobile)
        spaceBetween={60}
        speed={800}
        loop={true}
  pagination={{
    el: ".feedback-pagination",
    clickable: true,
  }}
        className="max-w-6xl mx-auto -mt-10"
      >
        {customerdata.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center">
            <FeedbackCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="feedback-pagination active:bg-amber-300 flex justify-center mt-10"></div>

    </div>
  );
};

export default Feedback;
