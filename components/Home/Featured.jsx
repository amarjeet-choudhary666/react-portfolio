import React from 'react'

function Featured() {
return (
    <div className='py-20 w-full bg-zinc-600 text-white'>
        <div>
            <h1 className='text-8xl border-b-[1px] border-b-zinc-400 py-10'>Featured Projects</h1>
        </div>
        <div className='flex px-10 gap-10  mt-20'>
        <div className='cardContainer relative w-1/2  h-[80vh]'>
        <h1 className='absolute uppercase text-8xl mb-10 left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none text-[#CDEA68]'>fyde</h1>
            <img className=' h-[80vh] rounded-xl' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png'/>
        </div>
        <div className=' cardConatiner relative w-1/2 h-[80vh]'>
        <h1 className='absolute uppercase text-8xl mb-10  right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-[#CDEA68]'>vise</h1>
            <img className=' h-[80vh]  rounded-xl' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg'/>
        </div>
    </div>
    </div>
)
}

export default Featured
