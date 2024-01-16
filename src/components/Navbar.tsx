import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '/bartwebz.png';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: '0%' },
  };

  const navItemVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <div className="bg-gradient-to-b from-purple-950 via-black to-black">
      <div className="px-4 md:px-12 flex p-4 mx-auto justify-between items-center">
        <div className='cursor-pointer'>
          <Link to={'/'} >
          <img src={Logo} alt="logo" className='h-16 bg-transparent w-16' />
          </Link>
        </div>

        <div className="lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>

        <ul className="hidden lg:flex flex-row gap-6 text-white px-2">
          <motion.li
            variants={navItemVariants}
            whileHover="hover"
            key="about"
            className="hover:underline transition-all duration-300"
          >
            <a href="#about">About</a>
          </motion.li>
          <motion.li
            variants={navItemVariants}
            whileHover="hover"
            key="services"
            className="hover:underline transition-all duration-300"
          >
            <a href="/servicesPage">Services</a>
          </motion.li>
          <motion.li
            variants={navItemVariants}
            whileHover="hover"
            key="work"
            className="hover:underline transition-all duration-300"
          >
            <Link to="/work">Work</Link>
          </motion.li>
          <motion.li
            variants={navItemVariants}
            whileHover="hover"
            key="contact"
            className="hover:underline transition-all duration-300"
          >
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden fixed inset-0 bg-gradient-to-t from-black via-gray-900 to-purple-900 bg-opacity-80 z-50"
            >
              <div className="flex justify-end p-4 mr-4 mt-4">
                <div className="cursor-pointer" onClick={toggleMobileMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 text-white"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <ul className="flex flex-col items-center mt-20 text-white gap-y-4 text-xl">
                <motion.li
                  variants={navItemVariants}
                  whileHover="hover"
                  key="about"
                  onClick={toggleMobileMenu}
                  className="hover:bg-orange-500 transition-all duration-300"
                >
                  <a href="/about">About</a>
                </motion.li>
                <motion.li
                  variants={navItemVariants}
                  whileHover="hover"
                  key="services"
                  onClick={toggleMobileMenu}
                  className="hover:bg-orange-500 transition-all duration-300"
                >
                  <a href="/servicesPage">Services</a>
                </motion.li>
                <motion.li
                  variants={navItemVariants}
                  whileHover="hover"
                  key="work"
                  onClick={toggleMobileMenu}
                  className="hover:bg-orange-500 transition-all duration-300"
                >
                  <Link to="/work">Work</Link>
                </motion.li>
                <motion.li
                  variants={navItemVariants}
                  whileHover="hover"
                  key="contact"
                  onClick={toggleMobileMenu}
                  className="hover:bg-orange-500 transition-all duration-300"
                >
                  <a href="/home/contact">Contact</a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Theme Button
        <button
          className="bg-orange-500 text-white p-2 rounded"
          
        >
          Toggle Theme
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
