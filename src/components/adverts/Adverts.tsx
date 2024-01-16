import { motion } from 'framer-motion';

const ServiceCard = ({ title, icon }) => {
  const cardVariants = {
    rest: { opacity: 0.9, scale: 1, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)', cursor: 'default' },
    hover: { opacity: 1, scale: 1.05, boxShadow: '0px 0px 20px rgba(255, 223, 77, 0.7)', cursor: 'pointer' },
  };

  const cardTransition = {
    type: 'spring',
    stiffness: 300,
    damping: 10,
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      initial="rest"
      animate="rest"
      transition={cardTransition}
      className="relative w-32 h-32 mb-16 transition-bg"
    >
      <div className="rounded-full overflow-hidden bg-gradient-to-tr from-black via-black to-purple-900 p-8 w-full h-full shadow-xl border border-gray-600 text-center hover:bg-gradient-to-bl ">
        <div className="text-4xl mb-4">{icon}</div>
      </div>
      <h3 className="text-xl font-bold py-2 absolute top-full left-1/2 transform -translate-x-1/2 text-center text-white">{title}</h3>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="bg-gradient-to-tr from-purple-950 via-black to-black text-white ">
      <div className="container mx-auto">
        <div className="lg:w-2/3 flex flex-col mx-auto mb-8">
          <h2 className="bg-gradient-to-tr from-black via-orange-500 to-purple-500 bg-clip-text text-transparent font-bold text-2xl py-2 text-center">What We Do.</h2>
          <p className="py-6 text-lg text-center">
            We provide a range of creative and innovative services to help your business thrive.
            Whether you need a stunning website, eye-catching graphics, or effective marketing solutions,
            we've got you covered!
          </p>
        </div>
        <div className="flex flex-wrap justify-around gap-6 ">
          <ServiceCard title="Website Design" icon="🌐" />
          <ServiceCard title="Graphic Design" icon="🎨" />
          <ServiceCard title="Marketing" icon="🚀" />
          <ServiceCard title="E-commerce" icon="💻" />
        </div>
      </div>
    </div>
  );
};

export default Services;
