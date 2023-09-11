import React from 'react';
import Foto from '../img/foto.png';
import { Link } from 'react-scroll';
function Home() {
  return (
    <div name='home' className='w-full h-screen flex flex-col justify-center items-center w-full min-h-screen bg-[#000000]'>


      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full md:pt-0'>
        <div className='flex flex-col justify-center items-center md:flex-row md:justify-between'>
          {/* Text */}
          <div className='flex flex-col justify-center items-center md:w-1/2'>
            <h1 className='text-3xl md:text-3xl text-white font-bold text-center'>¡Hola!👋, me llamo Yuliana Zamora</h1>
            <p className='text-white text-center text-[22px] mt-4 py-4 max-w-[700px]'>
              Soy <strong>Desarrolladora Web Jr</strong>, me encanta aprender nuevas tecnologías y crear proyectos que ayuden a las personas.
            </p>
            <div>

              <ul class="flex items-center space-x-2">
                <li>

                  <Link to='about' smooth={true} duration={1000} className='bg-gradient-to-r from-cyan-500 from-teal-500 text-white font-bold px-4 py-2 rounded-md md:ml-4'>Sobre Mi 👈</Link>

                </li>
                <li>
                  <a
                    href="#"
                    className='bg-gradient-to-r from-cyan-500 from-teal-500 text-white font-bold px-4 py-2 rounded-md md:ml-4'
                  >CV 💻</a
                  >
                </li>
              </ul>

            </div>
          </div>

          {/* Image */}
          <div className='flex justify-center items-center md:w-1/2 relative mx-auto bg-gradient-to-b from-teal-300 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96 md:mr-8 md:block hidden'>
            <img src={Foto} className='w-full h-full object-cover absolute top-0 left-0 z-0' alt="Foto" />
          </div>



        </div>
      </div>
    </div>
  );
}

export default Home;
