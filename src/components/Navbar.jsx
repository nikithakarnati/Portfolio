import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkStyle = "block md:inline-block py-3 md:py-0 hover:text-purple-400 transition duration-300";
  const activeStyle = "text-purple-400 font-semibold";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0f172a] text-white px-6 md:px-20 py-4 flex justify-between items-center sticky top-0 z-20">
      <Link to="/" className="text-xl font-bold text-purple-300">
        Nikitha' Portfolio
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-xl focus:outline-none focus:ring-2 focus:ring-purple-400">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`md:flex md:gap-6 md:text-lg absolute md:relative top-full left-0 w-full md:w-auto bg-[#1e293b] md:bg-transparent z-10 shadow-md md:shadow-none ${isOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'}`}>
        <ul className={`flex flex-col md:flex-row items-center md:items-baseline p-4 md:p-0 ${!isOpen && 'hidden md:flex'}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? `${linkStyle} ${activeStyle}` : linkStyle} onClick={() => setIsOpen(false)}>Home</NavLink>
          </li>
          <li className="md:ml-6">
            <NavLink to="/about" className={({ isActive }) => isActive ? `${linkStyle} ${activeStyle}` : linkStyle} onClick={() => setIsOpen(false)}>About</NavLink>
          </li>
          <li className="md:ml-6">
            <NavLink to="/projects" className={({ isActive }) => isActive ? `${linkStyle} ${activeStyle}` : linkStyle} onClick={() => setIsOpen(false)}>Projects</NavLink>
          </li>
          <li className="md:ml-6">
            <NavLink to="/contact" className={({ isActive }) => isActive ? `${linkStyle} ${activeStyle}` : linkStyle} onClick={() => setIsOpen(false)}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;