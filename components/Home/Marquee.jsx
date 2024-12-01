import React from 'react';
import { motion } from 'framer-motion'

function Marquee() {
  

  return (
    <div className='bg-[#004D43]   w-full  rounded-tl-3xl py-24 rounded-tr-3xl overflow-hidden '>
      <div className='text border-t-2 border-b-2 uppercase border-zinc-400  flex whitespace-nowrap  text-white '>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[20vw]  font-sans font-extrabold  pr-44 leading-none'>i am a web developer</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[20vw]  font-sans font-extrabold   leading-none'>i am a web developer</motion.h1>
      </div>
      
    </div>
  )
}

export default Marquee
