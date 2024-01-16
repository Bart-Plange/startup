import { useState } from 'react';
import NotificationImg from '../assets/images/bartwebznoti.jpg'
const ProductPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  const redirectToProductPage = () => {
    window.location.href = '/servicesPage';
  };

  return (
    <div className={`fixed inset-0 ${showPopup ? 'block' : 'hidden'} z-50`}>
      <div className="flex items-center justify-center min-h-screen bg-gray-800 bg-opacity-75">
        <div className="bg-gradient-to-bl from-purple-900 via-black to-black p-6 rounded-lg">
        <div>    
          <span
            className="absolute top-2 right-12 text-3xl cursor-pointer text-white"
            onClick={closePopup}
          >
            &times;
          </span>
          <h2 className="text-2xl font-bold mb-4 text-orange-500 text-center">New Product/Service Alert!</h2>
          </div>
          <div className='flex px-6 justify-center align-center'>
          <div>
          <img
            src={NotificationImg} 
            alt="Product Img"
            className="mb-4 rounded-lg"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
           </div>
           <div className='ml-8'>
          <p className="text-gray-700 mb-4 w-1/2">
            Introducing our latest product/service. Check it out now!
          </p>
          <div className="flex gap-8">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              onClick={redirectToProductPage}
            >
              View Now
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
