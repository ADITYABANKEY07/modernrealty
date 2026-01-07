import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-dgl w-full mt-25 text-gray-300 pt-20">
      <div className="w-full px-10 xl:px-24 2xl:px-40 grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Logo & Description */}
        <div className="md:col-span-3">
          <div className="flex items-center gap-3 mb-6">
            <img
              // ref={logoRef}
              src="https://cdn.prod.website-files.com/654390ee7d74736cd6076aaa/65477c0624c25dfd5989b756_ModernRealtyLogo2.svg"
              alt="logo"
            />
          </div>

          <p className="text-gray-400 leading-relaxed max-w-sm">
            Our portfolio includes exquisite properties nestled in prime
            locations renowned for their desirability.
          </p>

          <div className="flex gap-5 mt-6 text-white">
            <Instagram className="w-5 h-5 hover:text-[#D7EB6E] cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-[#D7EB6E] cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-[#D7EB6E] cursor-pointer" />
            <Youtube className="w-5 h-5 hover:text-[#D7EB6E] cursor-pointer" />
          </div>
        </div>

        {/* Explore */}
        <div className="md:col-span-1 md:col-start-5">
          <h3 className="text-white text-lg mb-6">Explore</h3>
          <ul className="space-y-3 text-gray-400">
            {["Listings", "Agents", "About", "Contact", "Blog"].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-1 md:col-start-6">
          <h3 className="text-white text-lg mb-6">Contact</h3>
          <p className="text-gray-400 mb-4">
            XYZ Times Sq, New York, 10036,
            <br />
            United States
          </p>

          <div className="flex items-center gap-3 mb-3 text-gray-400">
            <Phone className="w-4 h-4" />
            <span>+123 456789</span>
          </div>

          <div className="flex items-center gap-3 text-gray-400">
            <Mail className="w-4 h-4" />
            <span>hello@modernrealty.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 bg-dg mt-20 py-6 text-sm text-gray-400">
        <div className="w-full px-10 xl:px-24 2xl:px-40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© Modern Realty. All Rights Reserved.</p>

          <div className="flex gap-6">
            <a className="hover:text-white" href="#">
              Built by Aditya Bankey
            </a>
            <a className="hover:text-white" href="#">
              Terms & Conditions
            </a>
            <a className="hover:text-white" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
