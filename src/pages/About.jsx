import React, { useState } from 'react'

const About = () => {
    const [number,setNumber]= useState(0)
    const Increase = () =>{
        setNumber(number + 1)
    }
    const Decrease = () =>{
        if (number===0) {
            setNumber(0)
        }else{

            setNumber(number - 1)
        }
    }
    const Reset = () =>{
        setNumber(0)
    }
  return (
    <div className='h-[76vh] bg-gradient-to-b from-slate-600 to-slate-300 flex justify-center items-center'>
     <div className='bg-amber-500 flex flex-col justify-center items-center rounded-lg my-5 h-[430px] sm:w-[450px] md:w-[450px] lg:w-[450px] xl:w-[450px] w-[95%] border-2px border-amber-700 border-solid '>
     <h1 className='text-[80px] mb-32 text-amber-700 font-bold'>{number}</h1>
     <div className='flex flex-wrap justify-center items-center'>
     <button onClick={Increase} type="button" className="focus:outline-none text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-bold  rounded-lg text-2xl px-5 py-2.5 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-900 ">Increase</button>
     <button onClick={Reset} type="button" className="focus:outline-none text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-bold  rounded-lg text-2xl px-5 py-2.5 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-900  mx-2">Reset</button>
     <button onClick={Decrease} type="button" className="focus:outline-none text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-bold  rounded-lg text-2xl px-5 py-2.5 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-900 ">Decrease</button>
     </div>
     </div>
    </div>
  )
}

export default About