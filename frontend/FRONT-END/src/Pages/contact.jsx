import { useState } from "react";
import Logo from "../assets/images_1/logo.jpeg";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setMessage("");
  };

  const faqs = [
    "Delivery charges for orders from the Online Shop?",
    "How long will delivery take?",
    "What exactly happens after ordering?",
    "Do I receive an invoice for my order?",
    "What are the payment gateways for making payments?",
    "What should I do if I receive a damaged or wrong product?",
    "Can I change or cancel my order?",
    "What is 'package tracking' in my orders?",
    "Our 1 year warranty policy is unbeatable. That is why we give you our outstanding 1 year warranty! (terms and conditions apply)"
  ];

  const quickLinks = [
    "Search",
    "Brands",
    "Categories",
    "Contact",
    "Login",
    "Sign Up"
  ];

  const payments = ["Visa", "Mastercard", "PayPal", "Stripe"];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Logo */}
      <div className="flex justify-center py-10">
        <img src={Logo} alt="Plug Hub Logo" className="h-28 w-28 object-cover rounded-lg" />
      </div>

      {/* Send Us a Message */}
      <section className="max-w-4xl mx-auto px-6 w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none resize-none h-40"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700">{faq}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Social & Logo */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <img src={Logo} alt="Plug Hub Logo" className="h-20 w-20 object-cover rounded-lg mb-4" />
            <p className="text-center md:text-left">Connect with us on social media</p>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="hover:text-gray-300">🐦</a>
              <a href="#" className="hover:text-gray-300">📘</a>
              <a href="#" className="hover:text-gray-300">📸</a>
              <a href="#" className="hover:text-gray-300">🎵</a>
              <a href="#" className="hover:text-gray-300">▶️</a>
            </div>
          </div>

          {/* HQ Info */}
          <div className="flex flex-col space-y-3 text-gray-200">
            <h3 className="font-bold text-lg mb-4">Plug Hub HQ</h3>
            <p>6 Oshie Street, Osu Ako-Adjei, Accra, Ghana</p>
            <p>📞 Phone: (0) 540-104-881</p>
            <p>📧 Email: info@plughub.com</p>
            <p>Operating Hours: Mon - Fri, 9AM - 6PM</p>
            <p>Our 1 year warranty policy is unbeatable. Terms and conditions apply.</p>
          </div>

          {/* Newsletter & Quick Links */}
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Subscribe to Our Newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-800"
                />
                <button className="bg-white text-blue-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-300 text-sm mt-2">
                I accept the terms of the Privacy Policy
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Quick Links</h3>
              <ul className="space-y-1">
                {quickLinks.map((link, idx) => (
                  <li key={idx} className="hover:underline cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Payment Methods</h3>
              <div className="flex space-x-3">
                {payments.map((pay, idx) => (
                  <span key={idx} className="bg-white text-blue-900 px-3 py-1 rounded-lg text-sm">{pay}</span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-blue-700 mt-12 py-6 text-center text-gray-300 text-sm">
          <p>© 2026 Plug Hub. Powered by Shopify</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <span className="hover:underline cursor-pointer">Privacy policy</span>
            <span className="hover:underline cursor-pointer">Contact information</span>
            <span className="hover:underline cursor-pointer">Refund policy</span>
            <span className="hover:underline cursor-pointer">Terms of service</span>
          </div>
        </div>
      </footer>

    </div>
  );
}