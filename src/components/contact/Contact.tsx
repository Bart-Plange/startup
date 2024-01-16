import { useState } from 'react';
import axios from 'axios';
import Call from '../../assets/images/call.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Your authentication logic here
      const response = await axios.post('YOUR_AUTHENTICATION_ENDPOINT', formData);

      // Check the response status and handle accordingly
      if (response.status === 200) {
        setSuccessMessage('Form data submitted successfully!');
        // Optionally, you can reset the form data after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setErrorMessage('Authentication failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div id='contact' className="bg-gradient-to-tr from-black via-black to-purple-950 py-8 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="lg:w-1/2">
          <div className="text-center lg:text-left">
            <p className="text-orange-500 text-5xl md:text-7xl font-bold mb-4">Contact Us</p>
            
        <div className="">
          <div className="flex items-center justify-center lg:justify-end">
            <div className="border border-purple-900 p-6 rounded-full">
              <img src={Call} alt="Contact Illustration" className="h-24 lg:h-32 " />
            </div>
          </div>
        </div>
        
        <p className="text-white text-lg mt-6">
              Have any questions or inquiries? Feel free to reach out to us. We are here to assist you!
        </p>
        </div>
        </div>


        <form onSubmit={handleSubmit} className="lg:w-1/2 mt-8 lg:mt-0 w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-start">
              <label htmlFor="name" className="text-white mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 p-2 text-white focus:outline-none focus:border-orange-500"
                autoComplete="none"
                required
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="email" className="text-white mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 p-2 text-white focus:outline-none focus:border-orange-500"
                autoComplete="none"
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-start mt-6">
            <label htmlFor="message" className="text-white mb-2">Message:</label>
            <textarea
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border border-gray-400 p-2 text-white focus:outline-none focus:border-orange-500 resize-none"
              required
            />
          </div>
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-orange-500 text-black px-6 py-3 rounded-full hover:bg-orange-600 focus:outline-none"
            >
              Send Message
            </button>
          </div>
          {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
