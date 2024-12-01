import React from 'react'

function Card() {
return (
    <div className='w-full pl-20 bg-zinc-800  flex items-center gap-10 h-screen'>
    <div className='cardContainer w-1/2 h-[50vh]'>
        <div className='relative w-full rounded-xl flex justify-center items-center h-full bg-[#004D43]'>
            <img className='w-40' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
            <button className='absolute text-[#CDEA68] text-lg border-[#CDEA68] px-5 py-2 rounded-full border-2 left-10 bottom-10'>©2019-2022</button>
        </div>
    </div>
    <div className=' flex gap-10 mr-20  w-1/2 h-[50vh]'>
        <div className='Card relative w-1/2 h-full flex justify-center items-center rounded-xl  bg-[#212121]'>
            <img className=' w-1/2' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' />
            <button className='absolute text-white text-lg border-white px-5 py-2 rounded-full border-2 left-10 bottom-10'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='relative Card w-1/2 h-full flex justify-center items-center rounded-xl bg-[#212121]'>
            <img src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' />
            <button className='absolute  text-lg text-white px-5 py-2 rounded-full border-2 left-10 bottom-10 font-sans'>BUSSINESS BOOTCAMP ALUMUNI</button>
        </div>
    </div>
    </div>
)
}

export default Card
