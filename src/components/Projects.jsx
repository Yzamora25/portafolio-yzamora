import React from 'react';
import Proyectos from '../img/PROYECTOS.png';
import Work from '../img/work.jpg';
function Projects() {
  return (
    <div name='proyects' className='w-full md:h-screen text-gray-300 bg-[#000000] mb-32'>
      
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <div className='pb-8 pr-4 md:pr-0 flex justify-center items-center md:items-start md:pt-24'>
            <img src={Proyectos} alt="Proyectos" className='h-12 sm:h-12 md:h-20 lg:h-16' />

          </div>
          <div className='max-w-[1000px] w-full grid gap-8 px-4 sm:text-center text-[20px] text-center'>
            <p className='py-4'>
              Estos son algunos de mis proyectos más recientes
            </p>
          </div>

          {/* container */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* grid item 1 */}
            <div style={{backgroundImage: `url(${Work})`}} className='shadow-lg shadow-[#1f1f1f] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white text-center tracking-wider'>
                  Portafolio personal
                </span>
                <p className='text-white text-1xl text-center text-sm'>
                  React Js - Tailwind CSS
                </p>
                <div className='pt-8 text-center'>
                  <a href="http://">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver</button>
                  </a>
                  
                </div>
              </div>
            </div>

            {/* grid item 2 */}
            <div style={{backgroundImage: `url(${Work})`}} className='shadow-lg shadow-[#1f1f1f] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white text-center tracking-wider'>
                  Portafolio personal
                </span>
                <p className='text-white text-1xl text-center text-sm'>
                  React Js - Tailwind CSS
                </p>
                <div className='pt-8 text-center'>
                  <a href="http://">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver</button>
                  </a>
                  
                </div>
              </div>
            </div>

            {/* grid item 3 */}
            <div style={{backgroundImage: `url(${Work})`}} className='shadow-lg shadow-[#1f1f1f] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white text-center tracking-wider'>
                  Portafolio personal
                </span>
                <p className='text-white text-1xl text-center text-sm'>
                  React Js - Tailwind CSS
                </p>
                <div className='pt-8 text-center'>
                  <a href="http://">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver</button>
                  </a>
                  
                </div>
              </div>
            </div>

            {/* grid item 1 */}
            <div style={{backgroundImage: `url(${Work})`}} className='shadow-lg shadow-[#1f1f1f] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white text-center tracking-wider'>
                  Portafolio personal
                </span>
                <p className='text-white text-1xl text-center text-sm'>
                  React Js - Tailwind CSS
                </p>
                <div className='pt-8 text-center'>
                  <a href="http://">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver</button>
                  </a>
                  
                </div>
              </div>
            </div>

            {/* grid item 2 */}
            <div style={{backgroundImage: `url(${Work})`}} className='shadow-lg shadow-[#1f1f1f] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white text-center tracking-wider'>
                  Portafolio personal
                </span>
                <p className='text-white text-1xl text-center text-sm'>
                  React Js - Tailwind CSS
                </p>
                <div className='pt-8 text-center'>
                  <a href="http://">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver</button>
                  </a>
                  
                </div>
              </div>
            </div>

            {/* grid item 3 */}
            <div style={{backgroundImage: `url(${Work})`}} className='shadow-lg shadow-[#1f1f1f] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white text-center tracking-wider'>
                  Portafolio personal
                </span>
                <p className='text-white text-1xl text-center text-sm'>
                  React Js - Tailwind CSS
                </p>
                <div className='pt-8 text-center'>
                  <a href="http://">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver</button>
                  </a>
                  
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
