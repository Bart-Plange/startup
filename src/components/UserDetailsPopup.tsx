import React, { useState } from 'react';

const UserDetailsPopup = ({ closePopup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('website'); // Default service
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleSubmit = async () => {
    try {
      // Simulating a successful submission
      console.log('Submitted:', {
        name,
        email,
        phone,
        company,
        service,
        additionalDetails,
      });

      // Set success message
      setSubmissionResult({ type: 'success', message: 'Submission successful!' });

      // Close the popup after a delay or redirect to another page
      setTimeout(() => {
        closePopup();
      }, 3000);
    } catch (error) {
      // Simulating an error
      console.error('Submission failed. Please try again.');

      // Set error message
      setSubmissionResult({ type: 'error', message: 'Submission failed. Please try again.' });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center min-h-screen bg-gray-900 bg-opacity-75 ">
      <div className="bg-gradient-to-tr from-purple-900 via-black to-black p-6 rounded-lg md:w-96 z-50">
        <span
          className="absolute top-2 right-2 text-xl cursor-pointer"
          onClick={closePopup}
        >
          &times;
        </span>
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Provide Your Details</h2>

        {submissionResult && (
          <div className={`mb-4 ${submissionResult.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {submissionResult.message}
          </div>
        )}

        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white text-xl">Name: <span className='text-red-500'>*</span></label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full text-orange-500 focus:outline-none focus:border-orange-500"
              required
              placeholder='enter full name'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-xl">Email: <span className='text-red-500'>*</span></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full text-orange-500 focus:outline-none focus:border-orange-500"
              required
              placeholder='enter email'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-white text-xl">Phone: <span className='text-red-500'>*</span></label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border p-2 w-full text-orange-500 focus:outline-none focus:border-orange-500"
              required
              placeholder='enter phone number'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block text-white text-xl">Company:</label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="border p-2 w-full text-orange-500 focus:outline-none focus:border-orange-500"
              placeholder='company name'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="service" className="block text-white text-xl">Select Service: <span className='text-red-500'>*</span></label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="border p-2 w-full text-orange-500 focus:outline-none focus:border-orange-500"
              required
            >
              <option value="website">Website</option>
              <option value="logo">Logo</option>
              <option value="graphic-design">Graphic Design</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="additionalDetails" className="block text-white text-xl">Additional Details: <span className='text-red-500'>*</span></label>
            <textarea
              id="additionalDetails"
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
              className="border p-2 w-full text-orange-500 focus:outline-none focus:border-orange-500"
              required
              placeholder='Tell us your specifications'
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gradient-to-tr from-black via-black to-purple-500 mb-4 text-white px-4 py-2 rounded ring-4 hover:ring-2 focus:ring-2 hover:bg-purple-900 transition"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-gradient-to-tr from-black via-black to-purple-500 mb-4 text-white px-4 py-2 rounded ring-4 hover:ring-2 focus:ring-2 hover:bg-purple-900 transition ml-4"
              onClick={closePopup}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const UserDetailsPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-4">You can tell us what you need and that's it.</h1>
      <p className="mb-4">Click the button below to provide your details for website, logo, or graphic design:</p>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={openPopup}
      >
        Provide Details
      </button>

      {isPopupOpen && <UserDetailsPopup closePopup={closePopup} />}
    </div>
  );
};

export default UserDetailsPage;
