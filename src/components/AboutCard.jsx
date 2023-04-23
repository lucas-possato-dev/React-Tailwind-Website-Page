import React from 'react'


const AboutCard = (props) => {
  return (
    <div className='flex flex-col border text-start rounded-2xl py-12 px-8 hover:scale-105 transition-all duration-300'>
    <div>
      <div className='bg-[--primary-blue] inline-flex p-2 rounded-full'>
        {props.icon}
      </div>
      <h3 className='text-2xl font-bold py-4'>{props.heading}</h3>
      <p>
        {props.text}
      </p>
    </div>    
  </div>
  )
}

export default AboutCard