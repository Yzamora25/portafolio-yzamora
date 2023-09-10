
import React from 'react';
import '../Preloader.css';

function Preloader() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black-100">
      <div>
        

        <svg className="solar-system" width="500" height="500">
          <circle id="sun" cx="200" cy="200" r="14" stroke="none" fill="#fff" />

          <circle id="circle-one" cx="200" cy="200" r="6" fill="#00A3A9" stroke="none" />

          <circle id="circle-two" cx="200" cy="200" r="8" fill="#00A3A9" stroke="none" />

          <circle id="circle-three" cx="200" cy="200" r="10" fill="#00A3A9" stroke="none" />

          <circle id="circle-four" cx="200" cy="200" r="12" fill="#00A3A9" stroke="none" />

          <circle id="circle-one-orbit" cx="200" cy="200" r="35" fill="none" stroke="rgba(255,255,255)" strokeWidth="0.5" />

          <circle id="circle-two-orbit" cx="200" cy="200" r="55" fill="none" stroke="rgba(255,255,255)" strokeWidth="0.5" />

          <circle id="circle-three-orbit" cx="200" cy="200" r="75" fill="none" stroke="rgba(255,255,255)" strokeWidth="0.5" />

          <circle id="circle-four-orbit" cx="200" cy="200" r="95" fill="none" stroke="rgba(255,255,255)" strokeWidth="0.5" />
        </svg>

        <div className="night-bg"></div>
      </div>
    </div>
  );
}

export default Preloader;
