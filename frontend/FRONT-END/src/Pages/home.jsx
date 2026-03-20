// src/Pages/Home.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Images
import Slide1 from "../assets/images_1/61GTu9CSPvL._SL1500.jpg";
import Slide2 from "../assets/images_1/A17Blue.jpg";
import Slide3 from "../assets/images_1/apple-iphone-16-pro-max (1).jpg";
import Slide4 from "../assets/images_1/Camera-Icon-3070402.jpg";
import Slide5 from "../assets/images_1/DSWKDTP.jpg";
import Slide6 from "../assets/images_1/FOLD_7_Black.jpg";
import Slide7 from "../assets/images_1/FOLD_7_Black (1).jpg";
import Slide8 from "../assets/images_1/Fold-Z-7.jpg";
import Slide9 from "../assets/images_1/Galaxy-Z-Flip-7 (2).jpg";
import Slide10 from "../assets/images_1/GreenGNMIFI6RTRBK.jpg";
import Slide11 from "../assets/images_1/Home-Theatres-Icon-4117568.jpg";
import Slide12 from "../assets/images_1/iPhone_17_Pro_Max_Cosmic_Orange (1).jpg";
import Slide13 from "../assets/images_2/JBL_PARTYBOX_CLUB120W (1).jpg";
import Slide14 from "../assets/images_2/JBL-GO-4-Portable-Speaker (1).jpg";
import Slide15 from "../assets/images_2/JBL-PartyBox-Club-120.jpg";
import Slide16 from "../assets/images_2/PlayStation_C2_AE5-Console-model-group-slim-02.jpg";
import Slide17 from "../assets/images_2/SAMSUNG_BANNER.jpg";
import Slide18 from "../assets/images_2/son_range-2102792 (1).jpg";
import Slide19 from "../assets/images_2/Sony-WH-1000XM6-The-Best-Wireless-Noise-Canceling-Headphones-Blue (1).jpg";
import Slide20 from "../assets/images_2/SonySRS-ULT50Black (1).jpg";
import Slide21 from "../assets/images_2/SonySRS-ULT50OffWhite.jpg";
import Slide22 from "../assets/images_3/SPLASH-TOILETRY-BAG-OLIVE.jpg";
import Slide23 from "../assets/images_3/SPLASH-LAPTOP-BAG-1516-BLACK.jpg";

// Brand Logos for carousel
import logo1 from "../assets/images_1/Everything_15.png";
import logo2 from "../assets/images_1/Everything_16.png";
import logo3 from "../assets/images_1/Everything_17.png";
import logo4 from "../assets/images_1/Everything_18.png";
import logo5 from "../assets/images_1/Everything_25.png";
import logo6 from "../assets/images_3/tecno-logo-2048x2048_c93b9248-62e3-4b10-9eeb-0d7c746cee2d.png";
import logo7 from "../assets/images_1/gopro-logo-2048x2048.png";
import logo8 from "../assets/images_2/JBL-Logo-2048x2048.png";
import logo9 from "../assets/images_2/playstation-logo-2048x2048.png";
import logo10 from "../assets/images_2/Samsung-Logo2-2048x2048.png";

export default function Home() {
  const slides = [
    Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9,
    Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16, Slide17,
    Slide18, Slide19, Slide20, Slide21, Slide22, Slide23
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [trendingSlide, setTrendingSlide] = useState(0);
  const [newArrivalSlide, setNewArrivalSlide] = useState(0);
  const [brandScroll, setBrandScroll] = useState(0);

  const brandLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

  // Main slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Trending slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setTrendingSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // New Arrivals slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setNewArrivalSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll brand carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setBrandScroll((prev) => (prev + 1) % brandLogos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Slideshow */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <motion.img
            key={index}
            src={slide}
            alt={`slide-${index}`}
            className="absolute top-0 left-0 w-full h-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            ></span>
          ))}
        </div>
      </section>

      {/* Featured Products Horizontal */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="flex overflow-x-scroll gap-6 py-4 px-2 scrollbar-hide">
          {slides.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[250px] bg-white p-4 rounded-xl shadow-md hover:shadow-xl cursor-pointer flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <img src={item} alt={`featured-${index}`} className="w-full h-48 object-contain rounded-lg mb-2" />
              <p className="font-semibold text-gray-700">Product {index + 1}</p>
              <p className="text-blue-600 font-bold">GH₵{(2000 + index * 400).toLocaleString()}</p>
              <button className="mt-2 w-full bg-blue-600 text-white py-1.5 rounded-lg hover:bg-blue-700 transition">
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Now Slideshow */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Trending Now</h2>
        <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl">
          {slides.map((slide, index) => (
            <motion.img
              key={index}
              src={slide}
              alt={`trending-${index}`}
              className="absolute top-0 left-0 w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === trendingSlide ? 1 : 0 }}
              transition={{ duration: 1.2 }}
            />
          ))}
        </div>
      </section>
      <section className="text-center py-12 px-6">
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
          At Plug Hub, we deliver the best electronics at unbeatable prices. Browse, discover, and enjoy exclusive deals every week.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Quality, affordability, and trust—Plug Hub is your go-to store for smartphones, gadgets, and home electronics.
        </p>
      </section>

      {/* New Arrivals Slideshow */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">New Arrivals</h2>
        <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl">
          {slides.map((slide, index) => (
            <motion.img
              key={index}
              src={slide}
              alt={`new-arrival-${index}`}
              className="absolute top-0 left-0 w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === newArrivalSlide ? 1 : 0 }}
              transition={{ duration: 1.2 }}
            />
          ))}
        </div>
      </section>

      {/* Deals of the Day */}
      <section className="py-12 px-6 bg-yellow-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Deals of the Day</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {slides.slice(0, 12).map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <img src={item} alt={`deal-${index}`} className="w-full h-48 object-contain rounded-lg mb-2" />
              <p className="font-semibold text-gray-700">Deal {index + 1}</p>
              <p className="text-red-600 font-bold">-15%</p>
              <p className="text-blue-600 font-bold">GH₵{(1500 + index * 400).toLocaleString()}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brands Carousel */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Brands</h2>
        <div className="flex overflow-hidden gap-6 py-4">
          <motion.div
            className="flex gap-6"
            animate={{ x: [-100, 0, -100] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            {brandLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`brand-${index}`} className="h-24 w-auto object-contain" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Extra Testimonials Ticker */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">More Customer Feedback</h2>
        <div className="flex overflow-x-scroll gap-6 py-4 px-2 scrollbar-hide">
          {[
            "Great support, very reliable!",
            "Fast shipping, amazing quality!",
            "Loved the product, will buy again!",
            "Excellent experience, five stars!",
            "Affordable prices and quality items!",
          ].map((review, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] bg-gray-100 p-6 rounded-xl shadow-md flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 mb-2">"{review}"</p>
              <p className="font-semibold text-gray-900">Customer {index + 6}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <img src={Slide1} alt="Logo" className="w-32 mb-4" />
            <p>Our 1 year warranty policy is unbeatable. Outstanding 1 year warranty! (terms and conditions apply)</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <p>Plug Hub HQ</p>
            <p>6 Oshie Street, Osu Ako-Adjei, Accra, Ghana</p>
            <p>📞 Phone: (0) 540-104-881</p>
            <p>📧 Email: info@plughub.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul>
              <li className="hover:text-blue-400 cursor-pointer">Search</li>
              <li className="hover:text-blue-400 cursor-pointer">Brands</li>
              <li className="hover:text-blue-400 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>TikTok</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © 2026 Plug Hub. Powered by React
        </div>
      </footer>
    </div>
  );
}