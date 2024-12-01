import React from 'react'

function Navbar() {
return (
    <div className='fixed leading-none z-[999] font-poppins flex justify-between text-white w-full px-20 py-4 backdrop-blur-3xl'>
    <div className='logo  ml-48 pt-2'>
    <img className='w-16 ' src='https://anuragsinghbam.com/images/name-logo-white.svg'/>
    </div>
    <div className='links flex justify-center items-center gap-7 mr-80'>
    <a className='text-2xl font-poppins' target='_blank' rel='norferror' href='https://drive.google.com/file/d/1tbXARz2h5iPYygNB8tQDQRbhmOeXhNGl/view?usp=sharing'>CV</a>

    </div>
    </div>
)
}

export default Navbar
