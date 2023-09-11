import React from 'react';
import Contacto from '../img/CONTACTAME.png';
import Background from '../img/background.jpg'; 


function Contact() {
  return (
    <div name='contact' className='img-background w-full h-screen  relative'>
      
      
      <style>
        {`
          .img-background {
            whidth: 100%;
            height: 120vh;
            background-image: url(${Background});
            background-position: center;
            background-repeat: no-repeat;
          
          }

          input{
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            padding: 10px;
            color: white !important;
            height: 40px;
            margin: 10px 10px 10px 0px;

            

          }
          textarea{
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            padding: 10px;
            color: white !important;
            height: 100px;
          }

        `}
      </style>
      <div className='flex justify-center items-center  p-4 mt-8'>
        <form action='' method='post' className='flex flex-col p-4 max-w-[600px] w-full'>
        <div className='pb-8'>
          <div className='pb-8 pr-4 md:pr-0 flex justify-center items-center md:items-start md:pt-24'>
            
            <img src={Contacto} alt="Contacto" className='h-12 sm:h-12 md:h-20 lg:h-16 ' />
          </div>

          <div className='grid grid-cols-1 gap-4'>
            
            <div className='flex flex-col'>
              <label htmlFor="name" className='text-white'>Nombre Completo</label>
              <input type="text" name="name" id="name" className='border-2 border-gray-300 text-gray-700 rounded-md p-2' />
              </div>
            <div className='flex flex-col'>
              <label htmlFor="email" className='text-white'>Email</label>
              <input type="email" name="email" id="email" className='border-2 border-gray-300 text-gray-700 rounded-md p-2' />
              </div>
            <div className='flex flex-col'>
              <label htmlFor="phone" className='text-white'>Teléfono</label>
              <input type="tel" name="phone" id="phone" className='border-2 border-gray-300 text-gray-700 rounded-md p-2' />
              </div>
            <div className='flex flex-col'>
              <label htmlFor="message" className='text-white'>Mensaje</label>
              <textarea name="message" id="message" cols="20" rows="5" className='border-2 border-gray-300 text-gray-700 rounded-md p-2'></textarea>
              </div>
            <div className='flex justify-center'>
              <button type='submit' className='rounded-lg px-4 py-3 m-2 bg-gradient-to-r from-cyan-500 from-teal-500 text-white font-bold text-lg'>Enviar</button>
              </div>
          </div>
        </div>
      </form>
    </div>
    
    </div>
    
  );
}

export default Contact;
