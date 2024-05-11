import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className='cursor-pointer  hover:shadow-2xl transition duration-300 overflow-hidden  w-[300px] h-[400px] rounded-xl m-2 border-2 border-solid border-amber-700 '>
        <img className='w-full h-1/2 object-cover transition-transform duration-500 ease-in-out hover:scale-105 ' src={props.imge} alt="img" />
        <h1 className='text-[20px] py-6 text-amber-700 px-1'>{props.title}</h1>
        <p className='text-1xl text-amber-500 px-1'>Price of the day-${props.price}</p>
    </div>

    </>
  )
}

export default Card