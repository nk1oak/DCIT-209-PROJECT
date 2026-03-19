import { motion } from "framer-motion";
import Smartphones from '../assets/images_2/Iphone-Icon-7467866.jpg';
import Earpods from '../assets/images_1/Anker-Soundcore-P25i-True-Wireless-in-Ear-Earbuds.jpg';
import PowerBanks from '../assets/images_1/Charger-_-Power-Bank_3ee2597f-33e1-4a29-9bd1-a339bd338ee1.jpg';
import Phonecovers from '../assets/images_1/iPhone_17_Air_Blue_500.jpg';
import Laptops from '../assets/images_2/laptops-4778168.jpg';
import Speakers from '../assets/images_2/JBL-Boombox-3-WiFi-Wireless-Bluetooth-Streaming-Portable-Speaker.jpg';
import Headphone from  '../assets/images_1/41bqlxPPzL._AC_SL1200.jpg';
import Gamingchair from '../assets/images_1/Aula-F8093-Premium-Quality-Gaming-Chair-Blue.jpg';
import Solarwall from '../assets/images_1/ANKERS120SOLARWALL.png';
import Cable from '../assets/images_1/Cable-Icon-5784429.jpg';
import Scuta from '../assets/images_1/C2Lite.jpg';
import Bags from '../assets/images_1/DA102R01 (1).jpg';
import Printer from '../assets/images_1/HP-PRINTER-LASERJET-PRO-4003DN.jpg';
import Camera from '../assets/images_1/INSTAX_MINI_12_PURPLE (1).jpg';
import Television from '../assets/images_2/LG_TV_43LM6370PVA.jpg';
import Mouse from '../assets/images_2/Logitech-M196-Wireless-Mouse-Graphite-910-007459.jpg';
import Blender from '../assets/images_2/NUTRIBULLET-FULL-SIZE-BLENDER-COMBO-1000 (1).jpg';
import AirFrier from '../assets/images_2/NUTRICOOK-AIR-FRYER-DUO-8.5L-VISION.jpg';
import Playstation from '../assets/images_2/PS5-CONSOLE-3746832.jpg';
import Gamingconsole from '../assets/images_2/PS5-DUAL-SHOCK-CAMO.jpg';

export default function Categories() {

  const groupedCategories = {
    "Gaming": [
      { name: "PlayStation", image: Playstation },
      { name: "Gaming Console", image: Gamingconsole },
      { name: "Gaming Chair", image: Gamingchair },
      { name: "Mouse", image: Mouse },
      { name: "Headphones", image: Headphone }
    ],
    "Home Appliances": [
      { name: "Blender", image: Blender },
      { name: "Air Fryer", image: AirFrier },
      { name: "Solar Panels", image: Solarwall },
      { name: "Printer", image: Printer }
    ],
    "Electronics": [
      { name: "Smartphones", image: Smartphones },
      { name: "Earpods", image: Earpods },
      { name: "Power Banks", image: PowerBanks },
      { name: "Phone Covers", image: Phonecovers },
      { name: "Laptops", image: Laptops },
      { name: "Speakers", image: Speakers },
      { name: "Camera", image: Camera },
      { name: "Television", image: Television },
      { name: "Cables", image: Cable },
      { name: "Scuta", image: Scuta },
      { name: "Bags", image: Bags }
    ]
  };

  return (
    <section className="p-6 min-h-screen bg-gradient-to-b from-gray-200 via-gray-100 to-white">

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Shop by Categories
      </motion.h2>

      {Object.keys(groupedCategories).map((categoryType, catIndex) => (
        <div key={catIndex} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{categoryType}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {groupedCategories[categoryType].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer text-center"
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 lg:w-36 lg:h-36 object-cover mx-auto mb-4 rounded-lg"
                  whileHover={{ rotate: 5 }}
                />
                <p className="font-semibold text-gray-700 text-base lg:text-lg">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

    </section>
  );
}