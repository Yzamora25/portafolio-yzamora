import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Logo from '../img/brand_white.png';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      {/* Navbar */}
      <div className={`fixed w-full h-[80px] flex z-50 justify-between items-center px-4 bg-[#000000] text-white transition-all duration-300 ${nav && 'bg-opacity-90'}`}>
        <div>
          <img src={Logo} alt="logo" className='h-12 sm:h-12 md:h-20 lg:h-12' />
        </div>

        {/* menu */}
        <div className='hidden md:flex'>
          <ul className='flex'>
            <li>
              <Link to='home' smooth={true} duration={1000}>Inicio</Link>
            </li>
            <li>
              <Link to='about' smooth={true} duration={1000}>Sobre Mi</Link>
            </li>
            <li>
              <Link to='skills' smooth={true} duration={1000}>Habilidades</Link>
            </li>
            <li>
              <Link to='proyects' smooth={true} duration={1000}>Proyectos</Link>
            </li>
            <li>
              <Link to='contact' smooth={true} duration={1000}>Contacto</Link>
            </li>
          </ul>
        </div>

        {/* hambuger */}
        <div onClick={handleClick} className='md:hidden z-50'>
          {!nav ? <FaBars className='text-3xl' /> : <FaTimes className='text-3xl' />}
        </div>
      </div>

      {/* Mobile menu */}
      <ul className={`md:hidden fixed w-full h-screen bg-[#000000ee] flex flex-col justify-center items-center transition-all duration-300 ${!nav && 'opacity-0 pointer-events-none'}`}>
        <li className='py-6 text-3xl'>
          <Link to='home' smooth={true} duration={1000}>Inicio</Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link to='about' smooth={true} duration={1000}>Sobre Mi</Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link to='skills' smooth={true} duration={1000}>Habilidades</Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link to='proyects' smooth={true} duration={1000}>Proyectos</Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link to='contact' smooth={true} duration={1000}>Contacto</Link>
        </li>
      </ul>

      {/* Social media */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-50'>
        <ul className='container'>
          <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000] hover:bg-[#50C6B3] rounded-lg'>
            <a href="https://www.linkedin.com/in/yzamoramx/" className='flex items-center w-full text-gray-300 justify-between'>
              Linkedin<FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000] hover:bg-[#50C6B3] rounded-lg'>
            <a href="https://github.com/Yzamora25" className='flex items-center w-full text-gray-300 justify-between'>
              Github<FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000] hover:bg-[#50C6B3] rounded-lg'>
            <a href="mailto:yzamoramx@gmail.com" className='flex items-center w-full text-gray-300 justify-between'>
              Email<FaEnvelope size={30} />
            </a>
          </li>
        </ul>
      </div>

      
    </>
  );
}

export default Navbar;
