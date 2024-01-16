import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const About = () => {
  const cardVariants = {
    rest: { opacity: 0.7, scale: 1, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)', cursor: 'default' },
    hover: { opacity: 1, scale: 1.1, boxShadow: '0px 0px 20px rgba(255, 223, 77, 0.7)', cursor: 'pointer' },
    shake: {x: [-5, 5, -5, 5, 0], y:0},
  };
  const cardTransition = {
    type: 'spring',
    stiffness: 300,
    damping: 10,
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 100, ease: 'easeInOut' } },
  };

  // Controls for animation
  const controls = useAnimation();

  // Hook to trigger animation when the center of the component comes into view
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px', // Start animation when the center of the component is in the viewport
  });

  // Animation sequence
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial="hidden"
      variants={containerVariants}
      ref={ref}
      animate={controls}
      className="bg-gradient-to-tr from-black via-black to-purple-950 text-white py-16"
    >
      <div className="container mx-auto flex flex-col justify-center items-center rounded-3xl">
        {/* Center content */}
        <div className="items-center text-center bg-gray-950 rounded-full p-10 mb-8 border-b border-gray-500">
          <div className="pt-8">
            <p className="p-8 text-white">WHO ARE WE</p>
          </div>
        </div>

        {/* Grid for content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="items-center">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              transition={cardTransition}
              className="p-8 bg-gradient-to-tr from-black via-black to-purple-950 rounded-3xl mb-4 text-center lg:p-4"
            >
              <p>
                With a focus on innovation and excellence, our team is committed to delivering
                top-notch services tailored to your unique business needs.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              transition={cardTransition}
              className="p-8 bg-gradient-to-t from-purple-950 via-black to-purple-950 rounded-3xl mb-4 text-center lg:p-4"
            >
              <p>
                Our expertise spans a wide range of industries, and we take pride in our ability to
                adapt and provide solutions that drive success.
              </p>
            </motion.div>
          </div>

          {/* Display this for mobile */}
          <div className="items-center">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              transition={cardTransition}
              className="p-8 bg-gradient-to-t from-purple-950 via-black to-purple-950 rounded-3xl mb-4 text-center lg:p-4"
            >
              <p>
                At the core of our company is a dedication to transparency, integrity, and
                customer satisfaction.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              transition={cardTransition}
              className="p-8 bg-gradient-to-t from-purple-950 via-black to-purple-950 rounded-3xl text-center lg:p-4"
            >
              <p>
                We are passionate about providing cutting-edge solutions for your business.
                Let us handle the technicalities while you focus on growth.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
