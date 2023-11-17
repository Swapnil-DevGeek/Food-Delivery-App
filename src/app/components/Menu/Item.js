import React from 'react'

const Item = () => {
  return (
    <div className='bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25'>
        <div className='text-center '>
        <img src="/pizza.png" alt="pizza" className='max-h-28 block mx-auto'/>
        </div>
        <h4 className='font-semibold my-3'>Pepperoni Pizza</h4>
        <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <button className='mt-4 bg-primary text-white rounded-full py-2 px-8'>Add To Cart $12</button>
    </div>
  )
}

export default Item
