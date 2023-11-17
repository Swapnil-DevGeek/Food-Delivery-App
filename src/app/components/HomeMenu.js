import Image from 'next/image'
import React from 'react'
import Item from './Menu/Item'
import SectionHeaders from './SectionHeaders'

const HomeMenu = () => {
  return (
    <section>
        <div className='overflow-x-hidden left-0 right-0'>
            <div className='absolute top-64 left-0 -z-10'>
                <Image src={'/sallad1.png'} width={109} height={189} alt='sallad'/>    
            </div>

            <div className='h-48 absolute top-64 right-0 -z-10'>
                <Image src={'/sallad2.png'} width={107} height={195} alt='sallad'/>    
            </div>
            
        </div>
        
        <SectionHeaders 
            subHeader = {'Check out'}
            mainHeader = {'Menu'}    
        />
        
        <div className='grid grid-cols-3 gap-10 my-6'>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
           <Item/>
        </div>

    </section>
  )
}

export default HomeMenu
