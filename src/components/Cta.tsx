// src/components/Cta.js
import CtaImage from '../assets/images/cta-bg.jpg';

const Cta = () => {
  return (
    <div className="bg-gradient-to-tl from-black via-black to-purple-900 text-white py-16 relative overflow-hidden">
      <div className="container mx-auto text-right relative z-10">
        <h2 className="font-bold mb-4 ">
          <span className="bg-gradient-to-tr from-purple-500 via-orange-500 to-pink-500 bg-clip-text text-transparent md:text-6xl text-4xl w-1/2">
            Ready to transform your ideas into reality?
          </span>
        </h2>
        <p className="text-lg mb-8">
          Let's work together to create something amazing. Contact us today!
        </p>
        <a
          href="#contact"
          className="bg-gradient-to-tr from-black via-black to-purple-500 mb-4 text-white px-4 py-2 rounded ring-4 hover:ring-2 focus:ring-2 hover:bg-purple-900 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Cta;
