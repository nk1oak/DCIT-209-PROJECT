import { motion } from "framer-motion";

import Apple from "../assets/images_1/Everything_15.png";
import Sony from "../assets/images_1/Everything_16.png";
import Huawei from "../assets/images_1/Everything_17.png";
import Instax from "../assets/images_1/Everything_18.png";
import LG from "../assets/images_1/Everything_25.png";
import Tecno from "../assets/images_3/tecno-logo-2048x2048_c93b9248-62e3-4b10-9eeb-0d7c746cee2d.png";
import Gopro from "../assets/images_1/gopro-logo-2048x2048.png";
import JBL from "../assets/images_2/JBL-Logo-2048x2048.png";
import PlayStation from "../assets/images_2/playstation-logo-2048x2048.png";
import Samsung from "../assets/images_2/Samsung-Logo2-2048x2048.png";

export default function Brands() {
  const brands = [
    { name: "Apple", image: Apple },
    { name: "Sony", image: Sony },
    { name: "Huawei", image: Huawei },
    { name: "Instax", image: Instax },
    { name: "LG", image: LG },
    { name: "Tecno", image: Tecno },
    { name: "GoPro", image: Gopro },
    { name: "JBL", image: JBL },
    { name: "PlayStation", image: PlayStation },
    { name: "Samsung", image: Samsung },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Trusted Brands
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We partner with world-class brands to bring you the best in technology,
          innovation, and performance.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition cursor-pointer"
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="h-20 object-contain mb-4"
            />
            <p className="font-semibold text-gray-700">
              {brand.name}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2 text-blue-600">
            Premium Quality
          </h3>
          <p className="text-gray-600">
            Only original and high-quality products from verified manufacturers.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2 text-blue-600">
            Trusted Globally
          </h3>
          <p className="text-gray-600">
            Our brands are recognized worldwide for excellence and innovation.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2 text-blue-600">
            Best Prices
          </h3>
          <p className="text-gray-600">
            We bring you competitive pricing with unmatched value.
          </p>
        </div>

      </div>

      <div className="mt-16 bg-blue-600 text-white rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Shop Your Favorite Brands Today
        </h2>
        <p className="mb-6">
          Discover top deals on electronics, gadgets, and accessories from your
          favorite brands.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Explore Products
        </button>
      </div>

    </div>
  );
}