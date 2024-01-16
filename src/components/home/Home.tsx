// src/components/Home.js
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="bg-gradient-to-tr from-purple-950 via-black to-black relative text-white">
      <div className="container mx-auto flex flex-col items-center">
        {/* Image and Button */}
          <div className="lg:text-center mb-4 md:text-left lg:mb-12 text-center">
          <h1 className="lg:text-7xl text-5xl font-bold relative md:text-6xl">
              <span className="bg-gradient-to-l from-purple-500 via-orange-500 to-black bg-clip-text text-transparent">Design</span> that<span className="bg-gradient-to-tr from-purple-500 via-orange-500 to-pink-500 bg-clip-text text-transparent"> Speaks</span><span>, </span>
              <span className="bg-gradient-to-br from-purple-500 via-orange-500 to-pink-500 bg-clip-text text-transparent ">Solutions</span> that <span className="bg-gradient-to-t from-purple-500 via-orange-500 to-pink-500 bg-clip-text text-transparent ">Work</span>.
          </h1>
          
          </div>

        <div className="w-full relative flex flex-col lg:flex-row-reverse justify-between lg:gap-8">
          
          <div className="lg:w-1/2">
            <Carousel />
          </div>

          <div className="lg:w-1/2 lg:my-auto">
            <p className="text-2xl ">
            We create stunning websites, design logos, posters,
            and excel in social media marketing. 
            </p>
            <p className="text-2xl mt-2">Let us bring your ideas to life!</p>
            <button className="bg-gradient-to-tr from-black via-black to-purple-500 mb-4 text-white px-4 py-2 rounded ring-4 hover:ring-2 focus:ring-2 hover:bg-purple-900 transition-all mt-10">
            Speak to Us
          </button>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Home;
