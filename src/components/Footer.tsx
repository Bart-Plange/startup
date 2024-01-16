import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from '/bartwebz.png';

const Footer = () => {
  const links = [
    { label: 'About', url: '#about' },
    { label: 'Services', url: '#services' },
    { label: 'Work', url: '/work' },
    { label: 'Contact', url: '#' },
  ];

  return (
    <div className="bg-black">
      <div className="container mx-auto py-8 lg:py-12 px-4 lg:px-12 text-white flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-6 lg:mb-0">
          {/* Display logo from Navbar */}
          <Link to={'/'}>
            <img src={Logo} alt="logo" className='h-16 bg-transparent w-16' />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
          {/* Display links from Navbar */}
          <ul className="flex flex-wrap gap-4 lg:gap-6 text-white">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4 lg:mt-0">
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="text-center lg:text-right mt-6 lg:mt-0">
          <p className="text-sm">Copyright@2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
