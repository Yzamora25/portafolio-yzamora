import React from 'react'
import Bootstrap from '../img/iconos/Bootstrap.svg'
import CSS from '../img/iconos/CSS3.svg'
import HTML from '../img/iconos/HTML5.svg'
import JS from '../img/iconos/JavaScript.svg'
import ReactJS from '../img/iconos/React.svg'
import Tailwind from '../img/iconos/Tailwind.svg'
import MySQL from '../img/iconos/MySQL.svg'
import PHP from '../img/iconos/PHP.svg'
import Habilidades from '../img/HABILIDADES.png'
import Postman from '../img/iconos/Postman.svg'
import WordPress from '../img/iconos/WordPress.svg'
import Illustrator from '../img/iconos/Illustrator.svg'
import Photoshop from '../img/iconos/Photoshop.svg'

function Skills() {
  return (
    <div name='skills' className='w-full  bg-[#000000] text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <div className='pb-8 pr-4 md:pr-0 flex justify-center items-center md:items-start md:pt-24'>
            <img src={Habilidades} alt="Habilidades" className='h-12 sm:h-12 md:h-20 lg:h-16 ' />

          </div>
          <div className='max-w-[1000px] w-full grid gap-8 px-4 sm:text-center text-[20px] text-center'>
            <p className='py-4'>
              Estas son las tecnologías con las que he trabajado
            </p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            {/* html */}
            <div className='shadow-md shadow-[#292929] hover:scale-110 duration-500'>
              <img src={HTML} alt="HTML" className='w-20 h-20 mx-auto' />
              <p className='py-4'>HTML</p>
            </div>
            {/* css */}
            <div className='shadow-md shadow-[#292929] hover:scale-110 duration-500'>
              <img src={CSS} alt="CSS" className='w-20 h-20 mx-auto' />
              <p className='py-4'>CSS</p>
            </div>
            {/* js */}
            <div className='shadow-md shadow-[#292929] hover:scale-110 duration-500'>
              <img src={JS} alt="JS" className='w-20 h-20 mx-auto' />
              <p className='py-4'>JavaScript</p>
            </div>
            {/* bootstrap */}
            <div className='shadow-md shadow-[#292929] hover:scale-110 duration-500'>
              <img src={Bootstrap} alt="Bootstrap" className='w-20 h-20 mx-auto' />
              <p className='py-4'>Bootstrap</p>
            </div>
            {/* tailwind */}
            <div className='shadow-md shadow-[#292929] hover:scale-110 duration-500'>
              <img src={Tailwind} alt="Tailwind" className='w-20 h-20 mx-auto' />
              <p className='py-4'>Tailwind</p>
            </div>
            {/* react */}
            <div className='shadow-md shadow-[#292929] hover:scale-110 duration-500'>
              <img src={ReactJS} alt="ReactJS" className='w-20 h-20 mx-auto' />
              <p className='py-4'>ReactJS</p>
            </div>
            {/* php */}
            <div className='shadow-md shadow-[#292929] hover:scale-110 duration-500'>
              <img src={PHP} alt="PHP" className='w-20 h-20 mx-auto' />
              <p className='py-4'>PHP</p>
            </div>
            {/* mysql */}
            <div className='shadow-md shadow-[#292929] hover:scale-110 duration-500'>
              <img src={MySQL} alt="MySQL" className='w-20 h-20 mx-auto' />
              <p className='py-4'>MySQL</p>
            </div>
            {/* postman */}
            <div className='shadow-md shadow-[#292929] hover:scale-110 duration-500'>
              <img src={Postman} alt="Postman" className='w-20 h-20 mx-auto' />
              <p className='py-4'>Postman</p>
            </div>
            {/* wordpress */}
            <div className='shadow-md shadow-[#292929] hover:scale-110 duration-500'>
              <img src={WordPress} alt="WordPress" className='w-20 h-20 mx-auto' />
              <p className='py-4'>WordPress</p>
            </div>
            {/* illustrator */}
            <div className='shadow-md shadow-[#292929] hover:scale-110 duration-500'>
              <img src={Illustrator} alt="Illustrator" className='w-20 h-20 mx-auto' />
              <p className='py-4'>Illustrator</p>
            </div>
            {/* photoshop */}
            <div className='shadow-md shadow-[#292929] hover:scale-110 duration-500'>
              <img src={Photoshop} alt="Photoshop" className='w-20 h-20 mx-auto' />
              <p className='py-4'>Photoshop</p>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills