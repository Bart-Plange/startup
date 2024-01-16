import { motion } from 'framer-motion';

const ProcessTree = () => {
  const nodes = [
    { label: "Gathering Ideas", description: "We start by brainstorming and gathering creative ideas to address your business needs." },
    { label: "Designing", description: "Once we have a clear vision, our design team brings those ideas to life through thoughtful and innovative designs." },
    { label: "Testing", description: "Rigorous testing ensures that our solutions meet the highest standards and perform reliably in real-world scenarios." },
    { label: "Verification", description: "Our solutions undergo thorough verification processes to ensure accuracy and reliability." },
    { label: "Deployment", description: "Once verified, we deploy the solutions, providing ongoing support to ensure your success." },
    { label: "Continuous Improvement", description: "We believe in continuous improvement, refining our solutions based on feedback and emerging technologies." },
  ];

  const cardVariants = {
    rest: { opacity: 0.7, scale: 1, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)', cursor: 'default' },
    hover: { opacity: 1, scale: 1.1, boxShadow: '0px 0px 20px rgba(255, 223, 77, 0.7)', cursor: 'pointer' },
  };

  const cardTransition = {
    type: 'spring',
    stiffness: 300,
    damping: 10,
  };

  return (
    <div className='bg-gradient-to-tr from-black via-black to-purple-950 items-center py-16 '>
      <div className='text-center mb-8 text-orange-900 text-4xl font-semibold'>
        <p>the algorithm</p>
      </div>
    <div className="flex ">
      <div className="relative w-2 bg-purple-950 mx-4 h-36">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full bg-purple-950 w-2"></div>
      </div>

      <div className="flex justify-between flex-col lg:flex-row w-full px-8">
        {nodes.map((node, index) => (
          <Node key={index} label={node.label} description={node.description} cardVariants={cardVariants} cardTransition={cardTransition} />
        ))}
      </div>
    </div>
    </div>
  );
}

const Node = ({ label, description, cardVariants, cardTransition }) => {
  return (
    <div className="flex flex-col items-center text-white text-center ">
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        initial="rest"
        animate="rest"
        transition={cardTransition}
        className="p-4 bg-gradient-to-t from-purple-950 via-black to-purple-950 rounded-3xl mb-4"
      >
        <p className="text-sm">{label}</p>
      </motion.div>
      <div className="p-4 m-2 hidden lg:block bg-gray-900 rounded-3xl">
        <img src="" alt="" />
        <p className="text-xs ">{description}</p>
      </div>
    </div>
  );
}

export default ProcessTree;
