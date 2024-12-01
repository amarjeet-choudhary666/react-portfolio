import React, { useEffect, useState } from 'react';


function Eyes() {
const [rotate, setRotate] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {

      let mouseX = e.clientX
      let mouseY = e.clientY
      
      const detltaX = mouseX - window.innerWidth/2;
      const deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY, detltaX) * (180/Math.PI) 
      setRotate(angle -180)
    })
  }, [])



  return (
    <div className='  w-full h-screen overflow-hidden'>
    <div  className=' relative w-full h-full  bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div  className='absolute mt-52  flex justify-center gap-12  left-1/2    w-1/2 '>
        <div className='flex gap-12  -translate-x-[80%] translate-y-[30%]'>
            <div  className=' w-[15vw] h-[15vw] flex justify-center rounded-full items-center bg-white'>
              <div className='relative w-2/3  h-2/3 rounded-full bg-black'>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='w-10 h-10 rounded-full flex justify-center items-center bg-white'>
                  <img className='p-1' src='https://cdn.worldvectorlogo.com/logos/react-2.svg' />
                </div> 
                </div>
              </div>
            </div>
            <div className=' w-[15vw] h-[15vw] flex justify-center rounded-full  items-center bg-white'>
              <div className=' relative w-2/3  h-2/3 rounded-full bg-black '>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute w-full h-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='w-10 flex justify-center items-center h-10 rounded-full bg-white'>
                  <img className='p-1' src='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' />
                </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Eyes
