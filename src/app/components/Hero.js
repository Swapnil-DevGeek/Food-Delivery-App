import Image from 'next/image'
import React from 'react'

import { pizza } from '../../../public/index'
import Right from './Icons/Right'

const Hero = () => {
  return (
    <>
    <section className='hero-section'>
        <div className=' py-12'>
        <h1 className='text-4xl font-semibold '>Everything <br />
         is better <br />
         with a <span className='text-primary font-bold'>
            Pizza
        </span>
        </h1>
        <p className='my-6 text-gray-500 text-sm'>
            Pizza is the missing peace that makes evry day complete, a simple yet delicious joy in life</p>
        <div className='flex gap-4 items-center text-sm'>
            <button className='flex items-center gap-3 uppercase bg-primary text-white rounded-full px-4 py-2'>
                Order Now
                <Right/>
            </button>
            <button className='flex items-center gap-4 py-2 text-gray-600 font-semibold'>
                Learn More
                <Right/>    
            </button>
        </div>
        </div>
        
        <div className='relative'>
        <Image src={pizza} layout={'fill'} objectFit={'contain'} alt="Pizza" />    
        </div>
   </section>    
    </>
  )
}

export default Hero
