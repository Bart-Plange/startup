import { motion } from 'framer-motion';

const Services = () => {
  const cardVariants = {
    rest: { opacity: 0.7, scale: 1, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)', cursor: 'default' },
    hover: { opacity: 1, scale: 1.1, boxShadow: '0px 0px 20px rgba(255, 223, 77, 0.7)', cursor: 'pointer' },
    shake: { x: [-5, 5, -5, 5, 0], y: 0 },
  };

  const cardTransition = {
    type: 'spring',
    stiffness: 300,
    damping: 10,
  };

  return (
    
    <div className="lg:py-16 bg-gradient-to-br from-black via-black to-purple-900">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">

          <div className="lg:w-1/3 lg:pt-16 my-auto">
            <h2 className="bg-gradient-to-tr from-black via-orange-500 to-purple-500 bg-clip-text text-transparent font-bold text-2xl py-2">What We Do.</h2>
            <p className="py-6 text-lg text-white">
              We provide a range of creative and innovative services to help your business thrive.
              Whether you need a stunning website, eye-catching graphics, or effective marketing solutions,
              we've got you covered!
            </p>

            <div>
              <button className="hidden lg:block px-8 bg-gradient-to-tr from-black via-black to-purple-500 mb-4 text-white py-2 rounded ring-4 hover:ring-2 focus:ring-2 hover:bg-purple-900 transition">View More</button>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="flex flex-col">
              <div className="flex flex-col justify-center mx-auto md:flex-row gap-4">
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  transition={cardTransition}
                  className="bg-gradient-to-tr from-black via-black to-purple-900 p-2 lg:m-4 lg:w-56 h-48 lg:h-52 w-full shadow-xl border border-gray-600 text-center rounded"
                >
                  <h3 className="text-xl py-2 text-white">Website Design</h3>
                  <p className="text-gray-400">
                    Transform your online presence with a custom-designed website tailored to your brand.
                  </p>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  transition={cardTransition}
                  className="bg-transparent to-purple-900 p-2 lg:m-4 lg:w-56 h-48 lg:h-52 w-full shadow-xl border border-gray-600 text-center rounded"
                >
                  <h3 className="text-xl py-2 text-white">Graphic Design</h3>
                  <p className="text-gray-400">
                    Make a lasting impression with visually appealing graphic designs for your brand.
                  </p>
                </motion.div>
              </div>

              <div className="flex flex-col mx-auto justify-center md:flex-row gap-4">
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  transition={cardTransition}
                  className="bg-transparent p-2 lg:m-4 lg:w-56 h-48 lg:h-52 w-full shadow-xl border border-gray-600 text-center mt-4 rounded"
                >
                  <h3 className="text-xl py-2 text-white">Marketing</h3>
                  <p className="text-gray-400">
                    Boost your business with strategic marketing solutions that drive results.
                  </p>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  transition={cardTransition}
                  className="bg-gradient-to-tr from-black via-black to-purple-900 p-2 lg:m-4 lg:w-56 h-48 lg:h-52 w-full shadow-xl border border-gray-600 text-center mb-4 rounded"
                >
                  <h3 className="text-xl py-2 text-white">E-commerce Solutions</h3>
                  <p className="text-gray-400">
                    Optimize your online store for success with our e-commerce development expertise.
                  </p>
                </motion.div>
              </div>

              <button className="lg:hidden py-4 bg-gradient-to-tr from-black via-black to-purple-500  text-white rounded ring-4 hover:ring-2 focus:ring-2 hover:bg-purple-900 w-1/2 transition">View More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
