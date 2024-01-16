
import { motion } from 'framer-motion';

const WorkItem = ({ type, imageSrc, link, description, width, height }) => {
  return (
    <motion.div
      className="work-sample relative overflow-hidden bg-gray-800 rounded-md transition-transform duration-300 hover:scale-105"
      style={{ width: '100%', height: 'auto', maxWidth: width, maxHeight: height }}
    >
      <img
        src={imageSrc}
        alt={type}
        className="w-full h-40 object-cover rounded-t-md"
      />
      <motion.div className="work-content p-4 text-white absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold mb-2">{type}</h2>
        <p className="text-sm">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2"
        >
          View Project
        </a>
      </motion.div>
    </motion.div>
  );
};

export default WorkItem;
