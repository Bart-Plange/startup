import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image1 from '../../assets/images/1.png';
import Image2 from '../../assets/images/2.png';
import Image3 from '../../assets/images/herobg.jpg';
import WorkItem from './WorkItem';
import { Carousel, Navbar } from '..';
import { Link } from 'react-router-dom';

const BentoDesign = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const workItems = [
    {
      type: 'web-design',
      imageSrc: Image1,
      link: 'https://example.com/web-design',
      description: 'Description for Web Design',
      width: 300,
      height: 200,
    },
    {
      type: 'logo',
      imageSrc: Image2,
      link: 'https://example.com/logo',
      description: 'Description for Logo',
      width: 500,
      height: 300,
    },
    {
      type: 'design',
      imageSrc: Image3,
      link: 'https://example.com/design',
      description: 'Description for Design',
      width: 400,
      height: 250,
    },
    {
      type: 'Graphic design',
      imageSrc: Image2,
      link: 'https://example.com/design',
      description: 'Description for Design',
      width: 350,
      height: 200,
    },
    {
      type: 'Grapgic design',
      imageSrc: Image1,
      link: 'https://example.com/design',
      description: 'Description for Design',
      width: 450,
      height: 350,
    },
    {
      type: 'Graphic design',
      imageSrc: Image3,
      link: 'https://example.com/design',
      description: 'Description for Design',
      width: 300,
      height: 250,
    },
    // Add more work items as needed
  ];

  const filteredWorkItems = workItems.filter(item => {
    const typeMatch = filter === 'all' || item.type === filter;
    const searchMatch = item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatch && searchMatch;
  });

  const options = ['all', 'web-design', 'logo', 'Graphic design', 'design'];

  return (
    <div>
      <Navbar />
      <div className='bg-gradient-to-tr from-purple-900 via-black to-purple-950 min-h-screen'>
        <div className='container mx-auto'>
          <div>
            <Link to="/home" className='text-white ml-8'>
              <img src="./backbutton.svg" alt="back-arrow" className='text-white w-8 h-8'/>
            </Link>
          </div>
          {/* Search bar */}
          <div className="mb-4">
            <label className="mr-2 text-white font-bold text-lg">Search:</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-white border-b p-2 focus:border-b-orange-500 bg-transparent focus:outline-none w-1/2"
              placeholder='search logo, design, web design, etc'
            />
          </div>

          {/* Filter options */}
          <div className="mb-4">
            <label className="mr-2 text-white">Filter:</label>
            <motion.select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border p-2 bg-gradient-to-bl text-orange-500 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence>
                {options.map((option, index) => (
                  <motion.option
                    key={option}
                    value={option}
                    className='bg-gradient-to-bl bg-black hover:bg-transparent'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {option}
                  </motion.option>
                ))}
              </AnimatePresence>
            </motion.select>
          </div>

          {/* Display filtered work items with improved bento box layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {filteredWorkItems.map((work, index) => (
              <motion.div
                key={index}
                layout
                whileHover={{ scale: 1.05, zIndex: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }} // Add a smooth transition
                className="relative overflow-hidden rounded-md shadow-md bg-gray-800"
                style={{
                  width: `${work.width}px`,
                  height: `${work.height}px`,
                  margin: '20px',
                }}
              >
                <img
                  src={work.imageSrc}
                  alt={work.type}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white text-lg font-bold">{work.type}</p>
                  <p className="text-gray-300">{work.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoDesign;