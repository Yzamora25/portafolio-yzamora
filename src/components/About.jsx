import React from 'react';
import Sobre from '../img/SOBRE MI.png';

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#000000] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8'>

          <div className='pb-8 pr-4 md:pr-0 flex justify-center items-center md:items-start md:pt-24'>
            <img src={Sobre} alt="Sobre Mi" className='h-12 sm:h-12 md:h-20 lg:h-16 w-full' />
          </div>

          <div className='max-w-[1000px] w-full grid gap-8 px-4 sm:text-justify text-[20px] text-justify'>
            <p>
              Soy una profesional apasionada por el desarrollo de soluciones creativas para empresas. Con 2 años de experiencia en liderazgo de proyectos de <span className='text-[#50C6B3] font-bold'>Tecnologías de la Información</span> y 1 año brindando <span className='text-[#50C6B3] font-bold'>soporte técnico</span> de primer y segundo nivel, he adquirido un profundo conocimiento en la optimización de procesos y la mejora de la experiencia del cliente. Estoy constantemente actualizándome en nuevas tecnologías para seguir mejorando mis habilidades técnicas y mantenerme al tanto de las últimas tendencias en el campo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
